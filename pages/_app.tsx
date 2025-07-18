import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SearchProvider } from "../context/SearchContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <Component {...pageProps} />
    </SearchProvider>
  );
}
