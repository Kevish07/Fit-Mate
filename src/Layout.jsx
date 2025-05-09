import React from 'react'
import App from './App'
import Landing from './pages/Landing/Landing.jsx'
import Workouts from './pages/Workouts/Workouts.jsx'
import Nutrition from './pages/Nutrition/Nutrition.jsx'
import Community from './pages/Community/Community.jsx'
import Challenges from './pages/Challenges/Challenges.jsx'
import { Routes, Route } from 'react-router-dom'
import Leaderboard from './pages/Leaderboard/Leaderboard.jsx'
import Dashboard  from "./pages/Dashboard/Dashboard.jsx"

export default function Layout() {
  return (
    <App>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/community" element={<Community />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Dashboard />} />
      </Routes>
    </App>
  )
}