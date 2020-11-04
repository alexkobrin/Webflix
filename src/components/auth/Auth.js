import React, { Component } from 'react';
import Header from '../header/header'
import './auth.scss'
import Input from '../input/input'
import './auth.scss';
import Button from '../button/button';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
//import { connect } from 'react-redux';
//import * as actions from '../../store/actions';


class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                label: 'Enter Your Email',
                elementConfig: {
                    type: "email",
                    placeholder: "Email...",
                },
                value: `${localStorage.getItem("email") ? localStorage.getItem("email") : ""}`,
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                label: 'Enter Your Password',
                elementConfig: {
                    type: "password",
                    placeholder: "Password..."
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            }

        },
        isSignUp: true,
        authRedirect: false
    }

    componentDidMount() {
        localStorage.removeItem('email')
    }

    checkValidity(value, rules) {

        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }
        return isValid;
    }

    inputChangeHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({ controls: updatedControls })

    }

    switchHandler = () => {
        this.setState(prevState => {
            return { isSignUp: !prevState.isSignUp }
        })

    }

    submitHandler = (event) => {
        event.preventDefault()
        const data = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value,
            returnSecureToken: true
        }

        let url = "";
        if (this.state.isSignUp) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBYoDNM_qxJEv7dHriDMJctfot8Nj6xFUs"

        } else {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBYoDNM_qxJEv7dHriDMJctfot8Nj6xFUs"
        }

        axios.post(url, data)
            .then(response => {
                localStorage.setItem('userId', response.data.localId)
                this.setState({ authRedirect: true })
            })
            .catch(error => {
                console.log(error)
            })

    }




    render() {
        let authRedirect = "";
        if (this.state.authRedirect) {
            authRedirect = <Redirect to="/origin" />
        }

        const formArray = []
        for (let key in this.state.controls) {
            formArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        const form = formArray.map(formElement => (
            <Input
                label={formElement.config.label}
                placeholder={formElement.config.elementConfig.placeholder}
                className='form-control'
                key={formElement.id}
                type={formElement.config.elementConfig.type}
                elementType={formElement.config.elementType}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangeHandler(event, formElement.id)}
            ></Input>
        ))
        return (
            <section className="auth">
                <Header />
                <div className="container-fluid">
                <div className="wrapper">
                    {authRedirect}
                    <form className="form-signin" onSubmit={this.submitHandler}>
                        <h2 className="form-signin-heading"> {this.state.isSignUp ? 'Join Webflix' : ' Sign In '}</h2>
                        {form}
                        <Button className='btn-submit'>Submit </Button>
                    </form>
                    <div className="have-account">
                        <p className="have-account__text">Have already account ?</p>
                        <Button className='btn-switch ' clicked={this.switchHandler}>Sign In</Button>
                    </div>
                </div>
                </div>
            </section>
        )
    }

}

export default Auth
