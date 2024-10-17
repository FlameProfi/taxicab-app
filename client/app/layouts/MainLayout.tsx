import { Container } from '@mui/material'
import NavBar from '../components/navBar'
const MainLayout: React.FC = ({children}) => {
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