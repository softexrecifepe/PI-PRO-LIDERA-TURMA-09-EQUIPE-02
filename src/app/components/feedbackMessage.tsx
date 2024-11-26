import Results from "../json/results.json";

export default function FeedbackMessage({ index }: { index: number }) {
  const text: string = Results[index].text; // obtém o texto do feedback com base no índice

  return (
    <div className="bg-question dark:bg-questiond p-4 rounded-lg">
      <p>{text}</p>
    </div>
  );
}
