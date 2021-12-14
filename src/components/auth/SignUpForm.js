import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API_URL } from '../../config'

export default function SignUpForm() {
	const navigate = useNavigate()
	const [type, setType] = useState('visitor')

	async function createUser(event) {
		event.preventDefault()
		console.log(event.target)

		const userNew = {
			username: event.target.username.value,
			firstName: event.target.firstName.value,
			lastName: event.target.lastName.value,
			email: event.target.email.value,
			password: event.target.password.value,
		}
		console.log(userNew)
		await axios.post(`${API_URL}/auth/sign-up`, userNew, { withCredentials: true })

		let err
		if (err) {
			console.error(err)
			// handle error
			return
		}
		navigate('/profile', { replace: true })
	}

	function selectType(event) {
		const typeNew = event.target.value
		console.log(typeNew)
		setType(typeNew)
	}

	return (
		<div className="user-form">
			<form className="form" onSubmit={createUser}>
				<div className="form-group row mb-3">
					<label htmlFor="username" className="col-2 col-form-label offset-2">
						Username:
					</label>
					<div className="col-5">
						<input type="text" className="form-control" id="username" name="username" />
						<div className="form-text">Select a username for you</div>
					</div>
				</div>
				<div className="form-group row mb-3">
					<label htmlFor="firstName" className="col-2 col-form-label offset-2">
						First name:
					</label>
					<div className="col-5">
						<input type="text" className="form-control" id="firstName" name="firstName" />
						<div className="form-text">Enter your first name</div>
					</div>
				</div>
				<div className="form-group row mb-3">
					<label htmlFor="lastName" className="col-2 col-form-label offset-2">
						Last name:
					</label>
					<div className="col-5">
						<input type="text" className="form-control" id="lastName" name="lastName" />
						<div className="form-text">Enter your last name</div>
					</div>
				</div>
				<div className="form-group row mb-3">
					<label htmlFor="email" className="col-2 col-form-label offset-2">
						Email:
					</label>
					<div className="col-5">
						<input type="email" className="form-control" id="email" name="email" />
						<div className="form-text">Enter your email</div>
					</div>
				</div>
				<div className="form-group row mb-3">
					<label htmlFor="password" className="col-2 col-form-label offset-2">
						Password:
					</label>
					<div className="col-5">
						<input type="password" className="form-control" id="password" name="password" />
						<div className="form-text">Password for this website</div>
					</div>
				</div>

				<div className="form-group row mb-3">
					<label className="col-2 col-form-label offset-2">Type:</label>
					<div className="col-5">
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="type"
								value="visitor"
								id="type-visitor"
								defaultChecked={true}
								onChange={selectType}
							/>
							<label className="form-check-label" htmlFor="type-visitor">
								Visitor
							</label>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="type"
								value="specialist"
								id="specialist"
								onChange={selectType}
							/>
							<label className="form-check-label" htmlFor="specialist">
								Specialist
							</label>
						</div>
					</div>
				</div>

				{type === 'specialist' && (
					<div className="form-group row mb-3">
						<label htmlFor="specialization" className="col-2 col-form-label offset-2">
							Specialization:
						</label>
						<div className="col-5">
							<input type="text" className="form-control" id="specialization" name="specialization" />
							<div className="form-text">Select field of speciality</div>
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
								<div className="form-text">
									Provide your degree, professional title (example: Professor)
								</div>
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
					</div>
				)}

				<button className="btn btn-primary offset-4">Submit</button>
			</form>

			<div className="row">
				<div className="offset-4 my-3">
					<Link to="/sign-in" className="col-form-label">
						Already a user? Sign in instead
					</Link>
				</div>
			</div>
		</div>
	)
}
