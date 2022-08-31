import React, { useEffect } from 'react'
import { Columns, Hero } from 'react-bulma-components'
import { useNavigate, useLocation } from 'react-router'
import SurvayRoutes from './SurvayRoutes'


const MainComponent = (): JSX.Element => {
  const _location = useLocation()
  const _navigate = useNavigate()

  useEffect(() => {
    if (_location.pathname === '/') {
      _navigate('/survay')
    }
  }, [_location, _navigate])

  return (
    <Columns.Column className='p-0 is-mobile'>
      <Hero className='is-success is-fullheight'>
          <Hero.Body className='has-text-centered'>
            <SurvayRoutes/>
          </Hero.Body>
      </Hero>
    </Columns.Column>
  )
}

export default MainComponent