import logo from './logo.svg';
//import './extra.css';
import Header from './controllers/iraheader.js';  
import ContactUs from './views/contactpage.js';


function App() {
  return (
    <>
    <div className="text-center rounded-lg h-100">
     <Header />
    </div>
    <ContactUs />
    </>
  );
}

export default App;
