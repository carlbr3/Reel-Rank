import GenreComponent from "../components/Genre";

interface Genre {
  id: number;
  name: string;
}

const Genres = ({ genres }: { genres: Genre[] }) => {
  return (
    <div className="genres-page">
      {genres.map(genre => (
        <GenreComponent 
          key={genre.id}
          {...genre}
        />
      ))}
    </div>
  );
};

export default Genres;