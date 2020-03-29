import { CookiesProvider } from 'react-cookie';
import 'antd/dist/antd.css'
import '../styles/index.scss'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  )
}
