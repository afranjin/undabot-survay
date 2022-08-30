import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Block, Button, Form, Icon, Tag } from 'react-bulma-components';
import { ISurvay, ISurvayAnswer } from "../../../types/survay";
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { Rating } from '@smastrom/react-rating';


interface Props {
    survay: ISurvay
    createSurvayAnswer: (survayAnswer: ISurvayAnswer) => void
  }
  
const SurvayFormComponent = (props: Props): JSX.Element => {
    const {survay, createSurvayAnswer} = props
    const [answers, setAnswers] = useState<ISurvayAnswer>({id: '', survay: {...survay}, answerMovie: '', answerRate: 1})

    // Change depend of the key
    const inputChange = (event: React.ChangeEvent<HTMLInputElement> | number, key: string) => {
        setAnswers(prev => {
          return {
            ...prev,
            [key]: typeof(event) !== 'number' ? event.target.value : event
          }
        })
    }
    
    const saveAnswer = () => {
        createSurvayAnswer(answers)
    }

    const renderFormField = (): JSX.Element => {
        return (
            <div>
                {survay.questions.map((v, i) => {
                    if (v.name === 'film') {
                        return (
                            <Form.Field key={i} className='field'>
                                <Form.Label className='label'>{v.label}</Form.Label>
                                <Form.Control>
                                    <Form.Input required={true} type='text' placeholder='Enter Film Name' onChange={e => inputChange(e, 'answerMovie')}/>
                                    <Icon align='left' color='primary'>
                                        <FontAwesomeIcon icon={faFilm}/>
                                    </Icon>
                                </Form.Control>
                            </Form.Field>
                        )
                    }
                    return (
                        <Form.Field key={i}>
                            <Form.Label>{v.label}</Form.Label>
                            <Form.Control className='is-justify-content-center'>
                                <Tag.Group className='has-addons is-justify-content-center'>
                                    <Rating style={{ maxWidth: 200 }} value={answers.answerRate} onChange={(e) => inputChange(e, 'answerRate')}/>
                                </Tag.Group>
                            </Form.Control>
                        </Form.Field>
                    )
                })}
            </div>
        )
    }
    
    return (
        <Block>
            {renderFormField()}
            <Block >
                <Button disabled={answers.answerMovie.length === 0} className='is-primary mt-5' onClick={saveAnswer}>Rate Film</Button>
            </Block>
        </Block>
    )
}
  
export default SurvayFormComponent;