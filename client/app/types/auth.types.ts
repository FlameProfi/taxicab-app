export interface IAuthForm {
	email: string
	password: string
}

export interface IUser {
	id: number
	login?: string
	email: string
	sex: string
	number: string
	dateOfBirth: string
}

export interface IAuthResponse {
	accessToken: string
	user: IUser
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
