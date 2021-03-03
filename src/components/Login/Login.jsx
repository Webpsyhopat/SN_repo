import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import s from './Login.module.css';
import { LoginTC } from './../../redux/userDataReducer';
import { Redirect } from 'react-router-dom';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    email: yup.string().required('Обязательное поле').email('Неверный формат email'),
    password: yup.string().required('Обязательное поле')
})

const LoginForm = (props) => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false,
                captcha: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                props.onSubmit(values);
                actions.setSubmitting(false);
                actions.resetForm({
                    values: {
                        email: '',
                        password: '',
                        rememberMe: false,
                        captcha: ''
                    }
                });
            }}>
            {({
                values,
                errors,
                touched,
                handleSubmit,
                isSubmitting,
            }) => (
                <Form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            type='text' name="email" placeholder='Login'
                            className={s.input} value={values.email}
                        />
                        {errors.email && touched.email && <div>{errors.email}</div>}
                    </div>
                    <div>
                        <Field
                            type='password' name="password" placeholder='password'
                            className={s.input} value={values.password}
                        />
                        {(errors.password && touched.password) ? <div>{errors.password}</div> : ''}
                    </div>
                    <div>
                        <Field
                            type='checkbox' name="rememberMe" className={s.checkbox} checked={values.rememberMe}
                        />
                    </div>
                    {props.authError.captchaURL 
                    && <><div>
                        <img src={props.authError.captchaURL } alt = 'captcha' />
                    </div>
                    <div>
                        <Field
                            type='input' name="captcha" placeholder='Введите символы'
                            className={s.input} value={values.captcha}
                        />
                        </div></>}
                    {props.authError.authErrorMessage ? <div>{props.authError.authErrorMessage}</div> : null}
                    <button type="submit" disabled={isSubmitting || errors.email || errors.password}>
                        Login
                    </button>
                </Form>
            )}
        </Formik>
    )
}

const Login = (props) => {


    let onSubmit = (values) => {
        props.LoginTC(values.email, values.password, values.rememberMe, values.captcha);
    }
    if (props.isAuthorised) {
        return <Redirect to={'/profile'} />
    }
    return (

        <div>
            <h1>Авторизация</h1>
            <LoginForm  {...props} onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthorised: state.userData.userData.isAuthorised,
        authError: state.userData.authError
    }
}

const mapDispatchToProps = { LoginTC }

export default connect(mapStateToProps, mapDispatchToProps)(Login);

