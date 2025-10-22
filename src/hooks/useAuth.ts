import {useState, useEffect} from 'react';
import { supabase } from '@/lib/supabaseClient';

export function useAuth(){
    const [user, setUser] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // FUNCION PARA INICIAR SESION CON GOOGLE;
    const signInWithGoogle = async () => {
        const {error} = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: '/dashboard',
            },            
        })
        if(error) console.error('Error en Google sign-in', error);
    }

    // FUNCION PARA CERRAR SESION
    const signOut = async () => {
        const {error} = await supabase.auth.signOut();
        if(error) console.error('Error al cerrar sesión', error);
        else setUser(null);
    }

    // ESCUCHAMOS LOS CAMBIOS DE SESION
    useEffect(() => {
        const getUser = async () => {
            const {data} = await supabase.auth.getUser();
            setUser(data?.user ?? null);
            setLoading(false);
        }

        getUser();
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null)
        })

        return () => {
            listener.subscription.unsubscribe();
        }}, [])

        // RETORNAMOS LOS VALORES A UTILIZAR
        return {user, loading, signInWithGoogle, signOut}

}



// VER PROBLEMAS CON REGISTRO DE GOOGLE EN LOCALHOST