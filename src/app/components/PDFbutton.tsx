import React from "react";
import { jsPDF } from "jspdf";  // importa a biblioteca jsPDF para gerar o PDF
import "jspdf-autotable";  // importa o plugin jsPDF AutoTable para criar tabelas no PDF
import { Button } from "@/app/components/button";  // importa o componente Button

// define o tipo das propriedades esperadas pelo componente PDFButton
type PDFButtonProps = {
  name: string;  // nome do usuário
  surname: string;  // sobrenome do usuário
  leadershipLevel: string;  // nível de liderança do usuário
  score: number;  // pontuação do usuário
};

// função que define o componente PDFButton
export const PDFButton: React.FC<PDFButtonProps> = ({ name, surname, leadershipLevel, score }) => {
  // função para gerar o PDF quando o botão é clicado
  const handlePrint = () => {
    // criação de uma nova instância do jsPDF para gerar o documento
    const doc = new jsPDF("portrait", "mm", "a4");

    // definindo as margens do documento
    const margin = { top: 10, left: 10, bottom: 10, right: 10 };

    // definindo o tamanho e cor da fonte para o título
    doc.setFontSize(22);
    doc.setTextColor(41, 128, 185);
    doc.text("Resultados do Teste Pro Lidera Skills", 105, margin.top + 10, { align: "center" });

    // definindo o tamanho e cor da fonte para as informações do usuário
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(`Nome: ${name} ${surname}`, margin.left + 10, margin.top + 30);
    doc.text(`Nível de Liderança: ${leadershipLevel}`, margin.left + 10, margin.top + 40);
    doc.text(`Pontuação: ${score}`, margin.left + 10, margin.top + 50);

    // desenhando uma linha horizontal para separar as seções
    doc.line(margin.left, margin.top + 55, 200, margin.top + 55);

    // definindo o texto de feedback com a recomendação
    let feedbackText = "";
    if (score >= 18 && score <= 35) {
      feedbackText = "Liderança frágil e pouco trabalhada. Continue buscando desenvolvimento!";
    } else if (score >= 36 && score <= 53) {
      feedbackText = "Liderança em desenvolvimento. Invista em mais conteúdos de liderança!";
    } else if (score >= 54 && score <= 72) {
      feedbackText = "Líder de alta performance! Continue aprimorando suas habilidades!";
    }

    doc.setFontSize(12);
    doc.text(feedbackText, margin.left + 10, margin.top + 65, { maxWidth: 200 - margin.left - margin.right });

    // adicionando uma tabela com o nível de liderança e a pontuação
    doc.autoTable({
      startY: margin.top + 85,  // define a posição inicial para a tabela
      head: [["Campo", "Valor"]],  // cabeçalho da tabela
      body: [
        ["Nível de Liderança", leadershipLevel],  // dados da tabela
        ["Pontuação", score.toString()],
      ],
      theme: "striped",  // define o estilo de tabela listrado
      margin: { top: 10, left: 10, right: 10 },  // define as margens da tabela
    });

    // converte o documento gerado para um blob (objeto binário grande)
    const pdfBlob = doc.output("blob");

    // cria uma url para o blob do pdf e abre o arquivo em uma nova aba do navegador
    const url = URL.createObjectURL(pdfBlob);
    window.open(url, "_blank");
  };

  // retorna o componente Button que ao ser clicado executa a função handlePrint
  return (
    <Button
      buttonText="Imprimir Resultado"  // texto do botão
      onClick={handlePrint}  // ação a ser executada quando o botão for clicado
      disabled={false}  // define o botão como habilitado
    />
  );
};
