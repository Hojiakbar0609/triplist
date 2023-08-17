import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch';
// style
import './TripList.css'


function TripList() {
    const [url, setUrl] = useState('http://localhost:3000/trips')
    const {data:trips, isPending} = useFetch(url)
    console.log(trips);

    // ? useCallback => funksiyalarni (manzillarini) xotiraga saqlaydi

    

  return (
    <div className='trip-list'>
    <h1>TripList</h1>
    { isPending && <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
        <ul>
            {trips && trips.map((trip) => {
                return(
                    <li key={trip.title}>
                        <h2>{trip.title}</h2>
                        <p>{trip.price}</p>
                    </li>
                )
            })}
        </ul>
        <div className="filters">
            <button onClick={() => setUrl('http://localhost:3000/trips?loc=Europa')}>Europa Trips</button>
            <button onClick={() => setUrl('http://localhost:3000/trips')}>All Trips</button>
        </div>
    </div>
  )
}

export default TripList