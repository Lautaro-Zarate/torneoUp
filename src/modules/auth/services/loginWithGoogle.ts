import { supabase } from "@/lib/supabaseClient"

export const loginWithGoogle = async () => {
    const {data, error} = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options:{
            redirectTo: 'http://localhost:3000/dashboard'
        }
    })
    if(error) {
        console.error('Error logging in with Google:', error.message);
        throw error;
    }
    return data;
    }