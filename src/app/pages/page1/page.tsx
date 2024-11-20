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
            <form id="formC">
                <Forms sliceStart={6} sliceEnd={12} />
                <div className="text-center mt-20">
                    <Button buttonText="Próximo" type="submit" onClick={() => handleNext()} href="/pages/page2"/>
                </div>
            </form>
        </div>
    );
}
