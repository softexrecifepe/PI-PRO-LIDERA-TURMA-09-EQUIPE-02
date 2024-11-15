type ResultCardProps = {
  leadershipLevel: string;
  score: number;
};

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

export default function ResultCard({ leadershipLevel, score }: ResultCardProps) {
  const calculatedLevel = getLeadershipLevel(score); // Calcula o nível de liderança

  return (
    <div className="bg-indigo-100 p-6 rounded-lg mb-6">
      <h2 className="text-2xl font-semibold text-indigo-800">Nível de Liderança: {calculatedLevel}</h2>
      <p className="text-xl mt-4 text-gray-800">Pontuação Total: {score}/72</p>
    </div>
  );
}
