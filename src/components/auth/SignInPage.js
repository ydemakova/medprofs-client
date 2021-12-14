import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API_URL } from '../../config'

export default function SignInPage() {
	const [email, setEmail] = useState('aedfasd@sdfqweads.de')
	const [password, setPassword] = useState('adfasdfasdfadsfasdfc')
	const navigate = useNavigate()

	function validateForm() {
		return email.length > 0 && password.length > 0
	}

	async function handleSubmit(event) {
		event.preventDefault()
		const signInDto = { email, password }
		let err

		await axios.post(`${API_URL}/auth/sign-in`, signInDto, { withCredentials: true }).catch((e) => (err = e))

		if (err) {
			console.error(err)
			// handle error
			return
		}

		navigate('/profile', { replace: true })
	}

	return (
		<div>
			<h2 className="text-center">Sign In</h2>
			<form onSubmit={handleSubmit}>
				<Link to="/sign-up" className="col-md-3 mb-3 offset-5">
					{'Do not have an account? Sign Up'}
				</Link>
				<div className="col-md-3 mb-3 mt-3 offset-5">
					<label htmlFor="email">Email</label>
					<input
						autoFocus
						type="text"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="form-control"
						id="email"
						placeholder="Enter your email"
					/>
				</div>
				<div className="col-md-3 mb-3 offset-5">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="form-control"
						id="password"
						placeholder="Password"
					/>
				</div>
				<button className="btn btn-primary offset-7" disabled={!validateForm()}>
					Submit
				</button>
			</form>
		</div>
	)
}
