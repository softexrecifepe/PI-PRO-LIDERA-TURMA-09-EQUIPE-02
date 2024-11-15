export function MultipleChoiceQuestion({labelText, name, inputValue}: {labelText?: string, name:string, inputValue?: number}){
  return(
    <>
      <input type="radio" className="check"  name={name}  value={inputValue}></input> 
      <label className="p-2" htmlFor={inputValue!.toString()}>{labelText}</label>
    </>
  )
}