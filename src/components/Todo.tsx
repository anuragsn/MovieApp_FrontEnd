import React, { useState } from 'react'

const Todo = () => {
    const [name,setName]=useState("")
    const [value,setValue]=useState<string[]>([])
    
    const changeMe=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
    }
    const ClickMe=()=>{
        setValue([...value,name])
    }
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>changeMe(e)}/>
       <button onClick={ClickMe}>click Me</button>
      <ul>
        {
            value.map((e)=>{
                return <li>{e}</li>
            })
        }
      </ul>
    </div>
  )
}

export default Todo