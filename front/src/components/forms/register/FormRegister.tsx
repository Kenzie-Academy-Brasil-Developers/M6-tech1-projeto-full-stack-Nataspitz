import { Input } from "@/components/fragments/Input";
import { Dispatch, SetStateAction } from "react";
import { StyleFormRegister } from "./StyleFormRegister";
import { useForm, SubmitHandler } from "react-hook-form";
import { TRegisterFormSchema, registerFormRegisterSchema } from "./schemaRegister";
import { zodResolver } from "@hookform/resolvers/zod";

interface IPropsFormRegister {
    setLoginRender: Dispatch<SetStateAction<boolean>>;
    setRegisterRender: Dispatch<SetStateAction<boolean>>;
}

export function FormRegister({setLoginRender, setRegisterRender}: IPropsFormRegister){
    const renderLogin = () => {
        setLoginRender(true)
        setRegisterRender(false)
    }

    const {register, handleSubmit, formState: {errors}} = useForm<TRegisterFormSchema>({
        resolver: zodResolver(registerFormRegisterSchema),
    })
    const registerSubmit: SubmitHandler<TRegisterFormSchema> = (data) => {
        console.log(data);
        
    }
    return (
        <StyleFormRegister>
            <h3>Faça o seu registro</h3>
            <form>
                <Input type="text" placeholder="Digite seu nome" label="Nome Completo" error={errors.fullName} {...register("fullName")}/>
                <Input type="email" placeholder="Degite seu email" label="Email" error={errors.email} {...register("email")}/>
                <Input type="password" placeholder="Digite sua senha" label="Senha" error={errors.password} {...register("password")}/>
                <Input type="password" placeholder="Confirme sua senha" label="Confirme sua senha" error={errors.confirm_password} {...register("confirm_password")}/>
                <Input type="phone" placeholder="Seu telefone com DDD" label="Telefone" error={errors.phone} {...register("phone")}/>
                <button onClick={handleSubmit(registerSubmit)} type="submit">Registrar</button>
            </form>
            <div className="register__login">
                <p className="register__login--text">Já possui uma conta?</p>
                <p className="register__login--link" onClick={renderLogin}>Clique aqui</p>
            </div>
        </StyleFormRegister>
    )
}