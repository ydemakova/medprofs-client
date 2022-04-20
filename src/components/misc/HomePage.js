import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config'

export default function HomePage() {
	const [articles, setArticles] = useState([])
	useEffect(() => {
		;(async () => {
			const res = await axios.get(`${API_URL}/articles?isNewest=true`)
			setArticles(res.data)
		})()
	}, [])

	return (
		<div>
			<h2 className="text-center mb-5">Newest Articles</h2>
			<div className="all-articles container">
				<div className="row">
					{articles.map((article) => (
						<div key={article._id} className="col-4">
							<div className="card mb-3">
								<div className="card-body">
									<h5 className="card-title">{article.title}</h5>
									<p className="card-author">Author: {article.author?.username}</p>
									<Link className="btn btn-primary" to={'/articles/' + article._id}>
										Read more ...
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
