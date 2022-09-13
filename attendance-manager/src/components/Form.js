import React, {useState} from 'react'

export const Form = ({hideForm, setHideForm, setSubjectList}) => {
    const [newSubjectName, setNewSubjectName] = useState("")
	const [newSubjectGoal, setNewSubjectGoal] = useState(0)
	const [newSubjectInitialAttended, setNewSubjectInitialAttended] = useState(0)
	const [newSubjectInitialTotal, setNewSubjectInitialTotal] = useState(0)

    const handleNameChange = (e) => {
		setNewSubjectName(e.target.value)
	}
	const handleGoalChange = (e) => {
		setNewSubjectGoal(e.target.value)
	}
	const handleInitialAttendedChange = (e) => {
		setNewSubjectInitialAttended(e.target.value)
	}
	const handleInitialTotalChange = (e) => {
		setNewSubjectInitialTotal(e.target.value)
	}
	const handleSubmit = () => {
		setSubjectList((subjectList) => [
			...subjectList,
			{
				name: newSubjectName,
				goal: parseInt(newSubjectGoal),
				initialAttended: parseInt(newSubjectInitialAttended),
				initialTotal: parseInt(newSubjectInitialTotal),
			},
		])
		reset()
	}

	const reset = () => {
		setNewSubjectName(0)
		setNewSubjectGoal(0)
		setNewSubjectInitialAttended(0)
		setNewSubjectInitialTotal(0)
	}
  return (
    <div
				id="new-subject"
				style={hideForm ? { display: "none" } : { display: "flex" }}
			>
        <h2>Add Subject</h2>
				<div>
					<label for="subject-name">Subject Name: </label>
					<input
						id="subject-name"
						value={newSubjectName}
						onChange={handleNameChange}
					/>
				</div>
				<div>
					<label for="subject-goal">Goal: </label>
					<input
						type="number"
						id="subject-goal"
						value={newSubjectGoal}
						onChange={handleGoalChange}
					/>{" "}
					%
				</div>
				<div>
					<label for="subject-initial-attended">Initial Attended: </label>
					<input
						type="number"
						id="subject-initial-attended"
						value={newSubjectInitialAttended}
						onChange={handleInitialAttendedChange}
					/>
				</div>
				<div>
					<label for="subject-initial-total">Initial Total: </label>
					<input
						type="number"
						id="subject-initial-total"
						value={newSubjectInitialTotal}
						onChange={handleInitialTotalChange}
					/>
				</div>
				<div id = "form-buttons">
					<button id="submit" onClick={handleSubmit}>
						Add
					</button>
					<button id="cancel" onClick={() => setHideForm(true)}>
						Cancel
					</button>
				</div>
			</div>
  )
}
