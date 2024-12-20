import React from "react";
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";
import Data from "../json/data.json"

export function Forms({sliceStart, sliceEnd}: {sliceStart: number, sliceEnd: number}) {
  const start : number = sliceStart;
  const end : number = sliceEnd;

  
  return(
    <div className="bg-box dark:bg-boxd w-[550px] mt-6 mx-auto p-3 text-center rounded-2xl">
    {Data.slice(start, end).map(question => (    //mapeia todos elementos do question, 
                                //realizando um comportamento para cada um
                                
        <div key={question.id} className="p-5 rounded-lg mx-w-[400px] mx-3 my-5 bg-question dark:bg-questiond">
        <h2 className="my-4 font-bold text-xl">Questão {question.id}</h2>  {/* pega o id e as perguntas de cada elemento */}
        <h2 className="font-semibold">{question.pergunta}</h2>
        
        
        
        <div key={question.id} className="mt-4">
          
            {question.alternativas.map(alternatives => (   //pega cada alternativas
              <div key={alternatives.letra} className="radio text-left text-base rounded-md transition delay-150 ease-in-out hover:bg-box dark:hover:bg-boxd duration-100 p-2 m-2">
                <MultipleChoiceQuestion name={question.id.toString()} labelText={alternatives.letra} inputValue={alternatives.pontos}/>
              </div>
            ))
            }
         
        </div>
        </div>
      ))
  }
  </div>
  )
  }