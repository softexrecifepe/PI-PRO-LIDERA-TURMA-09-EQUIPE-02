type FeedbackMessageProps = {
    message: string;
  };
  
  export default function FeedbackMessage({ message }: FeedbackMessageProps) {
    return (
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-center text-gray-600">{message}</p>
      </div>
    );
  }