import React from "react"


const App = () => {
  const course = "Half Stack application development"
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  }
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  }
  const part3 = {
    name: "State of a component",
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content exercise1={part1} exercise2={part2} exercise3={part3} />
      <Total exercise1={part1} exercise2={part2} exercise3={part3} />
    </>
  )
}

const Header = (props) => {

  console.log(props);

  return (
    <>
    </>);

}

const Part = (props) => {

  console.log(props);

  return (
    <>
      <p>
        {props.exercise.name} {props.exercise.exercises}
      </p>
    </>);

}

const Content = (props) => {

  console.log(props);

  return (
    <>
      <Part exercise={props.exercise1}></Part>
      <Part exercise={props.exercise2}></Part>
      <Part exercise={props.exercise3}></Part>
    </>);

}

const Total = (props) => {

  console.log(props);

  return (
    <>

      <p>Number of exercises {props.exercise1.exercises + props.exercise2.exercises + props.exercise3.exercises}</p>

    </>);
}

export default App