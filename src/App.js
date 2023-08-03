import { useState} from "react";
import Header from "./components/Layouts/Header";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import ProjectDemo from "./components/Pages/ProjectDemo";
import Footer from "./components/Footer";
import SendMsg from "./components/SendMsg";
import {Routes, Route } from "react-router-dom"; 
import purposeContext from "./components/store/purpose-context";
import Sidebar from "./components/SideBar";


function App() {


  const [isMenu, setIsMenu] = useState(false);
 

  const openMenu = () => {
    setIsMenu(true);
    
  }

  const closeMenu = () => {
    setIsMenu(false);
   
  }
  return (
    <>
    <purposeContext.Provider value={{navFuction:openMenu, navCloseFunc:closeMenu}}>
  
   <Header/>
   { isMenu && <Sidebar/>}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/projectsdemo" element={<ProjectDemo/>}/>
   </Routes>
   
   <SendMsg/> 
   <Footer/>
   </purposeContext.Provider>
   </>
  );
}

export default App;
