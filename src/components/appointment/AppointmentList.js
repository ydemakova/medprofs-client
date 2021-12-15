import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config'

export default function AppointmentListPage() {
	const [appointments, setAppointments] = useState([])

	useEffect(() => {
		;(async () => {
			const res = await axios.get(`${API_URL}/appointments?isCurrentUser=true`, { withCredentials: true })
			setAppointments(res.data)
		})()
	}, [])

	async function deleteAppointment(id) {
		await axios.delete(`${API_URL}/appointments/${id}`, { withCredentials: true })
		const filteredAppointments = appointments.filter((elem) => {
			return elem._id !== id
		})
		setAppointments(filteredAppointments)
	}

	function getReadableDate(date) {
		date = new Date(date)
		return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
	}

	return (
		<div>
			<h1 id="appointmentsHeader">Appointments</h1>
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Date</th>
						<th>Location</th>
						<th>Message</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{appointments.map((appointment, index) => (
						<tr key={appointment._id} className="align-middle">
							<td>{index + 1}.</td>
							<td>{appointment.name}</td>
							<td>{getReadableDate(appointment.date)}</td>
							<td>{appointment.location}</td>
							<td>{appointment.message}</td>
							<td>
								<Link className="btn btn-primary" to={`/appointments/${appointment._id}`}>
									commit
								</Link>
								&nbsp;
								<button className="btn btn-danger" onClick={() => deleteAppointment(appointment._id)}>
									decline
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
