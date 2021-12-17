import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config'
import { Link, useParams } from 'react-router-dom'

export default function ProfilePage() {
	const { id } = useParams()
	const [user, setUser] = useState(null)
	const [currentId, setCurrentId] = useState(null)

	useEffect(() => {
		;(async () => {
			let res = await axios
				.get(`${API_URL}/auth/current-user`, { withCredentials: true })
				.catch((err) => console.log('Error: ', err))
			setCurrentId(res.data._id)
			if (!id) return
			res = await axios
				.get(`${API_URL}/users/${id}`, { withCredentials: true })
				.catch((err) => console.log('Error: ', err))
			setUser(res?.data)
		})()
	}, [id])

	return (
		<div>
			<h2>Profile</h2>
			<div className="container-card-profile p-4">
				<div className="container">
					<div className="padding">
						<div className="row container d-flex justify-content-center">
							<div className="col-xl-12 col-md-12">
								<div className="card user-card-full">
									<div className="row m-l-0 m-r-0">
										<div className="col-sm-3 bg-c-lite-green user-profile">
											<div className="card-block text-center text-white">
												<h6 className="f-w-600">{user?.username}</h6>
												<div className="m-b-25">
													<img id="photo" src={user?.image} className="img-radius" alt="" />
												</div>
												<p>{user?.degree}</p> <p>{user?.specialization}</p>
											</div>
										</div>
										<div className="col-sm-9 mt-2">
											<div className="card-block">
												<h6 className="m-b-20 p-b-5 b-b-default f-w-600">
													Professional Information
												</h6>
												<div className="row">
													<div className="col-sm-6">
														<p className="m-b-10 f-w-600">Background</p>
														<h6 className="text-muted f-w-400">{user?.background}</h6>
													</div>
													<div className="col-sm-6">
														<p className="m-b-10 f-w-600">Education</p>
														<h6 className="text-muted f-w-400">{user?.education}</h6>
													</div>
												</div>
												<h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
												<div className="row">
													<div className="col-sm-6">
														<p className="m-b-10 f-w-600">Articles</p>
														<h6 className="text-muted f-w-400">Clinical psyhology</h6>
													</div>
													<div className="col-sm-6">
														<p className="m-b-5 f-w-600">Location</p>
														<h6 className="text-muted f-w-400">
															{user?.address?.city} {user?.address?.country}
														</h6>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{(currentId === user?._id && (
				<div className="text-center">
					<Link className="btn btn-primary btn-profile" to="/my-articles/new">
						Write an Article
					</Link>
					<Link to={`/profile/edit/${user?._id}`} className="btn btn-success btn-profile">
						Edit Profile
					</Link>
					<button className="btn btn-danger btn-profile">Delete Profile</button>
				</div>
			)) || (
				<div className="text-center">
					<Link className="btn btn-primary" to="/appointments/new">
						Book an appointment
					</Link>
				</div>
			)}
		</div>
	)
}
