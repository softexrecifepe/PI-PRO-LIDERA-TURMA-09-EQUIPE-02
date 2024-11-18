import Result from "../json/results.json";

export default function FeedbackMessage({ index }: { index: number }) {
  const text: string = Result[index].text; // obtém o texto do feedback com base no índice

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
