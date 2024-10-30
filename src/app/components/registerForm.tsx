import React from "react"
import { Button } from "./button";

export function RegisterForm(){
    const click = () => {
        alert("Cadastro Realizado!")
      }
    return(
        <div className="bg-box w-96 mt-20 mx-auto p-3 text-center rounded-2xl">
                <h1 className="text-3xl font-bold p-3">Realizar Cadastro</h1>
                <form className="mx-12">
                    {/* // TROCAR TODOS OS "H1" POR <label></label> P USAR C INPUT*/}
                    {/* Criar um compotente para o <input type="text" /> */}
                    <h1 className="absolute bg-box transform translate-x-[15%] translate-y-1/3 font-semibold px-2">Digite seu nome</h1>
                    <input type="text" className="rounded-3xl border border-black my-5 w-full p-2" name="" id="name"/>
                    <h1 className="absolute bg-box transform translate-x-[10%] translate-y-1/3 font-semibold px-2">Digite seu sobrenome</h1>
                    <input type="text" className="rounded-3xl border border-black my-5 w-full p-2" name="" id="surname"/>
                    <h1 className="absolute bg-box transform translate-x-[15%] translate-y-1/3 font-semibold px-2">Digite seu email</h1>
                    <input type="text" className="rounded-3xl border border-black my-5 w-full p-2" name="" id="email" />
                    <br></br>
                    <Button onClick={click}></Button>
                </form>
        </div>
    )
}