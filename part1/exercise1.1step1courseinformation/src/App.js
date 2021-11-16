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

const Content = (props) => {


  return (<>
    <p>
      {props.nmExercise1} {props.qtdExercise1}
    </p>
    <p>
      {props.nmExercise2} {props.qtdExercise2}
    </p>
    <p>
      {props.nmExercise3} {props.qtdExercise3}
    </p>
  </>);
}

const Total = (props) => {
  return (<>

    <p>Number of exercises {props.qtdExercise1 + props.qtdExercise2 + props.qtdExercise3}</p>

  </>);
}



export default App