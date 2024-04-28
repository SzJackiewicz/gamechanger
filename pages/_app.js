import 'swiper/css'
import 'swiper/css/navigation'
import '../public/assets/css/style.css'
import { QueryClientProvider, dehydrate, Hydrate } from '@tanstack/react-query'
import { getQueryClient } from '../utils/getQueryClient'
import App from 'next/app'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {
      pageProps: props.pageProps,
    }
  }
  static async getInitialProps({ Component, ctx }) {
    ctx.queryClient = getQueryClient()
    let pageProps = {}
    pageProps.navigation = []

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps, dehydratedState: dehydrate(ctx.queryClient) }
  }

  setPageProps = (newPageProps) => {
    this.setState({ pageProps: newPageProps })
  }

  componentDidMount() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const WOW = require('wowjs')
    const wowInstance = new WOW.WOW({
      live: false,
    })

    wowInstance.init()
  }
  render() {
    const { Component, dehydratedState } = this.props
    const { pageProps } = this.state
    const queryClient = getQueryClient()

    return (
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    )
  }
}

export default MyApp
