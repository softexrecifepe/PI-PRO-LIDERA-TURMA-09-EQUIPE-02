export function InputText({labelText, inputId}: {labelText: string, inputId: string}){
    return(
        <div>
            <form className="mx-12">
                <label htmlFor={inputId} className="absolute bg-box transform translate-x-[10%] translate-y-1/3 font-semibold px-2">
                    {labelText}
                </label>
                <input type="text" className="rounded-3xl border border-black my-5 w-full p-2" name={inputId} id={inputId}/>
            </form>
        </div>
    )
}