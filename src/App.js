import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import GalleryComponent from './components/GalleryComponent';

function App() {
  return (
    <>
    <NavbarComponent />
    <GalleryComponent />
    <FooterComponent />
    </>
  )
}

export default App;
