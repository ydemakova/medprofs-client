import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../config'

export default function NewAppointment(props) {
	const navigate = useNavigate()
	const [currentId, setCurrentId] = useState(null)
	const [users, setUsers] = useState([])
	const [specialist, setSpecialist] = useState('')

	useEffect(() => {
		;(async () => {
			let res = await axios
				.get(`${API_URL}/auth/current-user`, { withCredentials: true })
				.catch((err) => console.log('Error: ', err))
			setCurrentId(res.data._id)
			res = await axios.get(`${API_URL}/users`)
			setUsers(res.data)
			setSpecialist(res.data.specialist)
		})()
	}, [])

	async function handleSubmit(event) {
		event.preventDefault()
		const newAppointment = {
			name: event.target.name.value,
			location: event.target.location.value,
			specialist,
			date: event.target.date.value,
			message: event.target.message.value,
		}
		console.log(newAppointment)
		let err
		await axios.post(`${API_URL}/appointments`, newAppointment, { withCredentials: true }).catch((e) => (err = e))

		if (err) {
			console.error(err)
			// handle error
			return
		}

		navigate('/appointments', { replace: true })
	}

	return (
		<div>
			<h3 style={{ textAlign: 'center', marginBottom: '30px' }}>Request for an Appointment</h3>
			<form onSubmit={handleSubmit}>
				<div className="form-group col-5 offset-3 mb-3">
					<label htmlFor="date">Name:</label>
					<input name="name" type="text" className="form-control" id="name" />
				</div>
				<div className="form-group col-5 offset-3 mb-3">
					<label htmlFor="location">Location:</label>
					<input name="location" type="text" className="form-control" id="location" />
				</div>
				<div className="form-group col-5 offset-3 mb-3">
					<label htmlFor="specialist">Specialist:</label>
					<select className="form-select" id="specialist" onChange={(e) => setSpecialist(e.target.value)}>
						{users
							.filter((user) => user._id !== currentId)
							.map((user) => (
								<option key={user._id} value={user._id}>
									{user.firstName} {user.lastName}
								</option>
							))}
					</select>
				</div>
				<div className="form-group col-5 offset-3 mb-3">
					<label htmlFor="date">Date:</label>
					<input name="date" type="date" className="form-control" id="date" />
				</div>
				<div className="form-group col-5 offset-3 mb-3">
					<label htmlFor="message">Message:</label>
					<textarea name="message" className="form-control" id="message"></textarea>
				</div>

				<button type="submit" className="btn btn-primary col-1 offset-7">
					Submit
				</button>
			</form>
		</div>
	)
}
