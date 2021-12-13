import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { API_URL } from '../../'

export default function ArticleListPage() {
	const [articles, setArticles] = useState([])

	useEffect(() => {
		;(async () => {
			let res = await axios.get(`http://localhost:5005/api/articles`)
			setArticles(res.data)
		})()
	}, [])

	return (
		<div className="articles">
			<h1>Article list page</h1>
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Tags</th>
						<th>Locations</th>
						<th>Text</th>
						<th>Author</th>
						<th>Type</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{articles.map((article, index) => (
						<tr key={article._id}>
							<td>{index}.</td>
							<td>{article.title}</td>
							<td>{article.tags}</td>
							<td>{article.locations}</td>
							<td>{article.text}</td>
							<td>{article.author}</td>
							<td>{article.type}</td>
							<td>edit | delete</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
