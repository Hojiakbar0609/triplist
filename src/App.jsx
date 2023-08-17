import { useState } from 'react';

// components
import TripList from './components/TripList';

// data
import '../data/data.json'

function App() {

  return (
    <div>
      <TripList/>
    </div>
  )
}

export default App
