import 'swiper/css'
import 'swiper/css/navigation'
import '../public/assets/css/style.css'
import { getNavigationData } from '@/lib/api/getNavigationData'
import App from 'next/app'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const navigationData = await getNavigationData()

    let pageProps = {}
    pageProps.navigation = navigationData

    if (Component.getServerSideProps) {
      pageProps = await Component.getServerSideProps(ctx)
    }
    return { pageProps }
  }

  // initialize the WOW.js library when the component mounts
  componentDidMount() {
    // Import the WOW.js library
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const WOW = require('wowjs')

    // Create an instance of the WOW.js library with live set to false
    // The live option determines whether elements are updated on resize or scroll events
    const wowInstance = new WOW.WOW({
      live: false,
    })

    // Initialize the WOW.js library to animate elements
    wowInstance.init()
  }
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
