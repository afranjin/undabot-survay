import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SurvayContainer from '../views/survay/containers/SurvayContainer'
import SurvayAnswersContainer from './survay/containers/SurvayAnswersContainer'


const SurvayRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/survay' element={<SurvayContainer/>} />
      <Route path='/answers' element={<SurvayAnswersContainer/>} />
    </Routes>
  )
}

export default SurvayRoutes