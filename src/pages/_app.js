import "@/styles/globals.css";
import { AuthContextProvider } from "../lib/auth";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </AuthContextProvider>
  );
}
