import { BMI, BMIClassification, Measurements } from './types'

export default function calculate({ height, weight }: Measurements): BMI {
  // Input validation
  if (weight <= 0 || height <= 0) {
    throw new Error('Weight and height must be positive values')
  }
  // BMI calculation: weight (kg) / height² (m²)
  const bmi = weight / (height * height)
  // BMI classification into 7 levels
  let bmiClassification: BMIClassification
  if (bmi < 18.5) {
    bmiClassification = 'Underweight'
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiClassification = 'Normal'
  } else if (bmi >= 25 && bmi < 30) {
    bmiClassification = 'Overweight'
  } else if (bmi >= 30 && bmi < 35) {
    bmiClassification = 'Obesity, class I'
  } else if (bmi >= 35 && bmi < 40) {
    bmiClassification = 'Obesity, class II'
  } else {
    bmiClassification = 'Obesity, class III'
  }
  return {
    value: bmi,
    classification: bmiClassification
  }
}
