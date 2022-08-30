import React, { useEffect } from 'react'
import { Block, Box, Columns, Container } from 'react-bulma-components'
import { connect } from 'react-redux'
import { RootState } from '../../../store/rootState'
import { ISurvay } from '../../../types/survay'
import * as SurvayActions from '../actions/survayActions'
import SurvayFormComponent from '../componets/SurvayFormComponent'

interface StateProps {
    survay: ISurvay
  }
  
  interface DispatchProps {
    getSurvay: () => Promise<ISurvay>
  }
  
  type Props = StateProps & DispatchProps


const SurvayContainer = (props: Props): JSX.Element => {
    const {survay, getSurvay} = props

    //const [survay, setSurvay] = useState<ISurvay>({} as ISurvay)

    useEffect(() => {
        getSurvay()
    }, [getSurvay])

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

const mapStateToProps = (state: RootState): StateProps => {
    return {
      survay: state.survayState.survay
    }
}
  
const mapDispatchToProps = (
dispatch: SurvayActions.SurvayThunkDispatchType): DispatchProps => {
    return {
        getSurvay: () => dispatch(SurvayActions.getSurvay()),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SurvayContainer)

