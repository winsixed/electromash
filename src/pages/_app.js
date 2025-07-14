import '../assets/css/globals.css';
import useFadeIn from '../hooks/useFadeIn';

export default function MyApp({ Component, pageProps }) {
  useFadeIn();
  return <Component {...pageProps} />;
}
