import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/Default'
import { Home } from './pages/Home'
import { TravelRoute } from './pages/TravelRoute'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/travelRoute" element={<TravelRoute />} />
      </Route>
    </Routes>
  )
}
