type ResultCardProps = {
  leadershipLevel: string;
  score: number;
};

export default function ResultCard({ leadershipLevel, score }: ResultCardProps) {
  return (
    <div className="bg-indigo-100 p-6 rounded-lg mb-6">
      <h2 className="text-2xl font-semibold text-indigo-800">Nível de Liderança: {leadershipLevel}</h2>
      <p className="text-xl mt-4 text-gray-800">Pontuação Total: {score}/100</p>
    </div>
  );
}
