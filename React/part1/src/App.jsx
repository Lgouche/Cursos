const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  const printText = parts.map(value => {
    return <p key={value.name}>{value.name} {value.exercises}</p>
  })



  return (
    <div>
      <h1>{course}</h1>
      <div>{printText}</div>
      
    </div>
  )
}

export default App