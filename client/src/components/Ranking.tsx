import { useState } from "react";
import "../styles/Ranking.css";
import Error from "../pages/ErrorPage";

interface RankingProps {
  movieTitle: string;
}

interface Review {
  rating: number;
  comment: string;
  timestamp: Date;
}

const Ranking = ({ movieTitle }: RankingProps) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!rating) {
      setError("Please select a rating before submitting");
      return;
    }

    if (!comment.trim()) {
      setError("Please write a review before submitting");
      return;
    }

    try {
      const review: Review = {
        rating,
        comment,
        timestamp: new Date(),
      };

      // TODO: Add API call to save review
      console.log("Submitting review:", review);

      setSubmitted(true);
      setError(null);
      // Reset form after submission
      setComment("");
      setRating(0);
    } catch (err) {
      console.error("Error submitting review:", err);
      setError("Failed to submit review. Please try again.");
    }
  };

  if (error) {
    return (
      <Error
        title="Review Submission Error"
        message={error}
        code={400}
        showHomeButton={false}
      />
    );
  }

  return (
    <div className="ranking-container">
      <h2>Rate "{movieTitle}"</h2>

      {/* Star Rating */}
      <div className="stars-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className={`star-button ${
              star <= (hover || rating) ? "active" : ""
            }`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            type="button"
            aria-label={`Rate ${star} stars`}
          >
            ★
          </button>
        ))}
      </div>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="review-form">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your thoughts about the movie..."
          className="review-textarea"
          required
          maxLength={500}
        />

        <div className="char-count">{comment.length}/500 characters</div>

        <button
          type="submit"
          className="submit-button"
          disabled={!rating || !comment.trim()}
        >
          Submit Review
        </button>
      </form>

      {submitted && (
        <div className="success-message">
          Your review has been submitted successfully!
        </div>
      )}
    </div>
  );
};

export default Ranking;