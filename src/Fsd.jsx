import Card from "./Card";
function Fsd({courses}) {
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

export default Fsd