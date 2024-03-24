'use client';

import { Provider } from "react-redux";
import { store } from "./store";

interface Props { children: React.ReactNode };

export function Providers({ children } : Props) {
    return (
        <Provider store={store}>
            {/* El provider ahora va a estar compartiendo el store
            con sus componentes hijos */}
            {children}
        </Provider>
    )
    
}