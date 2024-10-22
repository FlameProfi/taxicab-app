'use client'
import useNavigateContext from '../context/navigationContext'
import MainLayout from "../layouts/MainLayout"
import ProfilePage from './profile/page'



export default function HomePage() {
	const {page} = useNavigateContext();

	return (
		<> 
		<MainLayout> 
		{page == 0 ? <div>{page}</div> : <></>}
		{page == 1 ? <div>SETTINGS PAGE</div> : <></>}
		{page == 2 ? <ProfilePage /> : <></>}
		</MainLayout>
		</>
	)
}
