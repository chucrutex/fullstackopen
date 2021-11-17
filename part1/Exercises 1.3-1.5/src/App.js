import React from "react"

const App = () => {

  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  const part1 = "Fundamentals of React";
  const part2 = "Using props to pass data";
  const part3 = "State of a component";
  const course = "Half Stack application development";

  return (
    <div>
      <Header course={course} />
      <Content nmExercise1={part1} nmExercise2={part2} nmExercise3={part3} qtdExercise1={exercises1} qtdExercise2={exercises2} qtdExercise3={exercises3} />
      <Total qtdExercise1={exercises1} qtdExercise2={exercises2} qtdExercise3={exercises3} />
    </div>
  )
}
const Header = (props) => {

  return (<>      <h1>{props.course}</h1>  </>);
}

const Part = (props) => {

  return (

    <>
      <p>
        {props.nmExercise} {props.qtdExercise}
      </p>
    </>);

}

const Content = (props) => {


  return (

    <>
      <Part nmExercise={props.nmExercise1} qtdExercise={props.qtdExercise1}></Part>
      <Part nmExercise={props.nmExercise2} qtdExercise={props.qtdExercise2}></Part>
      <Part nmExercise={props.nmExercise3} qtdExercise={props.qtdExercise3}></Part>
    </>);

}

const Total = (props) => {
  return (

    <>

      <p>Number of exercises {props.qtdExercise1 + props.qtdExercise2 + props.qtdExercise3}</p>

    </>);
}

export default App