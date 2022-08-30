import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router';
import SurvayRoutes from './SurvayRoutes';



const MainComponent = (): JSX.Element => {
  const _location = useLocation()
  const _navigate = useNavigate()

  useEffect(() => {
    if (_location.pathname === '/') {
      _navigate('/survay')
    }
  }, [_location, _navigate])


  return (
    <section className="hero is-fullheight has-background-white-ter">
      <div className="hero-body has-text-centered">
        <SurvayRoutes/>
      </div>
    </section>

  )
}

export default MainComponent