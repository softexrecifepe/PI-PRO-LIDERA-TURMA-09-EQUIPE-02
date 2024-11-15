export function MultipleChoiceQuestion({labelText, inputValue}: {labelText: string, inputValue: number}){
  return(
    <>
      <input type="radio" className="check"  name="question"  value={inputValue}  ></input> 
      <label className="p-2" htmlFor={inputValue.toString()}>{labelText}</label>
    </>
  )
}