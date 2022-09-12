import React, { useState } from "react"

export const SubjectCard = () => {
	const [attendance, setAttendance] = useState({ attended: 0, total: 0 })
    const [prevAttendance, setPrevAttendance] = useState({attended: 0, total: 0})
	const markPresent = () => {
        setPrevAttendance(attendance)
		setAttendance((prevState) => ({
			attended: prevState.attended + 1,
			total: prevState.total + 1,
		}))
	}

    const markAbsent = () => {
        setPrevAttendance(attendance)
        setAttendance(prevState => ({
            ...prevState,
            total: prevState.total + 1
        }))
    }
	return (
		<div id="subject-card">
			<div>
			<h2>Data Structures</h2>
				<div id="subject-attendance">
					<p>Attendance</p>
					<h2>
						{attendance.attended} / {attendance.total}
					</h2>
				</div>
				<p>On track. You can't miss the next class</p>
			</div>
            <div>
			<div id="attendance-circle">
				{attendance.attended === 0
					? "0%"
					: `${Math.round(attendance.attended * 100/ attendance.total) / 100}%`}
			</div>
            <div id = "attendance-buttons">
                <button id = "attendance-button present" onClick = {markPresent}>Present</button>
                <button id = "attendance-button absent" onClick = {markAbsent}>Absent</button>
                <button id = "undo" onClick = {() => setAttendance(prevAttendance)}>Undo</button>
            </div>
            </div>
		</div>
	)
}
