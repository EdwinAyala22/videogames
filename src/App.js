
import './App.css';
import NavbarApp from './Components/Navbar/Index';
import CarouselApp from './Components/Carousel/Index';
import TextoApp from './Components/Texto/Index';
import FooterApp from './Components/Footer/Index';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavbarApp/>
      <CarouselApp/>
      <TextoApp/>
      <FooterApp/>
    </div>
  );
}

export default App;
