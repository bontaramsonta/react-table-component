import React from 'react'
import {
  createReactRouter,
  createRouteConfig,
} from '@tanstack/react-router'

import Loader from '@/pages/Loader'
import Error from '@/pages/Error'

const Home = React.lazy(async () => {
  // simulated loading
  // await new Promise(resolve => setTimeout(resolve, 3000))
  return await import('./Home')
})

const routeConfig = createRouteConfig({
  component: Home,
  pendingComponent: Loader,
  errorComponent: Error
})

const router = createReactRouter({ routeConfig })

export default router