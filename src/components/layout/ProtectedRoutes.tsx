import  { ReactNode } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { useCurrentToken } from '../../redux/features/auth/authSlice';
import { Navigate } from 'react-router';

const ProtectedRoutes = ({children}: {children: ReactNode}) => {
    const token = useAppSelector(useCurrentToken);

    if(!token){
        return <Navigate to='/login' replace={true} />
    }
    
    return children;
};

export default ProtectedRoutes;