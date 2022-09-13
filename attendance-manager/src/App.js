import "./App.scss"
import React, { useState } from "react"
import { SubjectCard } from "./components/SubjectCard.js"
import {Form} from "./components/Form.js"

function App() {
	const [subjectList, setSubjectList] = useState([])
	
	const [hideForm, setHideForm] = useState(true)

	
	return (
		<div className="App">
			<header>
				<h1>Attendance Manager</h1>
			</header>
			<div id="details">
				<div id="attendance-criteria" className="overall-details">
					<p>Goal</p>
					<h2>75%</h2>
				</div>
				<div id="overall-attendance" className="overall-details">
					<p>Overall Attendance</p>
					<h2>66%</h2>
				</div>
				<div id="attendance-circle">66%</div>
				<button
					id="add-subject"
					onClick={() => setHideForm((prevState) => !prevState)}
				>
					{hideForm ? 'Add subject' : 'Close'}
				</button>
			</div>
			<Form hideForm = {hideForm} setHideForm = {setHideForm} setSubjectList = {setSubjectList} />
			<div id="container">
				{subjectList.length > 0 ? (
					subjectList.map((subject,key) => <SubjectCard subject = {subject} key = {key}/>)
				) : (
					<h2>You haven't added any Subjects yet</h2>
				)}
			</div>
		</div>
	)
}

export default App
