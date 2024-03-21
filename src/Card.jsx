function Card({ course }) {
  return (
    <div className="col-md-4 mt-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={course.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{course.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
