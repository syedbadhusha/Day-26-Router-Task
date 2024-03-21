import Card from "./Card"
function Cybersecurity({courses}) {
  return (
    <div className="container">
      <div className="row">
          {courses.map((course, index) => {
            return <Card key={index} course={course} />;
          })}
      </div>
    </div>
  )
}

export default Cybersecurity