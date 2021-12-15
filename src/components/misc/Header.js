import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config'

export default function Header() {
	const [user, setUser] = useState(null)

	async function signOut() {
		await axios.post(`${API_URL}/auth/sign-out`, {}, { withCredentials: true })
		setUser(null)
	}

	useEffect(() => {
		;(async () => {
			const res = await axios.get(`${API_URL}/auth/current-user`, { withCredentials: true })
			setUser(res.data)
		})()
	}, [])

	return (
		<header className="mb-5">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						Medical Professionals
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse d-flex" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/articles">
									Articles
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/appointments">
									Appointments
								</Link>
							</li>
							<li>
								<Link className="nav-link" to="/appointments/new">
									New Appointment
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									About us
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/">
									|
								</Link>
							</li>
							{(!!user && (
								<>
									<li className="nav-item">
										<Link className="nav-link" aria-current="page" to="/profile">
											Profile
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" aria-current="page" to="/my-articles">
											My Articles
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/sign-out" className="nav-link" type="button" onClick={signOut}>
											SignOut
										</Link>
									</li>
								</>
							)) || (
								<>
									<li className="nav-item">
										<Link className="nav-link" to="/sign-up">
											Sign Up
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/sign-in">
											Sign In
										</Link>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}
