import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
import { API_URL } from '../../config'

export default function ProfilePage() {
	const [user, setUser] = useState(null)

	useEffect(() => {
		;(async () => {
			const res = await axios.get(`${API_URL}/auth/current-user`, { withCredentials: true })
			setUser(res.data)
		})()
	})

	return (
		<div>
			<h1>Profile</h1>
			<div>{user?.username}</div>
		</div>
	)
}
