"use client";

import { Forms } from "@/app/components/forms";
import { Button } from "@/app/components/button";

export default function Quest(){

    function handleClick(){
        let selected: any = document.getElementsByClassName("check");
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
            <form action="results" id="formC">
                <Forms sliceStart={0} sliceEnd={6}/>
                <Forms sliceStart={6} sliceEnd={12}/>
                <Forms sliceStart={12} sliceEnd={18}/>
                <div className="text-center mt-20">
                <Button buttonText="Finalizar" type="submit" onClick={() => handleClick()}/>
            </div>
            </form>
        </div>
    );
}
