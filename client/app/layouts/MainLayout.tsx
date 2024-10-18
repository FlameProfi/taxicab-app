import { Container } from '@mui/material'
import NavBar from '../components/navBar'
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}
const MainLayout: React.FC<Props> = ({children}) => {
	return (
		<>
		<NavBar />
		<Container style={{margin: "90px 0"}}>
			{children}
		</Container>
		</>
	);
};
export default MainLayout;