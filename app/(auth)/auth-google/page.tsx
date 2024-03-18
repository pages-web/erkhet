import { Suspense } from 'react';
import AuthGoogle from './auth-google';

const AuthGooglePage = () => (
  <Suspense>
    <AuthGoogle />
  </Suspense>
);

export default AuthGooglePage;
