import { createContext, PropsWithChildren, useContext, useState } from 'react'

type NavigationInterface = {
	page: number;
	isOpen: boolean;
	changeOpen: () => void;
	changePage: (page: number) => void;
}

const navigateContextDefaultValues: NavigationInterface = {
	page: 0,
	isOpen: true,
	changeOpen: () => {},
	changePage: () => {},
};


export const NavigationContext = createContext<NavigationInterface>(navigateContextDefaultValues);

export default function useNavigateContext() {
	return useContext(NavigationContext);
}

export function NavigationProvder({ children }: PropsWithChildren) {
	const [page, setPage] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(true);

	const changeOpen = () => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};

	const changePage = (page: number) => {
		setPage(page);
	};

	const value = {
		page,
		isOpen,
		changeOpen,
		changePage,
	};

	return (
		<NavigationContext.Provider value={value}>
			{children}
		</NavigationContext.Provider>
	)
}