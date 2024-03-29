'use strict'

import * as yup from 'yup'

const email = yup.string().email().trim().lowercase()

const signupSchema = yup.object().shape({
  name: yup.string().trim().required(),
  email: email.required(),
  password: yup.string().required()
})

const signinSchema = yup.object().shape({
  email: email.required(),
  password: yup.string().required()
})

export {
  signupSchema,
  signinSchema
}