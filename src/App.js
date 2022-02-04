
import './App.css';
import Header from './Componets/Header';
import Navbar from './Componets/Navbar';
import Profile from './Componets/Profile';
import Dialogs from './Componets/Dialogs';
import Music from './Componets/Music';
import News from './Componets/News';
import Settings from './Componets/Settings';
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App(props) {
  return (
    <BrowserRouter>
    <div className="App-wrapper">
     <Header/>
     <Navbar/>
     <div className="App-wrapper-content"> 
     <Routes> 
     <Route path="/profile" element={<Profile/>}/>
     <Route path="/dialogs" element={<Dialogs/>}/>
     <Route path="/music" element={<Music/>}/>
     <Route path="/news" element={<News/>}/>
     <Route path="/settings" element={<Settings/>}/>
     </Routes>
     </div>
    </div>
    </BrowserRouter>
    );
  }
  export default App;
 



