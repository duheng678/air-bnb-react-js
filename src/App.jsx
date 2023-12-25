import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from '@/router'
const App = memo(() => {
  return (
    <Suspense fallback="loading">
      <div className="page">{useRoutes(routes)}</div>
    </Suspense>
  )
})

export default App
