import React from "react";
import { useState } from "react";

type Option = {
  id: string; 
  label: string;
  pontos: number;
};

type Question = {
  question: string;
  options: Option[];
};

export function MultipleChoiceQuestion({ question, options }: Question) {
  return (
    <div>
      <p>{question}</p>
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            <label>
              <input type="radio" name="option" value={option.id} />
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
