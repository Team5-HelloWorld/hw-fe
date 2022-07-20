import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Rating } from 'react-simple-star-rating'
import swal from 'sweetalert';
import './styles.css'
import './styles2.css'

function Modalcomponent(props) {
  const email = sessionStorage.getItem('sessionVal');
  const id = sessionStorage.getItem('sessionValId');

  const [grade, setGrade] = useState(20) // 초기값

  const handleRating = (rate) => {
    setGrade(rate/20)
    console.log(grade);
  }
    // 리뷰 넘기기 버튼 기능

    const [review, setReview] = useState('');
    const onChange = (event) => {
        setReview(event.target.value);
    }
    async function sendInfo() {

      let data = {id, email, review, grade}

      let result = await fetch("http://localhost:8080/rental/return", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        })
        result = await result.json();

        if(result.status === "6000") {
          swal("반납이 완료되었습니다.", {
            timer: 6000
          })
          window.location.href = "/rent";
        } else {
          swal("오류가 발생하였습니다.")
        }
      }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          고객님, 상품은 마음에 드셨나요?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <div className="star">
        <h2>거래자분은 어떠셨나요?</h2>
        <Rating
        // fillColor="#BADA55"
        // allowHalfIcon
        tooltipArray={['나쁨', '별로', '보통', '좋음', '아주좋음']}
        transition
        showTooltip
        onClick={handleRating}
        ratingValue={grade}
        />
    </div>
        <br/><br/><br/>

        <div className="card h-100 text-center p-4"> 
          <h4>해당 상품의 후기를 남겨주세요</h4>
          <input className="inputModal" placeholder="50자 이내로 입력해주세요!" maxlength='50' onChange={onChange} value={review}></input>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={sendInfo}>반납</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Modalcomponent;