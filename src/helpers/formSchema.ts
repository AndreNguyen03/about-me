import * as yup from 'yup'

const formSchema = yup
	.object({
		customer: yup.string().required(),
		email: yup.string().email().required(),
		subject: yup.string().required(),
		message: yup.string().required()
	})
	.required()

export { formSchema }
