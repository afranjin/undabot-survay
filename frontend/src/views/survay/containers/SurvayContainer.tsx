import React, { useEffect, useState } from 'react'
import { SurvayApi } from '../../../api/survayApi'
import { ISurvay } from '../../../types/survay'


const SurvayContainer = (): JSX.Element => {
    const [survay, setSurvay] = useState<ISurvay>({} as ISurvay)
    useEffect(() => {
        SurvayApi.getSurvay().then((response) => {
            if (response) {
                setSurvay(response)
            }
        })
    }, [setSurvay])

    return (
        <React.Fragment>
            <div className='container'>
                <div className="column is-half is-offset-one-quarter">
                    <div className='box'>
                        <div className='block title is-4 has-text-centered has-text-weight-semibold'>
                            {survay.film_festival}
                        </div>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SurvayContainer