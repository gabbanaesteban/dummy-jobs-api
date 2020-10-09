'use strict'

import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import { validateParams } from '../utils/helpers'
import { signupSchema , signinSchema} from '../schemas/auth.schemas'
import * as authService from '../services/auth.service'

const signup = asyncHandler( async (req: Request, res: Response) => {
  const params = req.body
  const validatedParams = await validateParams(params, signupSchema)
  const response = await authService.signup(validatedParams)
  res.status(201).send(response)
})

const signin = asyncHandler( async (req: Request, res: Response) => {
  const params = req.body
  const validatedParams = await validateParams(params, signinSchema)
  const response = await authService.signin(validatedParams)
  res.status(200).send(response)
})

export {
  signup,
  signin
}