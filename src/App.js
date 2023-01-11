import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import RowPost from "./Components/RowPost/RowPost";
import { Documentaries, Fantasy, Action, Horror, Originals, Science_fiction, Mystery, History } from './Components/Url'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={Originals}/>
      <RowPost title='Action' isSmall url={Action}/>
      <RowPost title='Horror' isSmall url={Horror}/>
      <RowPost title='Fantasy' isSmall url={Fantasy}/>
      <RowPost title='Mystery' isSmall url={Mystery}/>
      <RowPost title='Science-Fiction' isSmall url={Science_fiction}/>
      <RowPost title='History' isSmall url={History}/>
      <RowPost title='Documentaries' isSmall url={Documentaries}/>
    </div>
  );
}

export default App;
