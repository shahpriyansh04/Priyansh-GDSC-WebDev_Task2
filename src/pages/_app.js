import "@/styles/globals.css";
import { AuthContextProvider } from "../lib/auth";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
