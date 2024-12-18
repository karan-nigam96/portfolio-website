import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Services/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;