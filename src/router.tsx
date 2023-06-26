import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { TravelItinerary } from './pages/TravelItinerary'
import { LayoutDefault } from './layouts/DefaultLayout'
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/travelItinerary" element={<TravelItinerary />} />
      </Route>
    </Routes>
  )
}
