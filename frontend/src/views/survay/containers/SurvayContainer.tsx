import React, { useEffect } from 'react'
import { Block, Box, Columns } from 'react-bulma-components'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import { RootState } from '../../../store/rootState'
import { ISurvay, ISurvayAnswer } from '../../../types/survay'
import * as SurvayActions from '../actions/survayActions'
import SurvayFormComponent from '../componets/SurvayFormComponent'

interface StateProps {
    survay: ISurvay
}
  
interface DispatchProps {
    getSurvay: () => Promise<ISurvay>
    createSurvayAnswer: (survayId: string | number, answer: ISurvayAnswer) => Promise<ISurvayAnswer>
}
  
type Props = StateProps & DispatchProps

const SurvayContainer = (props: Props): JSX.Element => {
    const {survay, getSurvay, createSurvayAnswer} = props
    const _navigate = useNavigate()

    useEffect(() => {
        getSurvay()
    }, [getSurvay])

    const handleCreateSurvayAnswer = (answer: ISurvayAnswer): void => {
        const _ansvers = {...answer, survay: survay}
        createSurvayAnswer(survay.id, _ansvers).then(() => {
            _navigate('/answers')
        })
    }

    return (
        <React.Fragment>
            {survay && survay.questions ? 
                <Columns.Column className='is-full'>
                    <Block className='title is-1 has-text-centered has-text-weight-semibold'>
                        {survay.film_festival}
                    </Block>
                    <Block className='subtitle is-3 has-text-weight-light has-text-centered padding-top pt-4'>
                        {survay.desscription_thanks}
                    </Block>
                    <Block className='subtitle is-3 has-text-weight-light has-text-centered'>
                        {survay.desscription_record}
                    </Block>
                    <Columns.Column className="is-three-fifths is-offset-one-fifth">
                        <Box>
                            <SurvayFormComponent survay={survay} createSurvayAnswer={handleCreateSurvayAnswer}/>
                        </Box>
                    </Columns.Column>
                </Columns.Column>
                : null}
            </React.Fragment>
    )
}

const mapStateToProps = (state: RootState): StateProps => {
    return {
      survay: state.survayState.survay
    }
}
  
const mapDispatchToProps = (
dispatch: SurvayActions.SurvayThunkDispatchType): DispatchProps => {
    return {
        getSurvay: () => dispatch(SurvayActions.getSurvay()),
        createSurvayAnswer: (survayId, answer) => dispatch(SurvayActions.createSurvayAnswer(survayId, answer))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SurvayContainer)

