import React from "react";
import { Button } from "@/app/components/button";
import Results from "../json/results.json";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, pdf } from "@react-pdf/renderer";

// Função para obter o resultado com base na pontuação
const getResultFromJSON = (score: number) => {
  return (
    Results.find(
      ({ scoreRange }) =>
        score >= (scoreRange[0] ?? -Infinity) && score <= (scoreRange[1] ?? Infinity)
    ) || { result: "Pontuação Não Encontrada", text: "Houve um erro, por favor tente novamente." }
  );
};

type PDFButtonProps = {
  score: number;
};

const PDFDocument = ({ score, name }: { score: number, name: string }) => {
  const { result: leadershipLevel, text: feedbackText } = getResultFromJSON(score);

  const styles = StyleSheet.create({
    page: {
      padding: 15, // Aumento das margens para mais espaço
      fontFamily: "Helvetica",
      backgroundColor: "#fff",
      minHeight: "100%",
    },
    title: {
      fontSize: 20, // Fonte maior para o título
      fontWeight: "bold",
      color: "#2980b9",
      textAlign: "center",
      marginBottom: 13, // Ajustando a margem inferior do título
    },
    section: {
      marginBottom: 0, // Aumento da margem entre as seções
    },
    text: {
      fontSize: 12, // Tamanho maior para o texto
      color: "#333",
      lineHeight: 1.5, // Aumento do espaçamento entre as linhas
      textAlign: "justify",
      marginBottom: 5, // Maior margem inferior
    },
    table: {
      display: "table",
      width: "100%",
      borderRadius: 8,
      overflow: "hidden",
      marginBottom: 10, // Mais espaço após a tabela
    },
    tableRow: {
      flexDirection: "row",
      padding: 8, // Aumento do padding nas linhas da tabela
      borderBottom: "1px solid #ddd",
    },
    tableHeader: {
      backgroundColor: "#2980b9",
      color: "#fff",
      fontSize: 12, // Tamanho de fonte maior para os cabeçalhos
      fontWeight: "bold",
    },
    tableCell: {
      width: "50%",
      padding: 8, // Aumento do padding nas células
      fontSize: 12, // Tamanho de fonte maior
      color: "#333",
      textAlign: "left",
    },
    feedbackSection: {
      padding: 15, // Aumento do padding no feedback
      backgroundColor: "#f4f4f9",
      borderRadius: 8,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      marginBottom: 10, // Maior espaço após o feedback
    },
    feedbackText: {
      fontSize: 12, // Aumento da fonte do feedback
      color: "#3c3c3c",
      lineHeight: 1.5, // Maior espaçamento entre as linhas do feedback
    },
    feedbackTitle: {
      fontSize: 14, // Tamanho maior para o título do feedback
      fontWeight: "bold",
      color: "#2980b9",
      marginBottom: 10,
    },
    separator: {
      borderTop: "1px solid #ddd",
      margin: "8px 0", // Ajustando o espaço ao redor da separação
    },
  });

  return (
    <Document>
      <Page style={styles.page}>
        {/* Título */}
        <Text style={styles.title}>Resultados do Teste Pro Lidera Skills</Text>

        {/* Introdução */}
        <View style={styles.section}>
          <Text style={styles.text}>
            Parabéns, {name}! Você concluiu o teste!
            {"\n\n"}
            Você acaba de dar um passo importante para compreender melhor seu potencial de liderança. Sua dedicação e sinceridade ao responder são fundamentais para obter resultados precisos e valiosos.
            {"\n\n"}
            Lembre-se, a liderança não é um destino, mas um processo contínuo de aprendizado e evolução. Use essas informações para crescer e liderar com confiança.
          </Text>
        </View>

        {/* Tabela */}
        <View style={styles.table}>
          <View style={[styles.tableRow, { borderTop: "none" }]}>
            <Text style={[styles.tableCell, styles.tableHeader]}>Campo</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>Resultado</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Nível de Liderança</Text>
            <Text style={styles.tableCell}>{leadershipLevel}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Pontuação</Text>
            <Text style={styles.tableCell}>{score}</Text>
          </View>
        </View>

        {/* Feedback */}
        <View style={styles.feedbackSection}>
          <Text style={styles.feedbackTitle}>Feedback:</Text>
          <Text style={styles.feedbackText}>
            {feedbackText.split("\n").map((line, index) => (
              <Text key={index}>{line}{"\n"}</Text>
            ))}
          </Text>
        </View>

        <View style={styles.separator} />
      </Page>
    </Document>
  );
};

export const PDFButton: React.FC<PDFButtonProps> = ({ score }) => {
  const name = localStorage.getItem("name") || "Nome não encontrado"; // Busca o nome completo no localStorage

  const handlePrint = async () => {
    const blob = await pdf(<PDFDocument score={score} name={name} />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  return (
    <Button
      type="button"
      buttonText="Imprimir Resultado"
      onClick={handlePrint}
    />
  );
};
