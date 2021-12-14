import React from 'react'

export default function NewAppointment(props) {
	function handleSubmit() {}

	return (
		<div>
			<h1>Request for an Appointment</h1>
			<form onSubmit={handleSubmit}>
				<h3>Name: {props.name} </h3>
				<h3>Price: {props.price}</h3>

				<div class="form-group">
					<label for="date">Date:</label>
					<input name="date" type="date" class="form-control" id="date" />
				</div>
				<div class="form-group">
					<label for="message">Message:</label>
					<textarea name="message" class="form-control" id="message"></textarea>
				</div>

				<button type="submit" class="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	)
}
