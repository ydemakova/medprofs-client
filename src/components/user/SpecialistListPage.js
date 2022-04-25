import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config'

export default function SpecialistListPage() {
	const [specialists, setSpecialists] = useState([])
	const [currentId, setCurrentId] = useState(null)

	useEffect(() => {
		;(async () => {
			let res = await axios.get(`${API_URL}/users?isSpecialistsOnly=true`)
			setSpecialists(res.data)
			res = await axios.get(`${API_URL}/auth/current-user`, { withCredentials: true })
			setCurrentId(res.data._id)
		})()
	}, [])

	return (
		<div className="container">
			<h2 style={{ paddingBottom: '1%' }}>Our Professionals</h2>
			<div className="row g-2 mx-auto">
				{specialists.map((specialist) => (
					<div key={specialist._id} className="col-lg-4 col-md-5 col-sm-12" style={{ padding: '2%' }}>
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
								{currentId !== specialist._id && (
									<Link className="btn btn-warning btn-specialist" to="/appointments/new">
										Book Appointment
									</Link>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
