import { ISurvay, ISurvayAnswer } from '../../../types/survay'
import { combineReducers } from 'redux'
import {survay} from '../reducers/survay'
import {survayAnswers} from '../reducers/survayAnswers'


export interface SurvayState {
  survay: ISurvay;
  survayAnswers: ISurvayAnswer[]
}

const survayApp = combineReducers<SurvayState>({
    survay,
    survayAnswers
})

export default survayApp