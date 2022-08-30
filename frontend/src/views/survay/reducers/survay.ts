import { ISurvay } from "../../../types/survay";
import * as constants from '../actions/constants'
import { SurvayActions } from "../actions/survayActions";


const initialSurvay: ISurvay = {
    id: '',
    film_festival: '',
    title: '',
    desscription_thanks: '',
    desscription_record: '',
    questions: []
  }

export const survay = (state: ISurvay = initialSurvay, action: SurvayActions): ISurvay => {
    switch(action.type) {
      case constants.GET_SURVAY_SUCCESS:
        return action.survay;
  
      default:
        return state;
    }
  }