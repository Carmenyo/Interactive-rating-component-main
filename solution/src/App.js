import star from "./images/icon-star.svg"

function App() {
  const Button = () => {
    return <button></button>
  }
  return (
    <div className="wrapper">
  <img src={star} alt="star" className="bg-gray-700 p-2 rounded-full" />
  <h2 className="title">How did we do?</h2>
  <p className="paragraph">Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!</p>
  <ul className="rating-list">
  <li><button className="bg-gray-700 p-2 rounded-full">1</button></li>
  <li><button className="bg-gray-700 p-2 rounded-full">2</button></li>
  <li><button className="bg-gray-700 p-2 rounded-full">3</button></li>
  <li><button className="bg-gray-700 p-2 rounded-full">4</button></li>
  <li><button className="bg-gray-700 p-2 rounded-full">5</button></li>
  </ul>
  <div className="button-wrapper">
  <button className="button-rating">Submit</button>
  </div>
    </div>
  );
}

export default App;
