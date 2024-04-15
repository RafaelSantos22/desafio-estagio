import { Navigate } from "react-router-dom";

type Props = {
    children: React.ReactNode;
};

const isAuthenticaded = () => {
    return localStorage.getItem('userData');
};

export const PrivateRoute = ({ children }: Props) => {
    if (!isAuthenticaded()) {
        return <Navigate to='/' />
    }

    return children;
};