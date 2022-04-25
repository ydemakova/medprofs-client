import React from 'react'

export default function AboutPage() {
	return (
		<div>
			<h2 style={{ margin: '3% 0' }}>About Us</h2>
			<div className="about-us" style={{ marginTop: '5%' }}>
				<div>
					<h5>Our expertise</h5>
					<img
						id="about-us"
						src="https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_960_720.png"
						alt=""
					/>
				</div>
				<div>
					<h5>Our team</h5>

					<img src=" https://cdn.pixabay.com/photo/2017/01/31/22/32/boy-2027768_960_720.png" alt="doc" />
					<img src="https://cdn.pixabay.com/photo/2017/01/31/22/32/cartoon-2027771_960_720.png" alt="doc" />
					{/*<img src="https://cdn.pixabay.com/photo/2020/05/17/05/53/doctor-5180142_960_720.png"/>*/}
				</div>
			</div>
			<div className="text-general" style={{ margin: '7% 0' }}>
				<h5>Our Mission and Promise</h5>

				<h6>
					We provide you with the best medical professionals. All our specialists have proven their education
					and background
				</h6>
				<br />
				<h5>Privacy</h5>
				<h6>We guarantee the protection of your personal data whenever they are collected</h6>
			</div>
		</div>
	)
}
