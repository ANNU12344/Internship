import './App.css';
import Textform from './Components/form';
import Navbar from './Components/Navbar';

function App() {
  return (
   <>
   <Navbar title="Education"/>
   <div className='container my-3'>
   <Textform heading="Enter a text for anlyse"/>
   </div>
   </>
  );
}

export default App;
