const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const parts = [part1, part2, part3]
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const exercises = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part props={props} part={0} />
      <Part props={props} part={1} />
      <Part props={props} part={2} />
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.props.parts[props.part]} {props.props.exercises[props.part]}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
    </>
  )
}

export default App