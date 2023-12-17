import { useState } from 'react'


function App() {
  //const [count, setCount] = useState(0)
  const[color,setcolor] = useState("white")

  return (
    <>
  <div className="w-full h-screen duration-200"
  style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
<button 
onClick={()=>{setcolor('red')}}
className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
style={{backgroundColor:"Red"}}
>
Red
  </button>
  <button 
  onClick={()=>{setcolor('green')}}
  className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
style={{backgroundColor:"Green"}}
>
Green
  </button>
  <button 
  onClick={()=>{setcolor('yellow')}}
  className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
style={{backgroundColor:"Yellow"}}
>
Yellow
  </button>
  <button 
  onClick={()=>{setcolor('olive')}}
  className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
style={{backgroundColor:"Olive"}}
>
Olive
  </button>
  <button 
  onClick={()=>{setcolor('purple')}}
  className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
style={{backgroundColor:"Purple"}}
>
Purple
  </button>
  <button 
  onClick={()=>{setcolor('orange')}}
  className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
style={{backgroundColor:"Orange"}}
>
Orange
  </button>
  <button 
  onClick={()=>{setcolor('pink')}}
  className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
style={{backgroundColor:"Pink"}}
>
Pink
  </button>
  <button 
  onClick={()=>{setcolor('white')}}
  className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
style={{backgroundColor:"black"}}
>
Reset
  </button>
  </div>
    </div>
  </div>
    </>
  )
}

export default App
