import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import 'daisyui/dist/full.css';

const formConfig = [
  {
    id: 1,
    type: 'text',
    question: 'What is your full name?',
    tip: 'Please provide your legal name as it appears on official documents.',
  },
  {
    id: 2,
    type: 'email',
    question: 'What is your preferred email address?',
    tip: 'Make sure to enter an email address you check frequently.',
  },
  {
    id: 3,
    type: 'select',
    question: 'What is your favorite color among the following options?',
    options: ['Red', 'Blue', 'Green', 'Yellow'],
    tip: 'Choose the color you like the most from the given options.',
  },
  {
    id: 4,
    type: 'multiple',
    question: 'Select your preferred programming languages (you can choose multiple):',
    options: ['JavaScript', 'Python', 'Go', 'Java'],
    tip: 'You can select more than one language if you have multiple preferences.',
  },
  {
    id: 5,
    type: 'review',
    question: 'Review your answers:',
  },
];

const AnimatedForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [currentAnswer, setCurrentAnswer] = useState('');

  const handleNext = () => {
    if (formConfig[currentQuestion].type !== 'review') {
      setAnswers({ ...answers, [currentQuestion]: currentAnswer });
      setCurrentAnswer('');
    }
    setCurrentQuestion((prev) => Math.min(prev + 1, formConfig.length - 1));
  };

  const handlePrev = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
    setCurrentAnswer(answers[currentQuestion - 1] || '');
  };

  const handleFinalSubmit = () => {
    console.log('Form submitted:', answers);
    // Add your form submission logic here
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (currentQuestion < formConfig.length - 1) {
        handleNext();
      } else if (formConfig[currentQuestion].type === 'review') {
        handleFinalSubmit();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentQuestion, currentAnswer]);

  const renderInput = () => {
    const question = formConfig[currentQuestion];
    switch (question.type) {
      case 'text':
      case 'email':
        return (
          <input
            type={question.type}
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
            className="w-full p-3 mt-2 text-lg input input-bordered input-primary"
            placeholder={`Enter your ${question.type}`}
          />
        );
      case 'select':
        return (
          <select
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
            className="w-full p-3 mt-2 text-lg select select-bordered select-primary"
          >
            <option value="">Select an option</option>
            {question.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'multiple':
        return (
          <div className="flex flex-col gap-2">
            {question.options.map((option) => (
              <label key={option} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={currentAnswer.includes(option)}
                  value={option}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setCurrentAnswer((prev) =>
                      checked ? [...prev, option] : prev.filter((opt) => opt !== option)
                    );
                  }}
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">{option}</span>
              </label>
            ))}
          </div>
        );
      case 'review':
        return (
          <div className="flex flex-col gap-4">
            {Object.entries(answers).map(([key, value], index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg">
                <h3 className="font-semibold">{formConfig[key].question}</h3>
                <p>{Array.isArray(value) ? value.join(', ') : value}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    if (currentQuestion in answers) {
      setCurrentAnswer(answers[currentQuestion]);
    } else {
      setCurrentAnswer('');
    }
  }, [currentQuestion]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-2xl">
        <div className="mb-8">
          <div className="w-full h-2 bg-purple-200 rounded-full">
            <div 
              className="h-2 bg-purple-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentQuestion + 1) / formConfig.length) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-lg shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col justify-between w-full"
              >
                <div>
                  <h2 className="mb-4 text-3xl font-bold text-purple-700">
                    {formConfig[currentQuestion].question}
                  </h2>
                  {formConfig[currentQuestion].tip && (
                    <p className="mb-4 text-sm text-gray-600">
                      {formConfig[currentQuestion].tip}
                    </p>
                  )}
                  {renderInput()}
                </div>
                <div className="flex justify-between mt-8">
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestion === 0}
                    className="px-6 py-3 text-purple-600 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  {currentQuestion < formConfig.length - 1 ? (
                    <button
                      onClick={handleNext}
                      disabled={!currentAnswer && formConfig[currentQuestion].type !== 'review'}
                      className="px-6 py-3 text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  ) : (
                    formConfig[currentQuestion].type === 'review' && (
                      <button
                        onClick={handleFinalSubmit}
                        className="px-6 py-3 text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors"
                      >
                        Submit
                      </button>
                    )
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedForm;
