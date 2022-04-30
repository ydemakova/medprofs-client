import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../config'

export default function EditProfile() {
	const navigate = useNavigate()
	const [specialist, setSpecialist] = useState({})
	const { id } = useParams(null)

	if (!id) {
		throw new Error('No ID found!')
	}

	useEffect(() => {
		;(async () => {
			const res = await axios.get(`${API_URL}/auth/current-user`, { withCredentials: true })
			setSpecialist(res.data)
		})()
	}, [])

	async function uploadImage(image) {
		if (!image) return null
		let imageForm = new FormData()
		imageForm.append('imageUrl', image)
		let imgResponse = await axios.post(`${API_URL}/upload`, imageForm)
		return imgResponse.data.image || null
	}

	async function handleEdit(event) {
		event.preventDefault()
		const userUpdate = {}

		for (let i = 0, element; (element = event.target[i++]); ) {
			if (element.name && element.value) {
				userUpdate[element.name] = element.value
			}
		}

		const image = await uploadImage(event.target.myImage?.files[0])
		if (image) {
			userUpdate[image] = image
		}

		const res = await axios.put(`${API_URL}/users/${id}`, userUpdate, { withCredentials: true })
		setSpecialist(res.data)
		navigate(`/profile`, { replace: true })
	}

	return (
		<div className="mb-5">
			<h3>Edit Your Profile </h3>
			<form className="form" onSubmit={handleEdit}>
				<div className="form-group row mb-3">
					<label htmlFor="specialization" className="col-2 col-form-label offset-2">
						Specialization:
					</label>
					<div className="col-5">
						<input
							type="text"
							className="form-control"
							id="specialization"
							name="specialization"
							defaultValue={specialist?.specialization}
						/>
						<div className="form-text">Select field of speciality</div>
					</div>
				</div>

				<div className="form-group row mb-3">
					<label htmlFor="address" className="col-2 col-form-label offset-2">
						Address:
					</label>
					<div className="col-5">
						<input
							type="text"
							className="form-control"
							id="address"
							name="address"
							defaultValue={specialist?.address}
						/>
						<div className="form-text">Provide your country and city</div>
					</div>
				</div>

				<div className="form-group row mb-3">
					<label htmlFor="education" className="col-2 col-form-label offset-2">
						Education:
					</label>
					<div className="col-5">
						<input
							type="text"
							className="form-control"
							id="education"
							name="education"
							defaultValue={specialist?.education}
						/>
						<div className="form-text">Provide your education (university or high school)</div>
					</div>
				</div>

				<div className="form-group row mb-3">
					<label htmlFor="degree" className="col-2 col-form-label offset-2">
						Degree:
					</label>
					<div className="col-5">
						<input
							type="text"
							className="form-control"
							id="degree"
							name="degree"
							defaultValue={specialist?.degree}
						/>
						<div className="form-text">Provide your degree, professional title (example: Professor)</div>
					</div>
				</div>

				<div className="form-group row mb-3">
					<label htmlFor="background" className="col-2 col-form-label offset-2">
						Background:
					</label>
					<div className="col-5">
						<input
							type="text"
							className="form-control"
							id="background"
							name="background"
							defaultValue={specialist?.background}
						/>
						<div className="form-text">Your professional background (work places)</div>
					</div>
				</div>

				{/* <div className="row mb-3">
					<div className="offset-4">
						<img id="photo" src={specialist?.image} className="img-radius" alt="" />
					</div>
				</div>
				<div className="form-group row mb-3">
					<label htmlFor="image" className="col-2 col-form-label offset-2">
						Photo:
					</label>
					<input className="col-4 col-form-label" type="file" name="myImage" accept="image/png, image/jpg" />
					<div className="form-text offset-4">Your personal photo (will be seen by website visitors)</div>
				</div> */}

				<button className="btn btn-primary offset-4">Submit</button>
			</form>
		</div>
	)
}
