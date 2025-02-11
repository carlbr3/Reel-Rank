import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Genre {
  id: number;
  name: string;
}

const Genre = () => {
  // This will be replaced with actual API data later, for now we have hardcoded genres, we will use a hook to fetch the data from the API
  const [genres] = useState<Genre[]>([
    { id: 28, name: "Action" },
    { id: 35, name: "Comedy" },
    { id: 18, name: "Drama" },
    { id: 27, name: "Horror" },
    // Add more genres as needed
  ]);

  const navigate = useNavigate();

  const handleGenreClick = (genreId: number) => {
    // This will be updated when we have the API
    navigate(`/movies/genre/${genreId}`);
  };

  return (
    <div className="genres-container">
      <h1>Movie Genres</h1>
      <div className="genre-grid">
        {genres.map((genre) => (
          <button
            key={genre.id}
            className="genre-button"
            onClick={() => handleGenreClick(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Genre;