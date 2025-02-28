import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface StepProgressProps {
  steps: string[];
  currentStep: number;
}

const StepProgress: React.FC<StepProgressProps> = ({ steps, currentStep }) => {
  return (
    <div className="w-full py-6">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step Circle */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className={`flex items-center justify-center w-10 h-10 rounded-full ${
                index < currentStep
                  ? 'bg-primary-600 text-white'
                  : index === currentStep
                  ? 'bg-primary-100 dark:bg-primary-900 border-2 border-primary-600 text-primary-600 dark:text-primary-400'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
              }`}
            >
              {index < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                <span className="text-sm font-medium">{index + 1}</span>
              )}
            </motion.div>

            {/* Step Label */}
            <div className="hidden sm:block absolute mt-16" style={{ left: `calc(${(index / (steps.length - 1)) * 100}% - ${index === 0 ? '0' : index === steps.length - 1 ? '100%' : '50%'})` }}>
              <span
                className={`text-xs font-medium ${
                  index <= currentStep
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {step}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 mx-2">
                <div
                  className={`h-1 rounded-full ${
                    index < currentStep
                      ? 'bg-primary-600'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                ></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepProgress;