import React from "react";
import { useState } from "react";

interface Option {
    id: number;
    label: string;
  }
  
  interface Question {
    question: string;
    options: Option[];
  }
  
  export const MultipleChoiceQuestion: React.FC<Question> = ({ question, options }) => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
    const handleOptionChange = (id: number) => {
      setSelectedOption(id);
    };
  
    return (
      <div style={styles.container}>
        <h2>{question}</h2>
        <div style={{ marginTop: '15px' }}> {/* Espaço entre pergunta e opções */}
          {options.map((option) => (
            <label key={option.id} style={styles.option}>
              <input
                type="radio"
                name="multipleChoice"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => handleOptionChange(option.id)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
    );
  };
  const styles = {
    container: {
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '0 auto',
    },
    option: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      fontSize: '16px',
    },
  };  