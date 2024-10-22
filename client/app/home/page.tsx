'use client'
import { createContext, useContext, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import {useGlobalContext} from '../components/navBar'



export default function HomePage() {
	const { page, isOpen } = useGlobalContext();

	return (
		<> 
		<MainLayout> 
		{page == "home" ? <div>HOME PAGE</div> : <></>}
		{page == "settings" ? <div>SETTINGS PAGE</div> : <></>}
		</MainLayout>
		</>
	)
}
