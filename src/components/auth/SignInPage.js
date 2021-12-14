import React from 'react'
import { Link } from 'react-router-dom'

export default function SignInPage() {
	return (
		<div>
			<form>
				<Link to="/signup">{'Do not have an account? Sign Up'}</Link>
				<div className="col-md-3 mb-3">
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						name="email"
						className="form-control"
						id="email"
						aria-describedby="emailHelp"
						placeholder="Enter email"
					/>
					<small id="emailHelp" class="form-text text-muted">
						We'll never share your email with anyone else.
					</small>
				</div>
				<div className="col-md-3 mb-3">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" class="form-control" id="password" placeholder="Password" />
				</div>
			</form>
		</div>
	)
}
