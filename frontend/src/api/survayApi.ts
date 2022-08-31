import { ISurvay, ISurvayAnswer } from '../types/survay'
import { HttpClient } from './service'
import Urls from './urls'

export const SurvayApi = {
  getSurvay(queryParams?: Record<string, string>): Promise<ISurvay> {
    return HttpClient.get<ISurvay, Record<string, string>>(Urls.SurvayUrls.survay, queryParams)
  },

  createAnswersSurvay(survayId: number | string, answer: ISurvayAnswer): Promise<ISurvayAnswer> {
    return HttpClient.post<ISurvayAnswer, ISurvayAnswer>(`${Urls.SurvayUrls.survay}${survayId}/answers/`, answer)
  },

  getSurvayAnswers(survayId: string | number, queryParams?: Record<string, string>): Promise<ISurvayAnswer[]> {
    return HttpClient.get<ISurvayAnswer[], Record<string, string>>(`${Urls.SurvayUrls.survay}${survayId}/answers/`, queryParams)
  }
}
