import React, { useState } from "react";
import { InputText } from "./textInput";
import { Button } from "./button";
import { InputMail } from "./mailInput";

export function RegisterForm(){
    return(
        <div className="bg-box w-96 mt-20 mx-auto p-3 text-center rounded-2xl">
            <h1 className="text-3xl font-bold p-3">Realizar Cadastro</h1>
            <form action="pages/questions-first-page" id="register" method="post" >
                <InputText inputId="Name" labelText="Digite seu nome"/>
                <InputText inputId="Surname" labelText="Digite seu sobrenome"/>
                <InputMail inputId="Email" labelText="Digite seu email"/>
                <Button buttonText="Cadastre-se"  type="submit"/>
            </form>
        </div>
    )
}