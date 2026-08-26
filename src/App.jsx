import styles from "./App.module.css";
import Header from "./components/Header/Header";
import BottomNavBar from "./components/BottomNavBar/BottomNavBar";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <BottomNavBar />
    </div>
  );
}

export default App;
