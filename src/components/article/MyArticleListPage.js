import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config'

export default function MyArticleListPage() {
	const [articles, setArticles] = useState([])

	useEffect(() => {
		;(async () => {
			const res = await axios.get(`${API_URL}/articles?isCurrentUser=true`, { withCredentials: true })
			setArticles(res.data)
		})()
	}, [])

	async function deleteArticle(id) {
		await axios.delete(`${API_URL}/articles/${id}`, { withCredentials: true })
		const filteredArticles = articles.filter((elem) => {
			return elem._id !== id
		})
		setArticles(filteredArticles)
	}

	return (
		<div className="articles">
			<div className="d-flex justify-content-between align-items-baseline">
				<h1>Article list page</h1>
				<Link to="/my-articles/new" className="btn btn-primary">
					New Article
				</Link>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Sphere</th>
						<th>Link</th>
						<th>Location</th>
						<th>Author</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{articles.map((article, index) => (
						<tr key={article._id} className="align-middle">
							<td>{index + 1}.</td>
							<td>{article.title}</td>
							<td>{article.sphere}</td>
							<td>{article.link}</td>
							<td>{article.location}</td>
							<td>{article.author?.username}</td>
							<td>
								<Link className="btn btn-primary" to={`/my-articles/${article._id}`}>
									edit
								</Link>
								&nbsp;
								<button className="btn btn-danger" onClick={() => deleteArticle(article._id)}>
									delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
