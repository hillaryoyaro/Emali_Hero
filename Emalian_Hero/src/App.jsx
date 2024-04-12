import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AnimatedEmaliHero from "./pages/AnimatedEmaliHero";
import AnimatedEmaliHero1 from "./pages/AnimatedEmaliHero1";
import AnimatedEmaliHero2 from "./pages/AnimatedEmaliHero2";
import AnimatedEmaliHero3 from "./pages/AnimatedEmaliHero3";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/animated-emali-hero2":
        title = "";
        metaDescription = "";
        break;
      case "/animated-emali-hero3":
        title = "";
        metaDescription = "";
        break;
      case "/animated-emali-hero4":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AnimatedEmaliHero />} />
      <Route path="/animated-emali-hero2" element={<AnimatedEmaliHero1 />} />
      <Route path="/animated-emali-hero3" element={<AnimatedEmaliHero2 />} />
      <Route path="/animated-emali-hero4" element={<AnimatedEmaliHero3 />} />
    </Routes>
  );
}
export default App;
