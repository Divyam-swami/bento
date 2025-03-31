import React from 'react'
import ListSection from '../Components/listSection'
import RandomImgae from '../Components/randomImgae'

const BentoMain = () => {
  return (
    <>
      <div className="container mt-4  p-3">
        <div className="row main-shaper shadow-lg bg-white">
            <div className="col-9 same-h carousel-section p-0">
               <RandomImgae/>   
            </div>
            <div className="col-3 same-h list-section">
                 <ListSection/>
            </div>
            <div className="col-6 same-h recipies-section">

            </div>
            <div className="col-3 same-h product-section">

            </div>
            <div className="col-3 same-h contact-section">

            </div>
        </div>
      </div>
    </>
  )
}

export default BentoMain
