"use client";

import { Button } from "@/app/components/button";
import { Forms } from "@/app/components/forms";

export default function test(){
    return(
        <div>
            <Forms sliceStart={0} sliceEnd={6}></Forms>
            <Forms sliceStart={6} sliceEnd={12}></Forms>
            <Forms sliceStart={12} sliceEnd={18}></Forms>
            <div className="text-center mt-20">
            <Button buttonText="Finalizar" href="/pages/results" />
            </div>
        </div>
    );
}
