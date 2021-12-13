import { Route, Routes } from 'react-router-dom'
import './App.css'
import AppointmentList from './components/appointment/AppointmentList'
import ArticleForm from './components/article/ArticleForm'
import ArticleList from './components/article/ArticleListPage'
import SignInPage from './components/auth/SignInPage'
import SignUpPage from './components/auth/SignUpPage'
import AboutPage from './components/misc/AboutPage'
import Footer from './components/misc/Footer'
import Header from './components/misc/Header'
import HomePage from './components/misc/HomePage'
import ProfilePage from './components/user/ProfilePage'

export default function App() {
	return (
		<div className="App">
			<Header>
				<Routes>
					<Route path="/signin" element={<SignInPage />} />
					<Route path="/signup" element={<SignUpPage />} />
				</Routes>
			</Header>
			<ArticleForm />
			<Routes>
				<Route path="/articles" element={<ArticleList />} />
				<Route path="/appointments" element={<AppointmentList />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/" element={<HomePage />} />
			</Routes>
			<Footer />
		</div>
	)
}
