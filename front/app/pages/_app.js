import '@/styles/globals.css'
import { AuthContext, AuthProvider } from './authcontext'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
