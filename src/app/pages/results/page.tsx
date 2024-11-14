"use client";


import React, { useState, useEffect } from 'react';
import { Button } from "@/app/components/button";
import ResultCard from "@/app/components/ResultCard";
import FeedbackMessage from "@/app/components/feedbackMessage";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

export default function Results() {
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [leadershipLevel] = useState<string>('Intermediário');
    const [score] = useState<number>(75);

    useEffect(() => {
        // Tenta recuperar e fazer parse dos dados do localStorage
        try {
            const storedData = localStorage.getItem('userData');
            
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                setName(parsedData.name);
                setSurname(parsedData.surname);
            } else {
                console.log('Dados do usuário não encontrados no localStorage');
            }
        } catch (error) {
            console.error('Erro ao recuperar dados do localStorage:', error);
        }
    }, []);

    // Função para gerar o PDF
    const handlePrint = () => {
        const doc = new jsPDF('portrait', 'mm', 'a4');

        const margin = { top: 10, left: 10, bottom: 10, right: 10 };

        doc.setFontSize(22);
        doc.setTextColor(41, 128, 185); 
        doc.text('Resultados do Teste de Liderança', 105, margin.top + 10, { align: 'center' });

        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text(`Nome: ${name} ${surname}`, margin.left + 10, margin.top + 30);
        doc.text(`Nível de Liderança: ${leadershipLevel}`, margin.left + 10, margin.top + 40);
        doc.text(`Pontuação: ${score}`, margin.left + 10, margin.top + 50);

        doc.line(margin.left, margin.top + 55, 200, margin.top + 55);

        doc.setFontSize(12);
        doc.text("Continue desenvolvendo suas habilidades! Recomendamos que você explore conteúdos de liderança para aprimorar ainda mais suas competências.", margin.left + 10, margin.top + 65, { maxWidth: 190 });

        doc.autoTable({
            startY: margin.top + 85,
            head: [['Campo', 'Valor']],
            body: [
                // ['Nome', `${name} ${surname}`],
                ['Nível de Liderança', leadershipLevel],
                ['Pontuação', score.toString()],
            ],
            theme: 'striped',
            margin: { top: 10, left: 10, right: 10 },
        });

        doc.save('resultado-teste-lideranca.pdf');
    };

    

    return (
        <main id="results-content" className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">Resultados do Teste de Liderança</h1>

            <ResultCard leadershipLevel={leadershipLevel} score={score} />

            <FeedbackMessage index={0} />

            {/* Mostrar o nome e sobrenome na tela, se disponíveis */}
            {name && surname ? (
                <p className="text-center mt-4">
                    {`Olá, ${name} ${surname}`}
                </p>
            ) : (
                <p className="text-center mt-4">Carregando dados...</p>
            )}

            <div className="text-center mt-8">
                <Button buttonText="Retornar ao Início" href="/" />
            </div>

            <div className="text-center mt-4">
                <Button buttonText="Imprimir Resultado" onClick={handlePrint} />
            </div>
        </main>
    );
}
