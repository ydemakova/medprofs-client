import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_URL } from '../../config'

export default function ArticleDetailPage() {
	const { id } = useParams()
	const [article, setArticle] = useState({})

	useEffect(() => {
		;(async () => {
			const res = await axios.get(`${API_URL}/articles/${id}`)
			setArticle(res.data)
		})()
	}, [id])

	return (
		<div className="container">
			<Link className="btn btn-primary mb-3" to="/articles">
				&lt; Back to articles ...
			</Link>
			<div className="article-detail card mb-3">
				<div className="card-body">
					<h5 className="card-title">{article.title}</h5>
					<p className="card-text">Sphere: {article.sphere}</p>
					<p className="card-text">Location: {article.location}</p>
					<p className="card-text">Link: {article.link}</p>
					<p className="card-text">{article.text}</p>
					<p className="card-text">
						Author: {article.author?.firstName} {article.author?.lastName}
					</p>
				</div>
			</div>
		</div>
	)
}
