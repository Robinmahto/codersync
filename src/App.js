import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import {Toaster} from 'react-hot-toast';


function App() {
  return (
    <>
       <div>
         <Toaster position='top-right'></Toaster>
       </div>
       <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/editor/:roomId' element={<EditorPage/>}/>
         </Routes>
       </BrowserRouter>
    </>
  );
}


export default App;
