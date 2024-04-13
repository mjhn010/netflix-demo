import React from 'react'
import "./reviewCard.style.css"
import { useState } from 'react'

const ReviewCard = ({item}) => {
    const [show,setShow] = useState(false)
  return (
    <div>
      <div className='review-box short-box'>
        <h3>{item?.author}</h3>
        <div className={show ? "" : "content-short"}>
            {item?.content}
        </div>
        <button onClick={()=>setShow(!show)} className='more-btn'>{show ? "접기-" : "더보기+"}</button>
      </div>
    </div>
  )
}

export default ReviewCard
