import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(8))
  const [mostVotes, setMostVotes] = useState(0)

  const randomizeAnecdote = () => {
    var randNum = Math.floor(Math.random() * 8)
    setSelected(randNum)
  }

  const voteForAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1

    if (copy[selected] > copy[mostVotes]){
      setMostVotes(selected)
    }

    setVotes(copy)
  }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />

      <h2>statistics</h2>
      <Statistics
        good={good} neutral={neutral} bad={bad} all={all}
      />
      <br />
      <div>
        <h2>Anecdote of the day</h2>
        {anecdotes[selected]}
        <br />
        has {votes[selected]} votes
        <br />
        <Button handleClick={voteForAnecdote} text='vote' />
        <Button handleClick={randomizeAnecdote} text='next anecdote' />
      </div>
      <div>
        <h2>Anecdote with the most votes</h2>
        {anecdotes[mostVotes]}
        <br/>
        has {votes[mostVotes]} votes
      </div>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button
      onClick={handleClick}>{text}
    </button>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text='good' value={props.good} />
          <StatisticsLine text='neutral' value={props.neutral} />
          <StatisticsLine text='bad' value={props.bad} />
          <StatisticsLine text='all' value={props.all} />
          <StatisticsLine text='average' value={((props.good) + (props.bad * -1)) / props.all} />
          <StatisticsLine text='positive' value={props.good / props.all} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export default App