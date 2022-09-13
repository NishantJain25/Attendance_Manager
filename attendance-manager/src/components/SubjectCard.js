import React, { useState } from "react"

export const SubjectCard = ({ subject }) => {
	const [attendance, setAttendance] = useState({
		attended: subject.initialAttended,
		total: subject.initialTotal,
	})
	const [prevAttendance, setPrevAttendance] = useState({
		attended: 0,
		total: 0,
	})
	const [style, setStyle] = useState({
		transition: "0.5s all",
		backgroundColor: "white",
	})
	const attendanceStyling = (status) => {
		if (status === "present") {
			setStyle((prevState) => ({ ...prevState, backgroundColor: "chartreuse" }))
		} else if (status === "absent") {
			setStyle((prevState) => ({ ...prevState, backgroundColor: "#DB1F48" }))
		}
		setTimeout(
			() =>
				setStyle((prevState) => ({ ...prevState, backgroundColor: "white" })),
			1000
		)
	}

	const markPresent = () => {
		attendanceStyling("present")
		setPrevAttendance(attendance)
		setAttendance((prevState) => ({
			attended: prevState.attended + 1,
			total: prevState.total + 1,
		}))
	}

	const markAbsent = () => {
		attendanceStyling("absent")
		setPrevAttendance(attendance)
		setAttendance((prevState) => ({
			...prevState,
			total: prevState.total + 1,
		}))
	}

	const status = () => {
		let buffer
		if ((attendance.attended / attendance.total) * 100 >= subject.goal) {
			buffer = Math.floor(
				attendance.attended / (subject.goal / 100) - attendance.total
			)
			return buffer == 0
				? "On track. You can't miss the next class."
				: buffer == 1
				? `On track. You can miss the next lecture.`
				: `On track. You can miss the next ${buffer} lectures.`
		}

		buffer = Math.ceil(
			(attendance.total * (subject.goal / 100) - attendance.attended) /
				((100 - subject.goal) / 100)
		)
		return `Attend the next ${buffer} lectures to get back on track.`
	}
	return (
		<div id="subject-card" style={style}>
			<div>
				<h2>{subject.name}</h2>
				<div id="subject-attendance">
					<p>Attendance</p>
					<h2>
						{attendance.attended} / {attendance.total}
					</h2>
				</div>
				<div id="subject-attendance">
					<p>Goal: </p>
					<h2>{subject.goal}%</h2>
				</div>
				<p>{status()}</p>
			</div>
			<div>
				<div id="attendance-circle">
					{attendance.attended === 0
						? "0%"
						: `${
								Math.round((attendance.attended * 1000) / attendance.total) / 10
						  }%`}
				</div>
				<div id="attendance-buttons">
					<button id="attendance-button present" onClick={markPresent}>
						Present
					</button>
					<button id="attendance-button absent" onClick={markAbsent}>
						Absent
					</button>
					<button id="undo" onClick={() => setAttendance(prevAttendance)}>
						Undo
					</button>
				</div>
			</div>
		</div>
	)
}
