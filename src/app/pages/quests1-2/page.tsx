"use client";

import { Button } from "@/app/components/button";
import { Forms } from "@/app/components/forms";

export default function test(){
    return(
        <div>
            <Forms></Forms>
            <div className="text-center mt-20">
            <Button page="Finalizar" href="/pages/results" />
            </div>
        </div>
    );
}
