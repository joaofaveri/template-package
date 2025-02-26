import { User } from './types'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function greetings({ firstname, lastname, age }: User) {
  console.log('Hello!')
  console.log(`Your first name is ${firstname}`)
  if (lastname) {
    console.log(`Your last name is ${lastname}`)
  }
  if (age) {
    console.log(`Your age is ${age}`)
  }
}
