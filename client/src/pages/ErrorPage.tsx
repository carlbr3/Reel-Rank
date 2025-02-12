import { useNavigate } from "react-router-dom";
import "../styles/Error.css";

interface ErrorProps {
  title?: string;
  message?: string;
  code?: number;
  showHomeButton?: boolean;
}

const Error = ({
  title = "Oops! Something went wrong",
  message = "We're having trouble loading this content",
  code = 404,
  showHomeButton = true,
}: ErrorProps) => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-code">{code}</h1>
        <h2 className="error-title">{title}</h2>
        <p className="error-message">{message}</p>

        {showHomeButton && (
          <button className="error-button" onClick={() => navigate("/")}>
            Return to Home
          </button>
        )}
      </div>
    </div>
  );
};

export default Error;