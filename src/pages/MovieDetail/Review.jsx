import React from 'react'
import { useReview } from '../../hooks/useReview'
import { useParams } from 'react-router-dom'
import ReviewCard from './ReviewCard'

const Review = () => {
    const {id} = useParams()
    const {data:ReviewData}=useReview({id})
    console.log("review",ReviewData)
  return (
    <div>
     {ReviewData?.map((item)=>(<ReviewCard item={item}/>))}
    </div>
  )
}

export default Review
