import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SurvayContainer from '../views/survay/containers/SurvayContainer'


const SurvayRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/survay' element={<SurvayContainer/>} />
    </Routes>
  )
}

export default SurvayRoutes