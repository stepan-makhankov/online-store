import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import BottomNavBar from "./components/BottomNavBar/BottomNavBar";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Content />
      <Footer />
      <BottomNavBar />
    </div>
  );
}

export default App;
