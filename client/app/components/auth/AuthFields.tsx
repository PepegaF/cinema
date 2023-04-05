import React, { FC } from 'react'
import styles from './Field.module.scss'
import { UseFormRegister, FormState } from 'react-hook-form';
import Field from 'components/ui/form-elements/Field';
import { validEmail } from 'shared/regex';

interface IAuthFields {
  register: UseFormRegister<any>,
  formState: FormState<any>,
  isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({ register, formState: { errors }, isPasswordRequired = false }) => {
  return (
    <>
      <Field {...register('email', {
        required: 'Email is required',
        pattern: {
          value: validEmail,
          message: 'Please enter a valid email addres'
        }
      })} placeholder={'E-mail'} error={errors.email} />

      <Field {...register('password', isPasswordRequired
        ? {
          required: 'password is required',
          minLength: {
            value: 6,
            message: 'Min length should be more 6 symbols'
          }
        }
        : {}
      )} placeholder={'password'} type='password' error={errors.password} />
    </>
  )
}

export default AuthFields