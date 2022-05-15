import logo from './logo.png';
import './app.css'
import Title from './components/Title';
import Extensionbutton from './components/Extensionbutton';
import Description from './components/Description';
import Gallerybutton from './components/Gallerybutton';
import Gallerydesc from './components/Gallerydesc';

function App() {
  return (
    <div>
      <img src={logo} width={100} height={150} id='main-logo'/>
      <Title />
      <Description />
      <Extensionbutton />
      <Gallerydesc />
      <Gallerybutton />
    </div>
  );
}

export default App;
