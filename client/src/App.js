import './index.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';
import Roadmap from './components/roadmap/Roadmap';
import Team from './components/team/Team';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Content />
      <Roadmap />
      <Team />
    </div>
  );
}

export default App;
