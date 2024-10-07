import React, { useState } from 'react'
import './Question.css'
import DynamicQuestion from './DynamicQuestion'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { set } from 'date-fns'

function Question () {
  let { category, amount, difficulty } = useParams()
  const [questionNumber, setQuestionNumber] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState()

  const handleNextQuestion = () => {
    if (questionNumber === results.length - 1) {
      console.log('no more questions')
      return
    }

    setQuestionNumber(questionNumber + 1)
    setCurrentQuestion(results[questionNumber])
    console.log('next question')
  }

  const hitAPI = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
      )
      setResults(response.data.results)
      setCurrentQuestion(response.data.results[questionNumber])
      console.log(response.data.results[questionNumber])
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <p className='text-white'>{currentQuestion.question || 'Loading...'}</p>
      <p className='text-white'>
        {currentQuestion.incorrect_answers
          ? currentQuestion.incorrect_answers[0]
          : 'Loading...'}
      </p>
      <p className='text-white'>
        {currentQuestion.incorrect_answers
          ? currentQuestion.incorrect_answers[1]
          : 'Loading...'}
      </p>
      <p className='text-white'>
        {currentQuestion.incorrect_answers
          ? currentQuestion.incorrect_answers[2]
          : 'Loading...'}
      </p>
      <p className='text-white'>
        {currentQuestion.correct_answer
          ? currentQuestion.incorrect_answers[0]
          : 'Loading...'}
      </p>
      <button
        onClick={() => {
          console.log(currentQuestion)
        }}
      >
        Click me to find Current question
      </button>
      <button
        className='mt-20'
        onClick={() => {
          hitAPI()
        }}
      >
        {' '}
        CLIKC ME
      </button>
      <button
        onClick={() => {
          handleNextQuestion()
        }}
      >
        Next Question
      </button>
    </>
  )
}

export default Question
