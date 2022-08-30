import React, { useEffect, useState } from 'react'
import { Block, Box, Columns, Container } from 'react-bulma-components'
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
                <Container>
                    <Columns.Column className="is-half is-offset-one-quarter">
                        <Box>
                            <Block className='title is-4 has-text-centered has-text-weight-semibold'>
                                {survay.film_festival}
                            </Block>
                            <Block className='subtitle is-6 has-text-weight-light has-text-centered padding-top pt-4'>
                                {survay.desscription_thanks}
                            </Block>
                            <Block className='subtitle is-6 has-text-weight-light has-text-centered'>
                                {survay.desscription_record}
                            </Block>
                            <SurvayFormComponent survay={survay}/>
                        </Box>
                    </Columns.Column>
                </Container> : null}
        </React.Fragment>
    )
}

export default SurvayContainer