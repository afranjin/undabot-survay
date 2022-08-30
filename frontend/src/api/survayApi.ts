import { ISurvay, ISurvayAnswer } from '../types/survay'
import { HttpClient } from './service'
import Urls from './urls'

export const SurvayApi = {
  getSurvay(queryParams?: Record<string, string>): Promise<ISurvay> {
    return HttpClient.get<ISurvay, Record<string, string>>(Urls.SurvayUrls.survay, queryParams)
  },

  createAnswersSurvay(answer: ISurvayAnswer): Promise<ISurvayAnswer> {
    return HttpClient.post<ISurvayAnswer, ISurvayAnswer>(`${Urls.SurvayUrls.survay}${answer.survay.id}/answers/`, answer)
  }
}
