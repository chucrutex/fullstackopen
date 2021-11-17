import React from "react"


const App = () => {
  const course = "Half Stack application development"
  const parts = [{ name: "Fundamentals of React", exercises: 10 },
  { name: "Using props to pass data", exercises: 7 },
  { name: "State of a component", exercises: 14 }];
  return (<>
    <Header course={course} />
    <Content exercises={parts} />
    <Total exercises={parts} />
  </>
  )
}

const Header = (props) => {

  console.log("Header [%O]", props);

  return (<>
    <h1>{props.course}</h1>
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

const Content = (props) => {

  console.log("Content [%O]", props);

  return (<>
    <Part exercise={props.exercises[0]}></Part>
    <Part exercise={props.exercises[1]}></Part>
    <Part exercise={props.exercises[2]}></Part>
  </>);
}

const Total = (props) => {

  console.log(props);

  let total = 0;
  props.exercises.forEach(exercise => {
    total += exercise.exercises;
  });


  return (<>
    <p>Number of exercises {total}</p>
  </>);
}

export default App