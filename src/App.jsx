import React from "react";

import "./App.css";
import TodoList from "./components/TodoList";
import CheckBox from "./components/CheckBox";
import { ToastContainer } from "react-toastify";
import LifeCycleMethod from "./life cycle/LifeCycleMethod";
import Unmount from "./life cycle/Unmount";
import ClassProps from "./Props//Classs/ClassProps";
import FunProps from "./Props/function/FunProps";
import PropsChange from "./Props/function/PropsChange";
import PropsUseEffect from"./Hook/useEffect/PropsUseEffect";
import ColorChangeComponent from"./task/ColorChangeComponent";





function App(){
  return(
    <>
    <div style={{  
            height:"100vh",
            backgroundColor: 'blue'
          }}>
    {/*  <TodoList/>  */}
    {/* <CheckBox/>  */}
    {/*  <LifeCycleMethod/> */}
    {/* <Unmount /> */}
    {/* <ClassProps /> */}
    {/* <FunProps /> */}
    {/* <PropsChange  /> */}
   {/* <PropsUseEffect /> */}
    <ColorChangeComponent/> 
   
     
    </div>
    {/* <ToastContainer/> */}
    </>
  );
}

export default App;