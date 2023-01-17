import './App.css';
import Nav from './Component/Nav';
import Sidebar from './Component/Sidebar';
import Body from './Component/Body/Body';
import Searchpage from './Component/Body/Searchpage';
import Placedetail from './Component/Body/Placedetail';
import Backbtn from './Component/Backbtn';
import Header from './Component/Body/Header';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [searchdata,Setsearchdata] = useState();
  const [name,Setname] = useState();
  const [selectdata,Setselectdata] = useState();

  return (
    <div className="App">
      <Router>
        <Routes>
         <Route path='/' element={<><Nav/>
                                    <Header sentsearchdata={(e)=>Setsearchdata(e)} sentselectdata={(e)=>Setselectdata(e)}/>
                                    <Sidebar/>
                                    <Body sentname={(e)=>Setname(e)} selectdata={selectdata}/></>}/>  
         <Route path='/search/:searchName' element={<>
                                    <Nav/>
                                    <Header sentsearchdata={(e)=>Setsearchdata(e)} sentselectdata={(e)=>Setselectdata(e)}/>
                                    <Sidebar/>
                                    <Searchpage element={searchdata} sentname={(e)=>Setname(e)}/></>}/> 
         <Route path='/placedetail/:placeName' element={<>
                                    <Nav/>
                                    <Backbtn/>
                                    <Sidebar/>
                                    <Placedetail element={name}/></>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
