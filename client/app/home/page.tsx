'use client'
import useNavigateContext from '../context/navigationContext'
import MainLayout from "../layouts/MainLayout"
import ChatPage from './chat/page';
import MainPage from './main/page';
import ProfilePage from './profile/page'



export default function HomePage() {
	const {page} = useNavigateContext();

	return (
		<> 
		<MainLayout> 
		{page == 0 ? <MainPage /> : <></>}
		{page == 1 ? <ChatPage /> : <></>}
		{page == 2 ? <ProfilePage /> : <></>}
		</MainLayout>
		</>
	)
}
