"use client";

import { Forms } from "@/app/components/forms";
import { Button } from "@/app/components/button";

export default function Page1() {

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
                <Button buttonText="Anterior" type="button" href="quests1-2"/>
            </div>
            <form action="page2" id="formC">
                <Forms sliceStart={6} sliceEnd={12} />
                <div className="text-center mt-20">
                    <Button buttonText="Próximo" type="submit" onClick={() => handleNext()}/>
                </div>
            </form>
        </div>
    );
}
