import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config'

export default function SpecialistListPage() {
	const [specialists, setSpecialists] = useState([])

	useEffect(() => {
		;(async () => {
			const res = await axios.get(`${API_URL}/users`)
			setSpecialists(res.data)
		})()
	}, [])

	return (
		<>
			<h2>Our Specialists</h2>
			<div className="row g-2">
				{specialists.map((specialist, index) => (
					<div key={specialist._id} className="col-md-3">
						<div className="card-y p-2 py-3 text-center">
							<div className="img mb-2">
								<img src={specialist.image} alt="" />
							</div>
							<h5 className="mb-0">
								{specialist.firstName} {specialist.lastName}
							</h5>
							<small>{specialist.specialization}</small>
							<div className="mt-4 apointment">
								<Link className="btn btn-warning btn-specialist" to={`/profile/${specialist._id}`}>
									View Profile
								</Link>
								<Link className="btn btn-warning btn-specialist" to={'/appointments/new'}>
									Book Appointment
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>

			{/*{specialists.map((specialist, index) => (
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
					))}*/}
		</>
	)
}
