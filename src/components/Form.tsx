import { Button } from "./Button"

export const Form = () => {
    return(
        <div>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Ingrese su correo..."/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" placeholder="Ingrese su contraseña..."/>
                <Button type='submit' label='Iniciar sesión'/>
                <Button type='submit' label='Registrarse'/>
            </form>
        </div>
    )
}