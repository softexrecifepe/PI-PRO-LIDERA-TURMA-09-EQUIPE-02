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
                <div className="text-center mt-20">
                <Button buttonText="Próximo" type="submit" onClick={() => handleClick()} href="/pages/page1"/>
            </div>
            </form>
        </div>
    );
}
