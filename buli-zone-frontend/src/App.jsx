import styles from './App.module.css';
import { Hero } from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import { Teams } from './components/teams/Teams';

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <Teams/>
    </div>
  )
}

export default App
