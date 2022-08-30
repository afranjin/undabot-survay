import React, { useState } from 'react';
import { ISurvay, ISurvayAnswer } from "../../../types/survay";

interface Props {
    survay: ISurvay
  }
  
const SurvayFormComponent = (props: Props): JSX.Element => {
    const {survay} = props
    const [answers, setAnswers] = useState<ISurvayAnswer>({id: -1, survay: survay, answerMovie: '', answerRate: 2})

    const confirmRate = (): void => {
        console.log('sve')
    }

    const renderFormField = (): JSX.Element => {
        return (
            <form>
                {survay.questions.map((v, i) => {
                    if (v.name === 'film') {
                        return (
                            <div key={i} className='field'>
                                <label className='label'>{v.label}</label>
                                <div className='control'>
                                    <input className='input' type='text'/>
                                </div>
                            </div>
                        )
                    }
                    return (
                        <div key={i} className='field'>
                            <label className='label'>{v.label}</label>
                            <div className='control'>
                                <span className='tag is-info is-light'>{answers.answerRate}</span>
                                <input style={{width: '50%'}} className='slider is-success is-medium' step='1' min='1' max='5' type='range'/>
                            </div>
                        </div>
                    )
                })}
            </form>
        )
    }
    
    return (
        <div className='block'>
            {renderFormField()}
            <div className='block'>
                <button className='button is-primary'>Rate {answers.answerRate}</button>
            </div>
        </div>
    )
}
  
export default SurvayFormComponent;