const Header = (props) => {
  return(
    <div>
      <h1>
        {props.course}
      </h1>

    </div>
  )

}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Total = (props) =>{
  
  
  return(
    <div>
      <p>
        Number of exercises {props.ex1 + props.ex2 + props.ex3}
      </p>

    </div>

  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 },
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        ex1={course.parts[0].exercises}
        ex2={course.parts[1].exercises}
        ex3={course.parts[2].exercises}
      />
    </div>
  )
}

export default App