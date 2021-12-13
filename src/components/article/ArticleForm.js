import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../config'

export default function ArticleForm() {
	const navigate = useNavigate()

	async function handleSubmit(event) {
		event.preventDefault()

		const article = {
			title: event.target.title.value,
			sphere: event.target.sphere.value,
			text: event.target.text.value,
			location: event.target.location.value,
			link: event.target.link.value,
		}

		let err
		await axios.post(`${API_URL}/articles`, article, { withCredentials: true }).catch((e) => (err = e))

		if (err) {
			console.error(err)
			// handle error
			return
		}

		navigate('/articles', { replace: true })
	}

	return (
		<div className="container">
			<h2>Add / Edit Your Article</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group row mb-3">
					<label htmlFor="title" className="col-3 offset-2 col-form-label">
						Title:
					</label>
					<div className="col-5">
						<input type="text" className="form-control" id="title" name="title" />
						<div className="form-text">The title of the article</div>
					</div>
				</div>
				<div className="form-group row mb-3">
					<label className="col-3 offset-2" htmlFor="sphere">
						Sphere:
					</label>
					<div className="col-5">
						<select className="form-control" id="sphere" name="sphere">
							<option value="Allergy and immunology">Allergy and immunology</option>
							<option value="Cardiology">Cardiology</option>
							<option value="Clinical neurophysiology">Clinical neurophysiology</option>
							<option value="Dermatology">Dermatology</option>
							<option value="Gastroenterology">Gastroenterology</option>
							<option value="Genetics">Genetics</option>
							<option value="Hematology">Hematology</option>
							<option value="Infectious disease">Infectious disease</option>
							<option value="Internal medicine">Internal medicine</option>
							<option value="Nutrition">Nutrition</option>
							<option value="Pediatrics">Pediatrics</option>
							<option value="Surgery">Surgery</option>
							<option value="Trichology">Trichology</option>
							<option value="Another">Another...</option>
						</select>
						<div className="form-text">The field of expertise of the article</div>
					</div>
				</div>
				<div className="form-group row mb-3">
					<label htmlFor="text" className="col-3 offset-2 col-form-label">
						Text:
					</label>
					<div className="col-5">
						<textarea type="text" className="form-control" id="text" name="text"></textarea>
						<div className="form-text">Article contents</div>
					</div>
				</div>
				<div className="form-group row mb-3">
					<label htmlFor="location" className="col-3 offset-2 col-form-label">
						Location:
					</label>
					<div className="col-5">
						<input type="location" className="form-control" name="location" id="location" />
						<div className="form-text">Where it is spread / which regions it applies to</div>
					</div>
				</div>
				<div className="form-group row mb-3">
					<label htmlFor="link" className="col-3 offset-2 col-form-label">
						Link:
					</label>
					<div className="col-5">
						<input type="link" className="form-control" name="link" id="link" />
						<div className="form-text">An additional link to the topic</div>
					</div>
				</div>
				<div className="row">
					<div className="col-5 offset-5">
						<button className="btn btn-primary" type="submit">
							Submit form
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}
