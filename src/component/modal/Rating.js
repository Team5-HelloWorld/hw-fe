import './styles.css'

import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const StarRate = () => {
  const [rating, setRating] = useState(100);

  const handleRating = (rate) => {
    setRating(rate)
  }

  return (
    <div className="star">
        <h2>해당 상품의 평점을 남겨주세요</h2>
        <Rating
        tooltipArray={['나쁨', '별로', '보통', '좋음', '아주좋음']}
        transition
        showTooltip
        onClick={handleRating}
        ratingValue={rating}
        />
    </div>
  )
}

export default StarRate
