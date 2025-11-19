'use client'

import { useState } from 'react'
import { trackAssessmentStart, trackAssessmentComplete } from './FacebookPixel'

interface AssessmentToolProps {
  onBookingClick?: () => void
  onAssessmentComplete?: (data: any) => void
}

export default function AssessmentTool({ onBookingClick, onAssessmentComplete }: AssessmentToolProps) {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<any>({})

  const questions = [
    {
      id: 1,
      question: "What is your primary skin concern?",
      options: [
        { value: 'wrinkles', label: 'Fine lines & wrinkles', icon: '🔍' },
        { value: 'scars', label: 'Acne scars', icon: '✨' },
        { value: 'pigmentation', label: 'Pigmentation & sun damage', icon: '☀️' },
        { value: 'stretch-marks', label: 'Stretch marks', icon: '🌟' }
      ]
    },
    {
      id: 2,
      question: "How would you describe your skin type?",
      options: [
        { value: 'normal', label: 'Normal', icon: '😊' },
        { value: 'dry', label: 'Dry', icon: '🏜️' },
        { value: 'oily', label: 'Oily', icon: '💧' },
        { value: 'combination', label: 'Combination', icon: '🔄' }
      ]
    },
    {
      id: 3,
      question: "What is your age range?",
      options: [
        { value: '20-30', label: '20-30', icon: '🌱' },
        { value: '31-40', label: '31-40', icon: '🌿' },
        { value: '41-50', label: '41-50', icon: '🌳' },
        { value: '50+', label: '50+', icon: '🌲' }
      ]
    }
  ]

  const currentQuestion = step <= questions.length ? questions[step - 1] : null

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [step]: value }
    setAnswers(newAnswers)

    // Track first question as assessment start
    if (step === 1) {
      trackAssessmentStart()
    }

    if (step < questions.length) {
      setStep(step + 1)
    } else {
      // Show results and emit assessment completion
      setStep(step + 1) // Move to results view
      const recommendation = getRecommendation(newAnswers)

      // Track assessment completion
      trackAssessmentComplete(recommendation.treatment)

      onAssessmentComplete?.({
        answers: newAnswers,
        recommendation,
        completedAt: new Date().toISOString()
      })
    }
  }

  const getRecommendation = (assessmentAnswers: any = answers) => {
    // Recommend based on severity and concerns - prioritize PRP for free deal for serious concerns
    if (assessmentAnswers[1] === 'scars' ||
        (assessmentAnswers[1] === 'wrinkles' && assessmentAnswers[3] === '50+') ||
        (assessmentAnswers[1] === 'pigmentation' && assessmentAnswers[3] !== '20-30')) {
      return {
        treatment: 'PRP For Free Deal',
        price: '£700',
        description: 'Best value - 2 sessions for £350 each + FREE PRP enhancement. Save £300 total!'
      }
    } else if (assessmentAnswers[1] === 'stretch-marks') {
      return {
        treatment: 'PRP For Free Deal',
        price: '£700',
        description: 'Recommended for stretch marks - 2 sessions with FREE PRP for optimal results'
      }
    } else if (assessmentAnswers[1] === 'pigmentation' || assessmentAnswers[1] === 'wrinkles') {
      return {
        treatment: 'Single + PRP',
        price: '£500',
        description: 'Single session with PRP enhancement for faster healing and better results'
      }
    } else {
      return {
        treatment: 'Single Session',
        price: '£450',
        description: 'Individual CO2 laser treatment for targeted skin improvement'
      }
    }
  }

  return (
    <section id="assessment" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full mb-3">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-primary-700 font-medium text-xs sm:text-sm">AI-Powered Assessment</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Find Your Perfect
            <span className="gradient-text"> Treatment</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
            Answer 3 quick questions for personalized recommendations
          </p>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-premium p-6 sm:p-8 md:p-12">
          {step <= questions.length && currentQuestion ? (
            <>
              {/* Progress Bar */}
              <div className="mb-6 sm:mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-neutral-600">Step {step} of {questions.length}</span>
                  <span className="text-xs sm:text-sm text-neutral-600">{Math.round((step / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                  <div 
                    className="bg-gradient-to-r from-primary-400 to-primary-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(step / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{currentQuestion?.question}</h3>
              </div>

              {/* Options - Mobile Optimized */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {currentQuestion?.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="group relative bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary-500 hover:shadow-lg transition-all duration-300 hover:scale-105 flex sm:flex-col items-center sm:items-center text-left sm:text-center"
                  >
                    <div className="text-3xl sm:text-4xl mr-4 sm:mr-0 sm:mb-3">{option.icon}</div>
                    <p className="font-medium text-sm sm:text-base text-neutral-700 group-hover:text-primary-600">
                      {option.label}
                    </p>
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* Results */
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl">✨</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Your Recommendation</h3>
              
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-4 sm:mb-6">
                <h4 className="text-lg sm:text-xl font-bold text-primary-600 mb-2">
                  {getRecommendation().treatment}
                </h4>
                <p className="text-2xl sm:text-3xl font-bold gradient-text mb-2 sm:mb-3">
                  {getRecommendation().price}
                </p>
                <p className="text-sm sm:text-base text-neutral-600">
                  {getRecommendation().description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                <button
                  onClick={onBookingClick}
                  type="button"
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 sm:py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Book Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button
                  onClick={() => {setStep(1); setAnswers({})}}
                  className="w-full inline-flex items-center justify-center text-primary-600 text-sm font-medium hover:text-primary-700 transition-all duration-300"
                >
                  ← Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}