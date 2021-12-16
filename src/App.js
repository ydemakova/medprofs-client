import { Route, Routes } from 'react-router-dom'
import './App.css'
import AppointmentListPage from './components/appointment/AppointmentList'
import NewAppointment from './components/appointment/NewAppointment'
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
import EditProfile from './components/user/EditProfile'
import SpecialistListPage from './components/user/SpecialistListPage'
import My404Component from './components/misc/My404Component'

export default function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/sign-in" element={<SignInPage />} />
				<Route path="/sign-up" element={<SignUpPage />} />
				<Route path="/sign-out" element={<SignOutPage />} />
				<Route path="/users" element={<SpecialistListPage />}></Route>
				<Route path="/articles" element={<ArticleListPage />} />
				<Route path="/articles/:id" element={<ArticleDetailPage />} />
				<Route path="/appointments" element={<AppointmentListPage />} />
				<Route path="/appointments/new" element={<NewAppointment />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/profile/:id" element={<ProfilePage />} />
				<Route path="/profile/edit" element={<EditProfile />} />
				<Route path="/my-articles" element={<MyArticleListPage />} />
				<Route path="/my-articles/:id" element={<MyArticleFormPage />} />
				<Route path="/my-articles/new" element={<MyArticleFormPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/" exact={true} element={<HomePage />} />
				<Route path="*" element={<My404Component />} />
			</Routes>
			<Footer />
		</div>
	)
}
