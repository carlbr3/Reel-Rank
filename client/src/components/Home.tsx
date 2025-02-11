import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface NavTile {
  id: number;
  title: string;
  path: string;
  icon?: string;
  description: string;
}

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const navigationTiles: NavTile[] = [
    {
      id: 1,
      title: "Genres",
      path: "/genres",
      description: "Browse movies by genre",
    },
    {
      id: 2,
      title: "Search",
      path: "/search",
      description: "Find your favorite movies",
    },
    {
      id: 3,
      title: "Watchlist",
      path: "/watchlist",
      description: "Your saved movies",
    },
    // Add more navigation tiles as needed
  ];

  const handleTileClick = (path: string) => {
    // Add authentication check for protected routes
    if (path === "/watchlist" && !isAuthenticated) {
      // Show login prompt or redirect to login
      return;
    }
    navigate(path);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to MovieApp</h1>
        <p>Discover and track your favorite movies</p>
      </section>

      {/* Authentication Section */}
      <section className="auth-section">
        {!isAuthenticated ? (
          <div className="auth-buttons">
            <button onClick={() => navigate("/login")}>Sign In</button>
            <button onClick={() => navigate("/register")}>
              Create Account
            </button>
          </div>
        ) : (
          <div className="user-welcome">
            <p>Welcome back!</p>
            <button onClick={() => setIsAuthenticated(false)}>Sign Out</button>
          </div>
        )}
      </section>

      {/* Navigation Tiles Grid */}
      <section className="nav-tiles">
        {navigationTiles.map((tile) => (
          <div
            key={tile.id}
            className="nav-tile"
            onClick={() => handleTileClick(tile.path)}
          >
            {tile.icon && <span className="tile-icon">{tile.icon}</span>}
            <h2>{tile.title}</h2>
            <p>{tile.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;