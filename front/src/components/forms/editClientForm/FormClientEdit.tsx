import { Input } from "@/components/fragments/Input";
import { StyleForms } from "../StyleForms";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { ClientsContext } from "@/contexts/clients/clientsContext";
import { IUpdateClient } from "@/contexts/clients/interfaces";
import { useRouter } from "next/navigation";


export function FormClientEdit() {
    const { client, updateClient, deleteClient } = useContext(ClientsContext)
    
    const router = useRouter()    
    const {register, handleSubmit} = useForm()
    
    const editClientSubmit: SubmitHandler<IUpdateClient> = (data) => {
        console.log(client, "client");
        updateClient(data)
        router.push('/clients')
    }
    
    const deleteClientEvent = () => {
        deleteClient()
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        router.push('/')
        
    }

    return(
        <StyleForms>
            <div className="edit__title">
                <h3>{`Olá, ${client?.fullName}...Edite seu dados agora`}</h3>
                <p>Preencha apenas os dados que deseja mudar</p>
            </div>
            <form onSubmit={handleSubmit(editClientSubmit)}>
                <Input defaultValue={client?.fullName} type="text" placeholder="Nome" {...register("fullName")} />
                <Input defaultValue={client?.email} type="email" placeholder="Email" {...register("email")}/>
                <Input defaultValue={"*********"} type="password" placeholder="Senha" {...register("password")}/>
                <Input defaultValue={client?.phone} type="phone" placeholder="Telefone" {...register("phone")}/>
                <button type="submit">Editar</button>
                <Link href={"/clients"} className="button_cancel">Cancelar</Link>
            </form>
            <div className="client__delete">
                <p>Deseja excluir sua conta?</p>
                <button className="button_delete" onClick={() => deleteClientEvent()}>Excluir</button>
            </div>
        </StyleForms>
    )
}