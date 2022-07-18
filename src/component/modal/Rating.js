import './styles.css'

import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const StarRate = () => {
  const [rating, setRating] = useState(100) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }

  return (
    <div className="star">
        <h2>해당 상품의 평점을 남겨주세요</h2>
        <Rating
        // fillColor="#BADA55"
        // allowHalfIcon
        tooltipArray={['나쁨', '별로', '보통', '좋음', '아주좋음']}
        transition
        showTooltip
        onClick={handleRating}
        ratingValue={rating} /* Available Props */
        />
    </div>
  )
}

export default StarRate
