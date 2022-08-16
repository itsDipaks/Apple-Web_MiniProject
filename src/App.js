
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import All_Routs from './Routs/All_Routs';

function App() {
  return (
    <div className="App">
     <Navbar />
     <All_Routs/>
     <Footer/>
    </div>
  );
}
export default App;
