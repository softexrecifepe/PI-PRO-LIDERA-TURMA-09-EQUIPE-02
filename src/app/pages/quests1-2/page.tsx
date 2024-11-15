"use client";

import { Button } from "@/app/components/button";
import { Forms } from "@/app/components/forms";

export default function test(){
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
            <Forms sliceStart={0} sliceEnd={6}></Forms>
            <Forms sliceStart={6} sliceEnd={12}></Forms>
            <Forms sliceStart={12} sliceEnd={18}></Forms>
            <div className="text-center mt-20">
            <Button onClick={() => handleClick()} buttonText="Finalizar" href="/pages/results" />
            </div>
        </div>
    );
}
