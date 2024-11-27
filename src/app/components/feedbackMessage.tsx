import Results from "../json/results.json";

export default function FeedbackMessage({ index }: { index: number }) {

  return (
    <div className="bg-question dark:bg-questiond p-4 rounded-lg">
      {Results[index].textFormatt?.map(paragraphs =>
      <div key={paragraphs.paragraph}>
        <p>{paragraphs.paragraph}</p>
          <br/>
        </div>
      )}
    </div>
  );
}
