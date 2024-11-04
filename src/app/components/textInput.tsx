export function InputText({labelText}: {labelText: string}){
    return(
        <div>
            <form className="mx-12">
                <label htmlFor="name" className="absolute bg-box transform translate-x-[10%] translate-y-1/3 font-semibold px-2">
                    {labelText}
                </label>
                <input type="text" className="rounded-3xl border border-black my-5 w-full p-2" name="" id="name"/>
            </form>
        </div>
    )
}