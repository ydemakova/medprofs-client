import { Route, Routes } from 'react-router-dom'
import './App.css'
import AppointmentListPage from './components/appointment/AppointmentList'
import ArticleDetailPage from './components/article/ArticleDetailPage'
import ArticleListPage from './components/article/ArticleListPage'
import MyArticleFormPage from './components/article/MyArticleFormPage'
import MyArticleListPage from './components/article/MyArticleListPage'
import SignInPage from './components/auth/SignInPage'
import SignOutPage from './components/auth/SignOutPage'
import SignUpPage from './components/auth/SignUpPage'
import AboutPage from './components/misc/AboutPage'
import Footer from './components/misc/Footer'
import Header from './components/misc/Header'
import HomePage from './components/misc/HomePage'
import ProfilePage from './components/user/ProfilePage'

export default function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/sign-in" element={<SignInPage />} />
				<Route path="/sign-up" element={<SignUpPage />} />
				<Route path="/sign-out" element={<SignOutPage />} />
				<Route path="/articles" element={<ArticleListPage />} />
				<Route path="/articles/:id" element={<ArticleDetailPage />} />
				<Route path="/appointments" element={<AppointmentListPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/my-articles" element={<MyArticleListPage />} />
				<Route path="/my-articles/:id" element={<MyArticleFormPage />} />
				<Route path="/my-articles/new" element={<MyArticleFormPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/" element={<HomePage />} />
			</Routes>
			<Footer />
		</div>
	)
}
