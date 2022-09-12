import './App.scss'
import {SubjectCard} from './components/SubjectCard.js'

function App() {
  return (
    <div className="App">
      <header><h1>Attendance Manager</h1></header>
      <div id = "details">
        <div id = "attendance-criteria" className = "overall-details">
          <p>Goal</p>
          <h2>75%</h2>
        </div>
        <div id = "overall-attendance" className = "overall-details">
          <p>Overall Attendance</p>
          <h2>66%</h2>
        </div>
        <div id = "attendance-circle">66%</div>
        <button id = "add-subject">Add subject</button>
      </div>
      <div id = "container">
          <SubjectCard />
      </div>
    </div>
  );
}

export default App;
