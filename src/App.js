import './App.css';
import Header from './components/Header'
import Main from './components/Main';
import MainCard from './components/Card';
import HomeCourse from './components/HomeCourse';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <MainCard />
      <HomeCourse />
      <Footer />
    </div>
  );
}

export default App;
