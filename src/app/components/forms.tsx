import React from "react";
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";

export function Forms() {
    const questionData = {
      question: 'Qual sua linguagem de programação favorita?',
      options: [
        { id: 1, label: 'JavaScript' },
        { id: 2, label: 'Python' },
        { id: 3, label: 'Java' },
        { id: 4, label: 'C++' },
      ],
    };
  
    const formInstances = Array.from({ length: 18 }, (_, index) => (
      <div key={index} className="bg-box w-[550px] mt-6 mx-auto p-3 text-center rounded-2xl">
        <form className="mx-12">
          <h1>{`Pergunta ${index + 1}`}</h1>
          <MultipleChoiceQuestion question={questionData.question} options={questionData.options} />
        </form>
      </div>
    ));
  
    return <div>{formInstances}</div>;
  }