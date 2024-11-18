import React, { useState } from "react";
import { InputText } from "./textInput";
import { Button } from "./button";
import { InputMail } from "./mailInput";

export function RegisterForm(){
    // const [email, setEmail] = useState<string>("");
    // const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = e.target.value;
    //     setEmail(value) 
    //     const error = {email}
    //     if (!validator.isEmail(value)) {
    //         error.email = "Insira um email válido!"
    //     } else {
    //         error.email = ""
    //     }
    // }
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const validationError = {email}
    //     if (!email) {
    //         validationError.email = "O campo de email é obrigatório!"
    //     } 
    //     if (!validator.isEmail(email)) {
    //         validationError.email = "Insira um email válido!"
    //     } else {
    //         validationError.email = ""
    //     }
    // }
    return(
        <div className="bg-box w-96 mt-20 mx-auto p-3 text-center rounded-2xl">
            <h1 className="text-3xl font-bold p-3">Realizar Cadastro</h1>
            <form action="pages/quests1-2" id="register" method="post" >
                <InputText inputId="Name" labelText="Digite seu nome"/>
                <InputText inputId="Surname" labelText="Digite seu sobrenome"/>
                <InputMail inputId="Email" labelText="Digite seu email"/>
                <Button buttonText="Cadastre-se"  type="submit"/>
            </form>
        </div>
    )
}