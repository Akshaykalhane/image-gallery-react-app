import { useState } from 'react'
import './App.css'
import CameraComponent from './components/Camera';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Gallery from './components/Gallery'
import Notfound from './components/notfound'

function App() {
  const [capturedImages,setCapturedImages] = useState([]);

  const addImage=(img_url)=>{
    let id = capturedImages.length+1;
    const state = {
      id,
      img_url
    }
    setCapturedImages([...capturedImages,state]);
  }  

  const deleteImage=(id)=>{
    const data = capturedImages.filter((item)=>item.id!==id);
    setCapturedImages(data);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CameraComponent addImage={addImage}  />} />
          <Route path='/gallery' element={<Gallery capturedImages={capturedImages} deleteImage={deleteImage} />} />
          <Route path='*' element={<Notfound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
