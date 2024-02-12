import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Content from "./pages/HomePage/HomePage";
import styles from "./App.module.scss";
import { useState } from "react";
import Admin from "./pages/Admin/Admin";
// import { seedRecipes } from "./data/seed";

// seedRecipes();

function App() {
  const [page, setPage] = useState("homePage");

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header setPage={setPage} />
      {page === "homePage" && <Content />}
      {page === "admin" && <Admin />}
      <Footer />
    </div>
  );
}

export default App;
