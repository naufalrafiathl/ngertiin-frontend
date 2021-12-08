import { Field, Formik, Form } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { register } from '../redux/modules/auth/thunks';

const Style = styled.div`
.form-login {
    width: 350px;
    height: 475px;
    margin: auto;
    padding
}
.radio {
    align-items: center;
    label {
        color: white;
        margin-bottom: 0;
        margin-right: .7rem;
        input {
            margin: 0;
            padding-left: 0.5rem;
            height: inherit;
            width: inherit;
            border: none;
            border-radius: 10px;
        }
    }
}
`

function Register() {
    const dispatch = useDispatch()
    return (
        <Style>
            <div className="container-login">
            </div>
            <div className="form-login">
                <h1>Register</h1>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                        email: '',
                        jurusan: ''
                    }}
                    onSubmit={(values) => {
                        const {username, password, email, jurusan} = values
                        dispatch(register(username, password, email, jurusan))
                    }}
                    >
                    {
                        <Form>
                            <Register.Input name="username" type="text" label="Username" />
                            <Register.Input name="password" type="password" label="Password"/>
                            <Register.Input name="email" type="email" label="Email"/>
                            <Register.Radio 
                              label="Jurusan"
                              name="jurusan"
                              option={[
                                  {'label': 'SAINTEK', 'value': '1'},
                                  {'label': 'SOSHUM', 'value': '2'},
                                ]}
                            
                            />
                            <button type="submit">Register</button>
                        </Form>
                    }
                </Formik>
            </div>
        </Style>
    )
}

Register.Input = ({label, type, name}) => (
    <>
        <label>{label}</label><br/>
        <Field type={type} name={name}/><br/>
    </>
)

Register.Radio = ({label, option, name}) => (
    <>
        <label>{label}</label><br/>
        <div role="group" className="radio" name={name} aria-labelledby="my-radio-group">
            {option ? option.map((item, key) => (
                <label class="radio-inline">
                    <Field 
                      type="radio" 
                      key={key}
                      name={name} 
                      value={item.value} 
                    /> {item.label}
                </label>
            )) : ""}
        </div>
    </>
)
export default Register
