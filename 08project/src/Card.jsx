let Card = (props) => {
  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Gender: {props.gender}</p>
    </div>
  )
}

export default Card
