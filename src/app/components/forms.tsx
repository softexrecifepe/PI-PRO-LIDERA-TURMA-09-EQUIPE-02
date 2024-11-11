import React from "react";
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";
import Data from "../../../data.json"

export function Forms() {
  return(
    <div  className="bg-box w-[550px] mt-6 mx-auto p-3 text-center rounded-2xl">
    {
      Data.map(question => (    //mapeia todos elementos do question, 
                                //realizando um comportamento para cada um
        <div>
        <p>Questão {question.id}</p>  {/* pega o id e as perguntas de cada elemento */}
        <h2>{question.pergunta}</h2>
      
        {question.alternativas.map(alternatives => (  //pega cada alternativa
          <p>{alternatives.letra}</p>  
        ))}
        </div>
      ))
  }
  </div>
  )
  
    // const questionData = {
    //   question: 'Qual sua linguagem de programação favorita?',
    //   options: [
    //     { id: 1, label: 'JavaScript' },
    //     { id: 2, label: 'Python' },
    //     { id: 3, label: 'Java' },
    //     { id: 4, label: 'C++' },
    //   ],
    // };

    
    // const formInstances = Array.from({ length: 18 }, (_, index) => (
    //   <div key={index}>
    //     <form className="mx-auto">
    //       <h1 className="my-4 font-bold text-xl">{`Pergunta ${index + 1}`}</h1>
    //       <MultipleChoiceQuestion question={questionData.question} options={questionData.options} />
    //     </form>
    //   </div>
  
    // ));
  
    // return <div className="bg-box w-[550px] mt-6 mx-auto p-3 text-center rounded-2xl"></div>;
  }