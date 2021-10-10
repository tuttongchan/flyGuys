import './index.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';
import Roadmap from './components/roadmap/Roadmap';
// import Carousel from './components/carousel/Carousel';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <Carousel /> */}
      <Content />
      <Roadmap />
    </div>
  );
}

export default App;
