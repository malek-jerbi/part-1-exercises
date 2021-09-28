import React, { useState } from 'react'
const Button = ({changeState, text}) =><div>
 <button onClick={changeState}> {text}</button> </div>
const DisplayText = ({title,text,votes}) => {
 return (
  <div>
    <h1>{title}</h1>
    <p>{text}</p>
    <p>has {votes} votes </p>
  </div>
 )
}
function maxArray (array) {
  let maxIndex=0;
  for (let index = 0; index < array.length; index++) {
    if (array[maxIndex]<array[index]) maxIndex=index
  }
  return maxIndex
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const [selected, setSelected] = useState(0)
  const pointsArray= new Uint8Array(anecdotes.length)
  const [votes, setVotes] = useState(pointsArray)
  let x;
  console.log(votes)
  const changeState = () => {
    setSelected( Math.floor((Math.random() * anecdotes.length)) )
  }
  const increment = () =>  {
    const copy=[...votes]
    copy[selected]++
    setVotes(copy)
    
   }
   x=maxArray(votes)
  return ( 
    <div>
      <DisplayText title='Anecdote of the day' text={anecdotes[selected]} votes={votes[selected]}/>
      <Button changeState={increment} text='vote'/>
      <Button changeState={changeState} text='next anecdote'/>
      <DisplayText title='Anecdote with most votes' text={anecdotes[x]} votes ={votes[x]}/>
    </div>
  )
}

export default App