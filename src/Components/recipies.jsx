import React, { useEffect, useState } from 'react'

const Recipies = () => {
    const [recipie,setRecipie]=useState([])

    useEffect(()=>{
        const getrecipie=async () => {
            try{
                const data= await fetch('https://dummyjson.com/recipes')
                const response=await data.json();
                setRecipie(response.recipes)
            }catch(error){
                console.log(error);
            }
        }

        getrecipie()
    },[])
  return (
    <div className='container-fluid p-4'>
    {recipie.map((rec)=>(
        <div key={rec.id} className="row mt-2">
        <div className="col-3 ">
            <img style={{height:'80px', width:'80px', borderRadius:'50%', objectFit:'cover'}} src={rec.image}  />
        </div>
        <div className="col-9 d-flex flex-column justify-content-center align-items-start">
          <div className='d-flex justify-content-between w-100'><h5>{rec.name}</h5>
                <p><b>{rec.caloriesPerServing} Kcal</b></p>         
          </div>
          <p>{rec.cuisine}</p>
        </div>
      </div>
    ))}
  

</div>
  )
}

export default Recipies
