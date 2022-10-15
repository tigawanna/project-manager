
import { Navigate } from 'react-router-dom';
import { Admin, User } from 'pocketbase';
import { ReactNode } from 'react';

interface Protected{
    user?: User | Admin | null
    children:ReactNode
}

export const ProtectedRoute = ({ user, children }:Protected) => {
if(!user) { return <Navigate to="/login" replace />}
     return children;
};
