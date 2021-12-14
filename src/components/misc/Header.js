import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
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
								<Link className="nav-link active" aria-current="page" to="/">
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
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									About us
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/sign-up">
									Sign Up
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}
