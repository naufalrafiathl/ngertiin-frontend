import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Field, Form } from 'formik'
import { login } from '../redux/modules/auth/thunks'
import './css/Login.css'


const Login = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <div className="container-login">

            </div>
            <div className="form-login">
                <h1>Login</h1>
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    onSubmit={(values) => {
                        const {username, password} = values
                        dispatch(login(username, password))
                    }}
                    // validate={values => {
                    //     const errors = {}
                    //     const { email, password } = values
                    //     // Handle empty fields
                    //     if (!(email && password)) {
                    //     errors.message = 'Semua bagian harus terisi'
                    //     }
                    //     return errors
                    // }}
                    >
                    {
                        <Form>
                            <Login.Input name="username" type="text" label="Username" />
                            <Login.Input name="password" type="password" label="Password"/>
                            <button type="submit">Login</button>
                        </Form>
                    }
                </Formik>
            </div>
        </div>
    )
}

Login.Input = ({label, type, name}) => (
    <>
        <label>{label}</label><br/>
        <Field type={type} name={name}/><br/>
    </>
)

export default Login
