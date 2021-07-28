import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { theme } from '../styles/theme'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

import '../styles/slide.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header></Header>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
