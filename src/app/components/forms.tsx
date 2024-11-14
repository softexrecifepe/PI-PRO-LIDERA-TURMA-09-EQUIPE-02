import React from "react";
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";
import Data from "../../../data.json"

export function Forms() {
  return(
    <div  className="bg-box w-[550px] mt-6 mx-auto p-3 text-center rounded-2xl">
    {
      Data.slice(0, 6).map(question => (    //mapeia todos elementos do question, 
                                //realizando um comportamento para cada um
        <div className="p-5 rounded-lg mx-w-[400px] mx-3 my-5 bg-question">
        <h2 className="my-4 font-bold text-xl">Questão {question.id}</h2>  {/* pega o id e as perguntas de cada elemento */}
        <h2 className="font-semibold">{question.pergunta}</h2>
        
        <div className="mt-4">
          <form action="pages/results" className="mx-auto text-left">
            {question.alternativas.map(alternatives => (  //pega cada alternativas
              <div className="mb-3 text-base">
                <MultipleChoiceQuestion labelText={alternatives.letra} inputValue={alternatives.pontos}></MultipleChoiceQuestion>
              </div>
            ))
            }
          </form>
        </div>
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