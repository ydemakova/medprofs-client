import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config'

export default function SpecialistListPage() {
	const [specialists, setSpecialists] = useState([])
	const user = {}

	useEffect(() => {
		;(async () => {
			const res = await axios.get(`${API_URL}/users`)
			setSpecialists(res.data)
		})()
	}, [])

	async function deleteSpecialist(id) {
		await axios.delete(`${API_URL}/users/${id}`)
		const filteredSpecialists = specialists.filter((elem) => {
			return elem._id !== id
		})
		setSpecialists(filteredSpecialists)
	}

	return (
		<div>
			<div className="d-flex justify-content-between align-items-baseline">
				<h1>Our Specialists</h1>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Address</th>
						<th>Specialisation</th>
						<th>Degree</th>
						<th>Background</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{specialists.map((specialist, index) => (
						<tr key={specialist._id} className="align-middle">
							<td>{index + 1}.</td>
							<td>
								{specialist.firstName} {specialist.lastName}
							</td>
							<td>{specialist.address}</td>
							<td>{specialist.specialisation}</td>
							<td>{specialist.degree}</td>
							<td>{specialist.background}</td>
							<td>
								<Link className="btn btn-primary" to={`/users/${user._id}`}>
									edit
								</Link>
								&nbsp;
								<button className="btn btn-danger" onClick={() => deleteSpecialist(user._id)}>
									delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
