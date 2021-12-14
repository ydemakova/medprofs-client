import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignInPage() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	//const { id } = useParams()

	const navigate = useNavigate()

	function validateForm() {
		return username.length > 0 && password.length > 0
	}

	function handleSubmit(event) {
		event.preventDefault()
		//if(event.target.username.value ===
		//
		//axios.get('/users') &&) {

		navigate('/articles', { replace: true })
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Link to="/sign-up" className="col-md-3 mb-3 offset-5">
					{'Do not have an account? Sign Up'}
				</Link>
				<div className="col-md-3 mb-3 mt-3 offset-5">
					<label htmlFor="username">Username</label>
					<input
						autoFocus
						type="text"
						name="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="form-control"
						id="username"
						placeholder="Enter your username"
					/>
				</div>
				<div className="col-md-3 mb-3 offset-5">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						class="form-control"
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
