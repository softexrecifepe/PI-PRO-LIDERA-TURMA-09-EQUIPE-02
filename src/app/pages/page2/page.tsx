"use client";

import { Forms } from "@/app/components/forms";
import { Button } from "@/app/components/button";

export default function Page2() {

    function handleNext() {
        let selected: any = document.getElementsByClassName("check");
        let total = 0;
        for (let i = 0; i < selected.length; i++) {
            if ((selected)[i].checked == true) {
                total += parseInt(selected[i].value);
            }
        }
    }
    return (
        <div>
            <div className="m-10">
                <Button buttonText="Anterior" type="button" href="page1"/>
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
