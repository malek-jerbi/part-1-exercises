import React, { useState } from 'react'
const Title = (props) => <h1>{props.text}</h1>
const Button = (props) => 
    <button onClick={props.onClick} > {props.text}</button>

const Statistics = ({good,bad,neutral}) => {
 let sum=good+bad+neutral;
 let average=(good-bad)/sum;
 let positive=(good/sum)*100;
if (sum<1) return <div>No feedback Given</div>
return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text='good'/></td>
            <td><StatisticLine value={good}/></td>
          </tr>
          <tr>
            <td><StatisticLine text='neutral'/></td>
            <td><StatisticLine value={neutral} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='bad'/></td>
            <td><StatisticLine text={bad}/></td>
          </tr>
          <tr>
            <td><StatisticLine text='all' /></td>
            <td><StatisticLine value={sum} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='average' /></td>
            <td><StatisticLine value= {average} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='positive' /></td>
            <td><StatisticLine sign='%'value= {positive} /></td>
          </tr>
        </tbody>
      </table>
    </div>
)
}
const StatisticLine = ({text,value, sign}) => {
  return (
    <div>{text} {value} {sign} </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good+1)
  const handleNeutralClick = () => setNeutral(neutral+1)
  const handleBadClick = () => setBad(bad+1)
  return (
    <div>
      <Title text='give feedback'/>
      <Button text='good' onClick= {handleGoodClick}/>
      <Button text='neutral' onClick= {handleNeutralClick}/>
      <Button text='bad' onClick= {handleBadClick}/>
      <Title text='statistics' />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App