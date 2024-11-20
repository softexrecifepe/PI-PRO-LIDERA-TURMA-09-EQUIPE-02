export function MultipleChoiceQuestion({labelText, name, inputValue}: {labelText?: string, name:string, inputValue?: number}){
  return(
    <>
      <input type="radio" id={inputValue!.toString() + name} required className="check"  name={name}  value={inputValue}/>
      <label className="p-2" htmlFor={inputValue!.toString() + name}>{labelText}</label>
    </>
  )
}