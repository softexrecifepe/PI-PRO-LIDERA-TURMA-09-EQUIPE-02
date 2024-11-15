export function MultipleChoiceQuestion({labelText, inputValue}: {labelText: string, inputValue: number}){
  return(
    <>
      <input type="radio" className="check"  name="question"  value={inputValue}  ></input> 
      <label className="p-2" htmlFor={inputValue.toString()}>{labelText}</label>
    </>
  )
}



// interface Option {
//     id: number;
//     label: string;
//   }
  
//   interface Question {
//     question: string;
//     options: Option[];
//   }
  
//   export const MultipleChoiceQuestion: React.FC<Question> = ({ question, options }) => {
//     const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
//     const handleOptionChange = (id: number) => {
//       setSelectedOption(id);
//     };
  
//     return (
//       <div className="p-5 rounded-lg mx-w-[400px] m-auto bg-question">
//         <h2 className="font-semibold">{question}</h2>
//         <div className="mt-4">
//           {options.map((option) => (
//             <label key={option.id} className="flex items-center mb-3 text-base gap-3">
//               <input
//                 type="radio"
//                 name="multipleChoice"
//                 value={option.id}
//                 checked={selectedOption === option.id}
//                 onChange={() => handleOptionChange(option.id)}
//               />
//               {option.label}
//             </label>
//           ))}
//         </div>
//       </div>
//     );
//   };