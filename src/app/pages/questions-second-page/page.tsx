"use client";

import { Forms } from "@/app/components/forms";
import { Button } from "@/app/components/button";
import { BackButton } from "@/app/components/back-button";

export default function Page1() {

    function handleNext() {
        const selected: any = document.getElementsByClassName("check");
        let total = parseInt(localStorage.getItem("score")!);
        let pageTotal = 0;
        
        for (let i = 0; i < selected.length; i++) {
            if ((selected)[i].checked == true) {
                total += parseInt(selected[i].value);
                pageTotal += parseInt(selected[i].value);
            }
        }
        localStorage.setItem("score", total.toString());
        localStorage.setItem("page2", pageTotal.toString())
    }
    return (
        <div>
            
            <div className="m-10">
            <BackButton href="questions-first-page" />
            </div>
            <form action="questions-third-page" id="formC">
                <Forms sliceStart={6} sliceEnd={12} />
                <div className="text-center mt-20">
                    <Button buttonText="Próximo" type="submit" onClick={() => handleNext()}/>
                </div>
            </form>
        </div>
    );
}
