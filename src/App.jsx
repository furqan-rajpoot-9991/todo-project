import React, { useRef,useState } from "react";
import Emoji from "./emoji1/emoji";


const App = () => {
  const [list, setList] = useState([]);
  const ref = useRef(null);
  const add = () => {

    setList([...list , ref.current.value]);
    console.log(list)

  ref.current.value=[]

 

  }
  
  const handleDelete = (lis)=>{
   setList(
    list.filter((e)=>{
return e!=lis 
    })
   )
  }
  

  return (
    <>
    <Emoji/>
      <div className="main bg-orange-300 py-2 flex justify-between px-10">
        <div className="logo">
          <h1>Todo list</h1>
        </div>
        <div className="input ">
          <input className="border-x-2 bg-white" type="text" ref={ref} />
          <button className="pl-5" onClick={add}>
            Add me
          </button>
        </div>
      </div>
      <div className="full">
     {
      
      list.map((lis)=>{
        return(
          <>
          <div className="w-full flex">

             <h1 className="border-4 border-red-300 px-12  w-44 h-36 " >{lis}</h1>
          </div>
          <button onClick={()=>{
            handleDelete(lis)
          }}>delete</button>
          </>
        )
      })
     }
     </div>
    </>
  
  );
};

export default App;
