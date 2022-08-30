import { ISurvay } from './../../../types/survay'
import { combineReducers } from 'redux'
import {survay} from './survay'


export interface SurvayState {
  survay: ISurvay;
}

const survayApp = combineReducers<SurvayState>({
    survay,
})

export default survayApp