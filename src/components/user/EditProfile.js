import axios from 'axios'
import React, { useState } from 'react'
import { API_URL } from '../../config'

export default function EditProfile() {
	const [specialist, setSpecialist] = useState({})

	async function handleEdit(event) {
		event.preventDefault()

		const res = await axios.get(`${API_URL}/users/:id`, { withCredentials: true })
		setSpecialist(res.data)
	}

	return (
		<>
			<h3>Edit Your Profile </h3>
			<form className="form" onSubmit={handleEdit}>
				<div className="form-group row mb-3">
					<label htmlFor="specialization" className="col-2 col-form-label offset-2">
						Specialization:
					</label>

					<div className="col-5">
						<input type="text" className="form-control" id="specialization" name="specialization" />
						<div className="form-text">Select field of speciality</div>
					</div>
				</div>

				<div className="form-group row mb-3">
					<label htmlFor="address" className="col-2 col-form-label offset-2">
						Address:
					</label>
					<div className="col-5">
						<input type="text" className="form-control" id="address" name="address" />
						<div className="form-text">Provide your country and city</div>
					</div>
				</div>

				<div className="form-group row mb-3">
					<label htmlFor="education" className="col-2 col-form-label offset-2">
						Education:
					</label>
					<div className="col-5">
						<input type="text" className="form-control" id="education" name="education" />
						<div className="form-text">Provide your education (university or high school)</div>
					</div>
				</div>

				<div className="form-group row mb-3">
					<label htmlFor="degree" className="col-2 col-form-label offset-2">
						Degree:
					</label>
					<div className="col-5">
						<input type="text" className="form-control" id="degree" name="degree" />
						<div className="form-text">Provide your degree, professional title (example: Professor)</div>
					</div>
				</div>

				<div className="form-group row mb-3">
					<label htmlFor="background" className="col-2 col-form-label offset-2">
						Background:
					</label>
					<div className="col-5">
						<input type="text" className="form-control" id="background" name="background" />
						<div className="form-text">Your professional background (work places)</div>
					</div>
				</div>

				<div className="form-group row mb-3">
					<label htmlFor="image" className="col-2 col-form-label offset-2">
						Photo:
					</label>
					<input className="col-4 col-form-label" type="file" name="myImage" accept="image/png, image/jpg" />
					<div className="form-text offset-4">Your personal photo (will be seen by website visitors)</div>
				</div>

				<button className="btn btn-primary offset-4">Submit</button>
			</form>
		</>
	)
}
