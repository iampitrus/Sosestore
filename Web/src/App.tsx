import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import TopDeals from "./components/TopDeals";
import TopBands from "./components/TopBands";
import Trending from "./components/Trending";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* top bar */}
      <TopBar />
      <NavBar />
      <Hero />
      <Category />
      <TopDeals />
      <TopBands />
      <Trending />
      <Footer />
    </>
  );
}

export default App;
