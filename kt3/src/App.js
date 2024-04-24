import './App.css';
import ProdList from './Components/ProdList';

function App() {
  const scrollToFooter = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <header className='header'>
        <h1>Магазин телефонов</h1>
        <button onClick={scrollToFooter}>Вниз</button>
      </header>

      <ProdList />
      
      <footer>
        футер
      </footer>
    </div>
  );
}

export default App;

