import * as Yup from "yup";

export const validationSchema = Yup.object({
    name: Yup.string()
        .max(30, 'Non più di 30 simboli')
        .required('Campo obbligatorio'),
    email: Yup.string()
        .email('Indirizzo email invalido')
        .required('Campo obbligatorio'),
    message: Yup.string()
        .max(350, 'Non più di 350 simboli')
        .required('Campo obbligatorio'),
});