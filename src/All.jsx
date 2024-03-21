import Card from "./Card";
function All({courses}) {
  return (
    <div className="container">
      <div className="row">
          {courses.map((course, index) => {
            return <Card key={index} course={course} />;
          })}
      </div>
    </div>
  );
}
export default All;
