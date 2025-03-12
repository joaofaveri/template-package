export type Measurements = {
  height: number
  weight: number
  age?: number
  sex?: 'M' | 'F'
}

export type BMI = {
  value: number
  classification: BMIClassification
}

export type BMIClassification =
  | 'Underweight'
  | 'Normal'
  | 'Overweight'
  | 'Obesity, class I'
  | 'Obesity, class II'
  | 'Obesity, class III'
