import React, { useEffect, useState } from 'react'
import { SurvayApi } from '../../../api/survayApi'
import { ISurvay } from '../../../types/survay'
import SurvayFormComponent from '../componets/SurvayFormComponent'


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
            {survay && survay.questions ? 
                <div className='container'>
                    <div className="column is-half is-offset-one-quarter">
                        <div className='box'>
                            <div className='block title is-4 has-text-centered has-text-weight-semibold'>
                                {survay.film_festival}
                            </div>
                            <p className='block subtitle is-6 has-text-weight-light has-text-centered padding-top pt-6'>
                                {survay.desscription_thanks}
                            </p>
                            <p className='subtitle is-6 has-text-weight-light has-text-centered'>
                                {survay.desscription_record}
                            </p>
                            <SurvayFormComponent survay={survay}/>
                        </div>
                    </div>
                </div> : null}
        </React.Fragment>
    )
}

export default SurvayContainer