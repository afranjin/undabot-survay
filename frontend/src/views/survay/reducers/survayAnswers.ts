import { ISurvayAnswer } from "../../../types/survay";
import * as constants from '../actions/constants'
import { SurvayActions } from "../actions/survayActions";


export const survayAnswers = (state: ISurvayAnswer[] = [], action: SurvayActions): ISurvayAnswer[] => {
    switch(action.type) {
        case constants.CREATE_SURVAY_ANSWER_SUCCESS:
            return [action.survayAnswer, ...state]

        case constants.GET_SURVAY_ANSWERS_SUCCESS:
            return action.survayAnswers
    
        default:
            return state;
        }
  }