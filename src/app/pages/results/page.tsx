"use client";

import React, { useState } from "react";
import ResultCard from "@/app/components/ResultCard";
import FeedbackMessage from "@/app/components/feedbackMessage";
import { PDFButton } from "@/app/components/PDFbutton";
import { Button } from "@/app/components/button";

export default function ResultsPage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const score = parseInt(localStorage.getItem("score")!); // Pontuação do usuário, exemplo

  // função para determinar o índice do feedback com base na pontuação
  const getFeedbackIndex = (score: number): number => {
    if (score >= 18 && score <= 35) {
      return 0; // Liderança Frágil e Pouco Trabalhada
    } else if (score >= 36 && score <= 53) {
      return 1; // Liderança em Desenvolvimento
    } else if (score >= 54 && score <= 72) {
      return 2; // Liderança Desenvolvida
    }
    return 1; // padrão, caso a pontuação esteja fora das faixas
  };

  // Função para determinar o nível de liderança com base na pontuação
  const getLeadershipLevel = (score: number): string => {
    if (score >= 18 && score <= 35) {
      return "Liderança Frágil e Pouco Trabalhada";
    } else if (score >= 36 && score <= 53) {
      return "Liderança em Desenvolvimento";
    } else if (score >= 54 && score <= 72) {
      return "Líder de Alta Performance";
    }
    return "Liderança Não Definida"; // caso a pontuação seja fora do intervalo
  };

  const leadershipLevel = getLeadershipLevel(score); // Determina o nível de liderança com base na pontuação

  return (
    <main id="results-content" className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">Resultados do Teste de Liderança</h1>

      {/* Passa o nível de liderança e a pontuação para o ResultCard */}
      <ResultCard leadershipLevel={leadershipLevel} score={score} />

      {/* Passa o índice dinâmico para o FeedbackMessage */}
      <FeedbackMessage index={getFeedbackIndex(score)} />

      <div className="text-center mt-8">
        <Button buttonText="Retornar ao Início" href="/" />
      </div>

      <div className="text-center mt-4">
        <PDFButton name={name} surname={surname} leadershipLevel={leadershipLevel} score={score} />
      </div>
    </main>
  );
}
