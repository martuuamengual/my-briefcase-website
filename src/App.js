
import Footer from './components/Footer';
import Intro from './components/Intro';
import NavBar from './components/navbar/NavBar';
import './styles/index.scss';

export default function App() {
  return (
    <section>
      <section className="requeriments">
      </section>
      <NavBar></NavBar>
      <Intro></Intro>
      <Footer></Footer>
    </section>
  );
}