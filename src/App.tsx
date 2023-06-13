import './styles/App.css';
import './styles/buttons.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import DownloadSection from './components/DownloadSection';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
    </>
  );
}

export default App;
