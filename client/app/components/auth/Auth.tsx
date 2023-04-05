import React, { FC, useState } from 'react';
import { useAuthRedirect } from './useAuthRedirect';
import { useAuth } from 'hooks/useAuth';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IAuthInput } from './auth.interface';
import Meta from './../../utils/meta/Meta';
import Heading from 'components/heading/Heading';
import Button from './../ui/form-elements/Button';
import styles from './auth.module.scss'
import AuthFields from './AuthFields';
import { useAppDispatch } from 'hooks/storeHooks';
import { login, register } from 'store/user/userActions';

const Auth: FC = () => {
  const dispath = useAppDispatch()

  useAuthRedirect()
  const { isLoading } = useAuth()
  const [type, setType] = useState<'login' | 'register'>('login')

  const { register: registerInput, handleSubmit, formState, reset } = useForm<IAuthInput>({
    mode: 'onChange'
  })


  const onSubmit: SubmitHandler<IAuthInput> = (data) => {
    const { email, password } = data
    if (type === 'login') dispath(login({ email, password }))
    else if (type === 'register') dispath(register({ email, password }))

    reset()
  }
  return (
    <Meta title='Auth'>
      <section className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading title='Auth' className='mb-6' />

          <AuthFields formState={formState} register={registerInput} isPasswordRequired />

          <div className={styles.buttons}>
            <Button type='submit' onClick={() => setType('login')} disabled={isLoading}>Login</Button>
            <Button type='submit' onClick={() => setType('register')} disabled={isLoading}>Register</Button>
          </div>
        </form>
      </section>
    </Meta>
  )
}

export default Auth