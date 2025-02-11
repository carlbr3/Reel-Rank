import { useEffect } from "react";
import Home from "../components/Home";

const HomePage = () => {
  useEffect(() => {
    // Set page title when component mounts
    document.title = "MovieApp - Home";
  }, []);

  return (
    <div className="homepage-container">
      <Home />
      {/* Additional sections can be added here */}
      <footer className="homepage-footer">
        <p>© 2024 MovieApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;