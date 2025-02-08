import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import StarRating from './StarRating.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    { /*<StarRating maxRating={5} messages={['Terrible', 'Bad', 'Okey', 'Good', 'Amazing']}/>
    <StarRating size={24} maxRating={10} color={'red'} defaultRating={5}/> */}

  </StrictMode>,
)
