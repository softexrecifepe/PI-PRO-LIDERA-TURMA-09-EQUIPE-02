import React from "react"
import { Button } from "./button";
import { InputText } from "./textInput";

export function RegisterForm(){
    return(
        <div className="bg-box w-96 mt-20 mx-auto p-3 text-center rounded-2xl">
                <h1 className="text-3xl font-bold p-3">Realizar Cadastro</h1>
                    <InputText labelText="Digite seu nome"></InputText>
                    <InputText labelText="Digite seu sobrenome"></InputText>
                    <InputText labelText="Digite seu email"></InputText>
                    <Button page="Cadastre-se"></Button>
        </div>
    )
}