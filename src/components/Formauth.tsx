'use client'
// import { loginWithGoogle } from "@/modules/auth/services/loginWithGoogle"
import { useForm } from "react-hook-form"
import { authSchema } from "@/schema/authSchema";
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from "./Button";
import { useAuth } from "@/hooks/useAuth";

export const Form = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
    username: '',
    password: '',},
    resolver: yupResolver(authSchema)
    });

    const onSubmit = () => {
        console.log('Formulario enviado...')
        reset();
    }

    const {signInWithGoogle, loading} = useAuth();

    return(
        <section>
            <aside>
                <h2>Bienvenidos a TorneoUp</h2>
            </aside>
            <aside>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Ingrese su nombre de usuario..."{...register('username')}/>
                    {errors && <p>{errors.username?.message}</p>}
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" placeholder="Ingrese su contraseña..." {...register('password')}/>
                    {errors && <p>{errors.password?.message}</p>}
                    <div>
                        {loading ?? <p>Cargando...</p>}
                        <Button label="Ingresar con Google" onClick={signInWithGoogle}/>
                        <Button label="Ingresar" type="submit"/>
                    </div>
                </form>
            </aside>
        </section>
    )
}

