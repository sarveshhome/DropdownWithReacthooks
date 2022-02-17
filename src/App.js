import logo from './logo.svg';
import './App.css';
import Test from './Test';
import SecondDrop from './components/SecondDrop';
import ThirdDropdown from './components/ThirdDropdown';

function App() {
  return (
    <div className="App">      
       <Test></Test>  
       <SecondDrop></SecondDrop>   
       <>
         <h1>third dropdown</h1>
         <ThirdDropdown></ThirdDropdown>
       </> 
    </div>
  );
}

export default App;
