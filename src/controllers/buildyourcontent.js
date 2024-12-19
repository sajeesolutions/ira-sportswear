import Header from './iraheader2';  
import Footer from './irafooter';
import { Link } from 'react-router-dom';
function App() {
  return (
    <>
    <div className="inset-0 text-center rounded-lg h-100">
      <Header />
    </div>
    <div className="container text-left mx-auto p-2 font-title rounded-lg">
        <h1 className='text-1xl font-title m-5'>
          <Link to="/"> Home </Link> / Build Your Content
        </h1>
        <div className='h-screen text-left'>
           <p className='text-2xl font-title m-5 pl-5'>Pick Your Sport and we'll tailor the clothing catalog for you</p>
           <div className='grid grid-cols-3 h-96'>

           </div>
           <p className='text-md font-content m-5 pl-5'>We Provide specialized gear for every role, occasion, and purpose within your team, including Training, Playing, Travel,
            Volunteers, Officials, and Fans. Learn More </p>
        </div>
    </div>
    <div className="text-center rounded-lg h-100 border-spacing-1 border-t-iraprimary">
      <Footer />
    </div>  
    </>
  );
}

export default App;
