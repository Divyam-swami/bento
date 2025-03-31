import React, { useEffect, useState } from 'react'

const RandomImgae = () => {
const [path,setPath] = useState('')

useEffect(()=>{
    const fetchimage= async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        const response= await data.json()
        const randomProduct =response[Math.floor(Math.random() * response.length)];
       setPath(randomProduct.image)
    }
    fetchimage()
},[])

  return (
    
       <img src={path} style={{height:'100%', width:'100%'}} />
    
  )
}

export default RandomImgae
