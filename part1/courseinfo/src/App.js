import React from "react"


const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [{ name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 }]
  };
  return (<>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </>
  );
}

const Header = (props) => {

  console.log("Header [%O]", props);

  return (<>
    <h1>{props.course.name}</h1>
  </>);

}

const Content = (props) => {

  console.log("Content [%O]", props);

  return (<>
    <Part exercise={props.course.parts[0]}></Part>
    <Part exercise={props.course.parts[1]}></Part>
    <Part exercise={props.course.parts[2]}></Part>
  </>);
}

const Part = (props) => {

  console.log("Part [%O]", props);

  return (<>
    <p>
      {props.exercise.name} {props.exercise.exercises}
    </p>
  </>);

}

const Total = (props) => {

  console.log(props);

  let total = 0;
  props.course.parts.forEach(part => {
    total += part.exercises;
  });


  return (<>
    <p>Number of exercises {total}</p>
  </>);
}

export default App