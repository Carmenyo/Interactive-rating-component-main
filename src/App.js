import {useState} from "react"
import star from "./images/icon-star.svg"
import thanks from "./images/illustration-thank-you.svg"

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [items, setitems] = useState ("")


  const Button = ({number}) => {
    return <button onClick={()=> setitems(number)} className="button-number">{number}</button>
  }
  return (
    <>
  {!submitted && (  
  <div className="wrapper">
  <img src={star} alt="star" className="icon-star" />
  <h2 className="title">How did we do?</h2>
  <p className="paragraph">Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!</p>
  <ul className="rating-list">
  <li><Button number={1}/></li>
  <li><Button number={2}/></li>
  <li><Button number={3}/></li>
  <li><Button number={4}/></li>
  <li><Button number={5}/></li>
  </ul>
  <div className="button-wrapper">
  <button onClick={()=> setSubmitted (true)} className="button-rating">Submit</button>
  </div>
    </div>) }
    {submitted && <ThankYou items={items} setSubmitted={setSubmitted}/>}
    </>
  );
}

const ThankYou = ({items}) => {
return (
<div className="thanks__wrapper">
  <img className="thanks__image" src={thanks} alt="Thanks" />
  <div className="selected__wrapper">
  <p className="thanks__selected">You selected {items} out of 5</p>
  </div>
<h2 className="thanks__title">Thank you!</h2>
<p class="thanks__paragraph">  We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
</div>
)}
export default App;
