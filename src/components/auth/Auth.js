import React, { Component } from 'react';
import Header from '../header/header'
import './auth.scss'
import Input from '../input/input'
import './auth.scss';
import Button from '../button/button';
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
                value: "Hey",
                validation: {
                    isEmail: true,
                    required: true,
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
                value: 1235,
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            }

        },
        isSignUp: false
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

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
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

    valueInput = () => {
        let inputValue = localStorage.getItem("email")
        return localStorage.getItem("email") ? inputValue : ""
    }
    componentDidMount() {
        this.valueInput()
        console.log(this.valueInput())
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
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp)
        console.log(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp)
    }





    render() {


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
                <div className="wrapper">
                    <form className="form-signin" onSubmit={this.submitHandler}>
                        <h2 className="form-signin-heading">Please Log in </h2>
                        {form}
                        <Button className='btn-submit'>Submit </Button>
                    </form>
                    <Button className='btn-switch ' clicked={this.switchHandler}>Switch TO {this.state.isSignUp ? ' SIGN IN ' : 'SIGN UP'}</Button>
                </div>
            </section>
        )
    }

}

// const mapStateToProps = (state) => {
//     return {
//         loading: state.auth.loading,
//         isAuth: state.auth.token != null,
//         // asdd:

//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp))

//     }
// }



export default Auth
