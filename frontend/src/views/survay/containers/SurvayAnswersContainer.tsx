import React, { useEffect } from 'react'
import { Box, Columns, Container } from 'react-bulma-components'
import { connect } from 'react-redux'
import { RootState } from '../../../store/rootState'
import { ISurvayAnswer } from '../../../types/survay'
import * as SurvayActions from '../actions/survayActions'

interface StateProps {
    survayAnswers: ISurvayAnswer[]
  }
  
  interface DispatchProps {
    getSurvayAnswers: () => Promise<ISurvayAnswer[]>
  }
  
type Props = StateProps & DispatchProps


const SurvayAnswersContainer = (props: Props): JSX.Element => {
    const {survayAnswers, getSurvayAnswers} = props

    useEffect(() => {
        getSurvayAnswers()
    }, [getSurvayAnswers])

    return (
        <React.Fragment>
                <Container>
                    <Columns.Column className="is-half is-offset-one-quarter">
                        <Box>

                        </Box>
                    </Columns.Column>
                </Container>
        </React.Fragment>
    )
}

const mapStateToProps = (state: RootState): StateProps => {
    return {
      survayAnswers: state.survayState.survayAnswers
    }
}
  
const mapDispatchToProps = (
dispatch: SurvayActions.SurvayThunkDispatchType): DispatchProps => {
    return {
        getSurvayAnswers: () => dispatch(SurvayActions.getSurvayAnswers())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SurvayAnswersContainer)