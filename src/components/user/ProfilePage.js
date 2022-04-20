import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config'
import { Link, useParams } from 'react-router-dom'

export default function ProfilePage() {
	const { id } = useParams()
	const [user, setUser] = useState(null)
	const [currentId, setCurrentId] = useState(null)
	const [articles, setArticles] = useState([])

	useEffect(() => {
		;(async () => {
			let res = await axios
				.get(`${API_URL}/auth/current-user`, { withCredentials: true })
				.catch((err) => console.log('Error: ', err))
			setCurrentId(res.data._id)
			res = await axios
				.get(`${API_URL}/users/${id || res.data._id}`, { withCredentials: true })
				.catch((err) => console.log('Error: ', err))
			setUser(res?.data)
			res = await axios
				.get(`${API_URL}/articles?author=${id || res.data._id}`, { withCredentials: true })
				.catch((err) => console.log('Error: ', err))
			setArticles(res.data)
		})()
	}, [id, currentId])

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
												<p className="f-w-600">{user?.username}</p>
												<div className="m-b-25">
													<img id="photo" src={user?.image} className="img-radius" alt="" />
												</div>
												<p>{user?.degree}</p>
												<p>{user?.specialization}</p>
											</div>
										</div>
										<div className="col-sm-9 mt-2">
											<div className="card-block">
												<p className="m-b-20 p-b-5 b-b-default f-w-600">
													Professional Information
												</p>
												<div className="row">
													<div className="col-sm-6">
														<p className="m-b-10 f-w-600">Background</p>
														<p className="text-muted f-w-400">{user?.background}</p>
													</div>
													<div className="col-sm-6">
														<p className="m-b-10 f-w-600">Education</p>
														<p className="text-muted f-w-400">{user?.education}</p>
													</div>
												</div>
												<p className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</p>
												<div className="row">
													<div className="col-sm-6">
														<p className="m-b-10 f-w-600">Articles</p>
														<ul className="text-muted f-w-400">
															{articles.map((article) => (
																<li key={article._id}>{article.title}</li>
															))}
														</ul>
													</div>
													<div className="col-sm-6">
														<p className="m-b-5 f-w-600">Address</p>
														<p className="text-muted f-w-400">{user?.address}</p>
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
