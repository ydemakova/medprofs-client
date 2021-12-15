import React from 'react'

export default function Footer() {
	return (
		<footer className="mt-auto bk-dark text-center text-white" style={{ backgroundColor: '#116466' }}>
			<div className="p-4">
				<section className="container">
					<form>
						<div className="row d-flex justify-content-center">
							<div className="col-auto">
								<p className="pt-2">
									<strong>Sign up for our newsletter</strong>
								</p>
							</div>

							<div className="col-md-5 col-12">
								<div className="form-outline form-white mb-4">
									<input type="email" id="form5Example29" className="form-control" />
									<label className="form-label" htmlFor="form5Example29">
										Email address
									</label>
								</div>
							</div>

							<div className="col-auto">
								<button type="submit" className="btn btn-outline-light mb-4">
									Subscribe
								</button>
							</div>
						</div>
					</form>
				</section>
			</div>

			<div className="text-center p-3">
				© 2021 Copyright:&nbsp;
				<a className="text-white" href="https://www.wizardingworld.com/">
					Medprofs.com
				</a>
			</div>
		</footer>
	)
}
