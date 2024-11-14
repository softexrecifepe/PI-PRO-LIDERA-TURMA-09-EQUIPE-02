export function InputSubmit({inputText}: {inputText: string}) {
    return(
        <input type="submit" value={inputText} className="rounded-xl bg-box px-1 py-2 font-semibold shadow-md" />
    )}