import React from "react"
import { InputText } from "./textInput";
import { InputSubmit } from "./inputSubmit";

export function RegisterForm(){
    return(
        <div className="bg-box w-96 mt-20 mx-auto p-3 text-center rounded-2xl">
            <h1 className="text-3xl font-bold p-3">Realizar Cadastro</h1>
            <form action="pages/quests1-2" id="register" method="post">
                <InputText inputId="Name" labelText="Digite seu nome"/>
                <InputText inputId="Surname" labelText="Digite seu sobrenome"/>
                <InputText inputId="Email" labelText="Digite seu email"/>  
                <InputSubmit inputText="Cadastre-se"/>
            </form>
          
        </div>
    )
}