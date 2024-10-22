'use client'
import DrawLogo from '@/app/components/drawLogo'
import { IAuthForm } from '@/app/types/auth.types'
import { Button } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { authService } from '../../service/auth.service'
import styles from '../../styles/AuthPage.module.scss'

const Auth: React.FC = () => {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})
	const { replace } = useRouter()

	const goTo = () => {
		replace('/auth/register')
	}

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main('login', data),
		onSuccess() {
			toast.success('Successfully login!')
			reset()
			replace('/home')
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}
	return( 
		<> 
		<DrawLogo />
	<div className={styles.login}>
		<form 
		onSubmit={handleSubmit(onSubmit)}
		className={styles.form}
		> 
		<div className={styles.inputs}>
		<div className={styles.input__item}>
		<h1>Почта</h1>
		<input type="email" 
		{...register('email', {
			required: 'Email is required!'
		})}
		className={styles.input} />
		</div>
		<div className={styles.input__item}> 
		<h1>Пароль</h1>
		<input type="password"
		{...register('password', {
						required: 'Password is required!'
					})}
		className={styles.input} />
		</div>
		</div>
		<div className={styles.login__button}> 
		<Button variant="contained" type="submit" fullWidth color="success">
			Войти
		</Button>
		<Button variant="contained" onClick={() => goTo()} fullWidth color="info">
			Создать аккаунт
		</Button>
		</div>
		</form>
	</div>
	</>
	)
}
export default Auth;