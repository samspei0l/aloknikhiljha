import '../styles/globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Component {...pageProps} />
    <SpeedInsights />
    <Analytics />

  </>
  );
}
export default App;


