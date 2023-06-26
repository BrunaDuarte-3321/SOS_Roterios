import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { TravelItinerary } from './pages/TravelItinerary'
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/travelItinerary" element={<TravelItinerary />} />
    </Routes>
  )
}
