import { useEffect, useState } from "react";
import Ranking from "../components/Ranking";
import Error from "../pages/ErrorPage";

interface Movie {
  id: number;
  title: string;
  // Add more movie properties as needed
}

const MyReelRanking = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        // TODO: Replace with actual API call
        const mockMovie: Movie = {
          id: 1,
          title: "Example Movie",
        };

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (!mockMovie) {
          throw {
            title: "Movie Not Found",
            message: "Movie not found",
            code: 404
          };   
        }

        setSelectedMovie(mockMovie);
      } catch (err) {
        console.error("Error fetching movie:", err);
        setError("Failed to load movie details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error || !selectedMovie) {
    return (
      <Error
        title="Movie Not Found"
        message={error || "Unable to load movie details"}
        code={404}
      />
    );
  }

  return (
    <div className="reel-ranking-page">
      <h1>Rate & Review</h1>
      <Ranking movieTitle={selectedMovie.title} />
    </div>
  );
};

export default MyReelRanking;