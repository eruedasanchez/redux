'use client'; // lo coloco porque es codigo js y no quiero que se ejecute del lado del server

import { Provider } from "react-redux";
import { store } from "./store";

interface Props {
    children: React.ReactNode
}

export function Providers({ children } : Props) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}
