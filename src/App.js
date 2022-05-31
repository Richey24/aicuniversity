import './App.css';
import Header from './components/Header'
import Main from './components/Main';
import MainCard from './components/Card';
import HomeCourse from './components/HomeCourse';
import Footer from './components/Footer';


function App() {

  const hide = () => {
    let main = document.getElementById("main")
    if (main.style.opacity === "0") {
      main.style.transition = 'opacity 0.5s ease-in'
      main.style.height = "auto"
      main.style.opacity = "1"
    } else {
      main.style.transition = 'opacity 0.5s ease-out'
      main.style.opacity = "0"
      main.style.height = "0"
    }
  }

  return (
    <div style={{ marginLeft: '1rem', marginRight: '1rem' }} className="App">
      <Header hide={hide} />
      <div id="main">
        <Main />
        <MainCard />
        <HomeCourse />
        <Footer />
      </div>
    </div>
  );
}

export default App;
