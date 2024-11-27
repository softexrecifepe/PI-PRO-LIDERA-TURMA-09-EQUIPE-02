import Results from "../json/results.json";

type ResultCardProps = {
  score: number;
  leadershipLevel: string;
};

const getLeadershipLevel = (score: number): string => {
  const result = Results.find(
    ({ scoreRange }) =>
      score >= (scoreRange[0] ?? -Infinity) && score <= (scoreRange[1] ?? Infinity)
  );
  return result?.result || "Pontuação Não Encontrada";
};

export default function ResultCard({ score }: ResultCardProps) {
  const leadershipLevel = getLeadershipLevel(score); // Busca o nível de liderança com base no score

  return (
    <div className="bg-box dark:bg-boxd p-6 rounded-lg mb-6">
      <h2 className="text-2xl font-semibold">Nível de Liderança: {leadershipLevel}</h2>
      <p className="text-xl mt-4">Pontuação Total: {score}/72</p>
    </div>
  );
}
