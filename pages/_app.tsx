import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative min-h-screen">
      <NavBar />
      <Component {...pageProps} />
      <footer className="bg-primary w-full h-[50px] flex justify-center items-center absolute bottom-0">
        <p className="text-white font-light text-xs">
          @Copyright 2023,. Developer by Johnny you
        </p>
      </footer>
    </div>
  );
}

export default MyApp;
