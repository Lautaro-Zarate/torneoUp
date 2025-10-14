import { object, string } from 'yup';
export const authSchema = object({
    username: string().required('Este campo es obligatorio.'),
    password: string().min(8, 'La contraseña debe tener al menos 8 caractéres.').max(15, 'La contraseña no puede tener más de 15 caractéres.').required('Este campo es obligatorio.')
})