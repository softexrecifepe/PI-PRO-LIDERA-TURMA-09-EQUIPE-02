"use client";

import { Forms } from "@/app/components/forms";
import { Button } from "@/app/components/button";
import { BackButton } from "@/app/components/back-button";

export default function Page2() {

    function handleNext() {
        const selected = document.getElementsByClassName("check") as HTMLCollectionOf<HTMLInputElement>;
        let total = parseInt(localStorage.getItem("score")!)
        for (let i = 0; i < selected.length; i++) {
            if ((selected)[i].checked == true) {
                total += parseInt(selected[i].value);
            }
        }
        localStorage.setItem("score", total.toString());
    }

    function singlePage(){
        const page2 = parseInt(localStorage.getItem("page2")!);
        let total = parseInt(localStorage.getItem("score")!)
        total -= page2;
        localStorage.setItem("score", total.toString());
    }

    return (
        <div>
            <div className="m-10">
                    <BackButton onclick={() => singlePage()} href="questions-second-page"/>
            </div>
            <form action="results" id="formC">
                <Forms sliceStart={12} sliceEnd={18} />
                <div className="text-center mt-20">
                    <Button buttonText="Finalizar" type="submit" onClick={() => handleNext()}/>
                </div>
            </form>
        </div>
    );
}
