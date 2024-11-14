export function InputSubmit({inputText}: {inputText: string}) {
    return(
        <div className={`rounded-xl bg-gradient-to-r w-[110px] mx-auto from-button-orange to-button-green py-1 font-semibold shadow-md`}>
            <input type="submit" value={inputText} className="rounded-xl bg-box px-2 py-1 font-semibold shadow-md" />
        </div>
    )}