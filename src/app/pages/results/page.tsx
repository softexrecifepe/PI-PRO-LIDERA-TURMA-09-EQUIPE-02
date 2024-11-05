"use client";

import { useState } from 'react';
import { Button } from "@/app/components/button";
import ResultCard from "@/app/components/ResultCard";
import FeedbackMessage from "@/app/components/feedbackMessage";

export default function Results() {
    const [leadershipLevel] = useState<string>('Intermediário');
    const [score] = useState<number>(75);

  return (
    <main className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">Resultados do Teste de Liderança</h1>
      
      <ResultCard leadershipLevel={leadershipLevel} score={score} />

      <FeedbackMessage message="Continue desenvolvendo suas habilidades! Recomendamos que você explore conteúdos de liderança para aprimorar ainda mais suas competências." />

      <div className="text-center mt-8">
        <Button page="Retornar ao Início" href="/" />
      </div>
    </main>
  );
}
