import { ReactNode } from "react";
import { Provider } from "react-redux";
import { setupStore } from "../store";

const store = setupStore();

type Props = {
	children: ReactNode;
}

export const MainProviders = ({ children }: Props) => {
	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}