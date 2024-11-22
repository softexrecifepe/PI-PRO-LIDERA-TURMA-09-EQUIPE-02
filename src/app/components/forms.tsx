
import React from "react";
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";
import data from "../../../data.json";

export function Forms() {
  const formInstances = data.questões.map((questão, index) => (
    <div key={questão.id} className="mb-8">
      <form className="mx-auto">
        <h1 className="mb-6 text-2xl font-bold text-gray-800 text-left border-b-2 border-gray-200 pb-2">{`Pergunta ${index + 1}`}</h1>
        <MultipleChoiceQuestion
          question={questão.pergunta}
          options={questão.alternativas.map((alt) => ({
            id: alt.letra,
            label: `${alt.letra} ${alt.letra}`,
            pontos: alt.pontos,
          }))}
        />
      </form>
    </div>
  ));

  return (
    <div className="bg-box w-[550px] mt-6 mx-auto p-3 text-center rounded-2xl">
      {formInstances}
    </div>
  );
}