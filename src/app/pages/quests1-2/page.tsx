"use client";

import { InputSubmit } from "@/app/components/inputSubmit";
import { Forms } from "@/app/components/forms";
import { useNavigate } from "react-router-dom";

export default function Quest(){

    const navigate = useNavigate();
    function handleClick(){
        let selected: any = document.getElementsByClassName("check");
        let total = 0;
        for (let i = 0; i < selected.length; i++) {
            if ((selected)[i].checked == true) {
                total += parseInt(selected[i].value);
            }
            
        }
        alert(total);

    }
    return(
        <div>
            <form action="results" id="formC">
                <Forms sliceStart={0} sliceEnd={6}></Forms>
                <Forms sliceStart={6} sliceEnd={12}></Forms>
                <Forms sliceStart={12} sliceEnd={18}></Forms>
            
                <div className="text-center mt-20">
                <InputSubmit inputText="Finalizar" form="formC" onclick={() => handleClick()} />
            </div>
            </form>
        </div>
    );
}
