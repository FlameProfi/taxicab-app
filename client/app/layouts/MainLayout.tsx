import { Container } from '@mui/material'
import NavigationPages from '../components/navBar'
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}
const MainLayout: React.FC<Props> = ({children}) => {
	return (
		<>
		<NavigationPages />
		<Container style={{margin: "90px 0"}}>
			{children}
		</Container>
		</>
	);
};
export default MainLayout;