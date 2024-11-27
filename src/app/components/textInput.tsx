export function InputText({labelText, inputId}: {labelText: string, inputId: string}){
    return(
        <div>
                <label htmlFor={inputId} className="absolute bg-box dark:bg-boxd transform translate-x-[10%] translate-y-1/3 font-semibold px-2">
                    {labelText}
                </label>
                <input type="text" className="rounded-3xl border bg-box dark:bg-boxd border-black dark:border-white  my-5 w-full p-2" name={inputId} id={inputId} required/>
        </div>
    )
}