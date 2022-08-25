import React from 'react'

interface profileProps{
    name:string,
    age?:number,
    // status:String
    status:"single" | "coder" | "commited",
    // children?:String,
    children?:React.ReactNode
}

export const Demo = ({name,age,status,children}:profileProps) => {
  return (
    <div style={{border:"1px solid"}}>
        <div>Name--- {name}</div>
        <div>Age--- {age  || "Age"}</div>
        <div>Status--- {status}</div>
        <div>Children--- {children}</div>
    </div>
  )
}
