import logo from './logo.svg';
import './App.css';
import Test from './Test';
import SecondDrop from './components/SecondDrop';
import ThirdDropdown from './components/ThirdDropdown';
import FourthDropdown from './components/FourthDropdown';
import SearchText from './components/SearchText';
import SearchText2 from './components/SearchText2';
function App() {
  return (
    <div className="App">      
       <Test></Test>  
       <SecondDrop></SecondDrop>   
       <>
         <h1>third dropdown</h1>
         <ThirdDropdown></ThirdDropdown>
       </> 
       <>
          <h3>fourth dropdown fetch from api</h3>
          <FourthDropdown></FourthDropdown>
       </>
       <>
       <SearchText></SearchText>
       </>
       <>
         <SearchText2></SearchText2>
       </>
    </div>
  );
}

export default App;
