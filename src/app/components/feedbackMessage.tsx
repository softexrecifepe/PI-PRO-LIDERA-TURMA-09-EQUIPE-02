import  Result  from "../../../results.json"

export default function FeedbackMessage({index} : {index: number}) {
  const text: any = Result[index].text

    return (
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-center text-gray-600">{text}</p>
      </div>
    );
  }