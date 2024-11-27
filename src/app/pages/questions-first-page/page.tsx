"use client";

import { Forms } from "@/app/components/forms";
import { Button } from "@/app/components/button";

export default function Quest(){

    function handleClick(){
        const selected  = document.getElementsByClassName("check") as HTMLCollectionOf<HTMLInputElement>;
        let total = 0;
        for (let i = 0; i < selected.length; i++) {
            if ((selected)[i].checked == true) {
                total += parseInt(selected[i].value);
            }
        }
        localStorage.setItem("score", total.toString())
    }

    return(
        <div>
            <form action="questions-second-page" id="formC">
                <Forms sliceStart={0} sliceEnd={6}/>
                <div className="text-center mt-20">
                <Button buttonText="Próximo" type="submit" onClick={() => handleClick()}/>
            </div>
            </form>
        </div>
    );
}
