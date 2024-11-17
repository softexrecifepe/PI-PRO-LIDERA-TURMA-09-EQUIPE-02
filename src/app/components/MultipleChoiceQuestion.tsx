export function MultipleChoiceQuestion({labelText, name, inputValue}: {labelText?: string, name:string, inputValue?: number}){
  return(
    <>
      <input type="radio" required className="check"  name={name}  value={inputValue}/>
      <label className="p-2" htmlFor={inputValue!.toString()}>{labelText}</label>
    </>
  )
}