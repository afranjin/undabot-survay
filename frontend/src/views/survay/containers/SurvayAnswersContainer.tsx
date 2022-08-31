import { Rating } from '@smastrom/react-rating'
import React, { useEffect } from 'react'
import { Block, Box, Button, Columns, Table } from 'react-bulma-components'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
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
    const _navigate = useNavigate()

    useEffect(() => {
        getSurvayAnswers()
    }, [getSurvayAnswers])

    const handleGoBack = () => {
        _navigate('/survay')
    }

    return (
        <React.Fragment>
                <Columns.Column className='is-full is-mobile'>
                    <Block className='title is-2 has-text-centered has-text-weight-semibold'>
                        Movie ratings
                    </Block>
                    <Columns.Column className="is-half is-offset-one-quarter">
                        <Box>
                            <Table.Container className='table-container'>
                                <Table className='is-bordered is-striped is-narrow is-hoverable is-fullwidth is-vcentered"'>
                                    <thead className='is-success'>
                                        <tr className='is-vcentered'>
                                            <th className='title is-size-4 has-text-centered has-text-black-ter'>Movie</th> 
                                            <th className='title is-size-4 has-text-centered has-text-black-ter'>Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {survayAnswers.map((v, i) => {
                                            return (
                                                <tr className={`${i === 0 ? "is-selected" : ""}`} key={i}>
                                                    <td style={{verticalAlign: 'middle'}}>{v.answerMovie}</td> 
                                                    <td className='is-justify-content-center'>
                                                    <div style={{ maxWidth: 'fit-content', width: '100%' }}>
                                                        <Rating readOnly value={v.answerRate}/>
                                                    </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </Table.Container>
                            <div className='buttons is-justify-content-center '>
                                <Button className='is-primary mt-4' onClick={handleGoBack}>Go back to Survay</Button>
                            </div>
                        </Box>
                    </Columns.Column>
                </Columns.Column>
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