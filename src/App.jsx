import React, { useState } from 'react';
import Create from './components/Create';
import Read from './components/Read';


const App = () => {
  
  // const [todos, settodos] =useState([
  //         // {id:1, title:"Task 1", isCompleted: false},
  // ]);


  return (
    <div className='bg-black w-screen h-screen p-5 flex flex-col md:flex-row md:justify-between'>
      {/* <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos}/> */}
      <Create />
      <Read />
    </div>
  )
}

export default App