import { supabase } from "@/lib/supabaseClient";

supabase.auth.onAuthStateChange(async (event, session) => {
    if(event === 'SIGNED_IN' && session?.user){
        const {id, email, user_metadata} = session.user;
        const {data, error} = await supabase
        .from('users')
        .upsert({
            id,
            email,
            name: user_metadata.full_name,
            avatar_url: user_metadata.avatar_url,
        })

        if(error) console.error('Error al guardar usuario', error)

    }
})