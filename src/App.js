import './App.css';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import { Counter } from './Counter';

//array of object

function App() {

  return (
    <div className="App">
    {/* <EmojiPicker height={500} width={400} /> */}
    <Counter/>


    </div> 
  );


function Counter (){

  const[like,setlike]=useState(10);

  return (
    <div>
   <button
    onClick={()=>
      setlike( like+1 )}> Like{like}
   </button>

    </div>
  ); 

}
  
  
}

export default App;
