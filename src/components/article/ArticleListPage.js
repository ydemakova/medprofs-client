import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config'

export default function ArticleListPage() {
	const [articles, setArticles] = useState([])

	useEffect(() => {
		;(async () => {
			const res = await axios.get(`${API_URL}/articles`)
			setArticles(res.data)
		})()
	}, [])

	return (
		<div className="all-articles container">
			<h2>Articles</h2>
			{articles.map((article, index) => (
				<div key={article._id} className="card mb-3">
					<div className="card-body">
						<h5 className="card-title">{article.title}</h5>
						<p className="card-text">Sphere: {article.sphere}</p>
						<p className="card-text text-truncate">{article.text}</p>
						<p className="card-text">Author: {article.author?.username}</p>
						<Link className="btn btn-primary" to={'/articles/' + article._id}>
							Read more ...
						</Link>
					</div>
				</div>
			))}
		</div>
	)
}
