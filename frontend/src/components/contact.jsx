import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [user,setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>console.log(data))
  },[])
  return (
    <div>Contact</div>
  )
}

export default Contact