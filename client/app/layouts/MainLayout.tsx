import { Container } from '@mui/material'
import { ReactNode } from 'react'
import NavigationPages from '../components/navBar'

export interface Props {
	children: ReactNode;
}
const MainLayout: React.FC<Props> = ({children}) => {
	return (
		<>
		<NavigationPages />
		<Container style={{margin: "0"}}>
			{children}
		</Container>
		</>
	);
};
export default MainLayout;