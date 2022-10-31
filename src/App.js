import './App.css';
import Header from './Components/Header/Header'
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
/* se iportan los elementos que van a haber en app.js
y se organizan 1°header 2°cards etc*/
function App() {
  return (
    <div className="App">
      <Header/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
