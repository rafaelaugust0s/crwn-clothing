import React from'react';

import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";



class SignIn extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }
    handleSubmit = event =>{
        event.preventDefault()
        this.setStat({email: '', password: ''})
    }

    handleChange = event=>{
        const {value,name}=event.target;
         this.setState({[name]: value})

    }

render() {

        return(

            <div className= 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>

               <form onSubmit={this.handleSubmit}>
                   <FormInput
                       type='email'
                       name='email'
                       value={this.state.email}
                       handleChange={this.handleChange}
                       required
                       label='email'
                   />

                   <FormInput type='password'
                              name='password'
                              value={this.state.password}
                              required
                              handleChange={this.handleChange}
                              label={'password'}
                   />


                   <CustomButton type='submit' >SIGN IN</CustomButton>
               </form>

            </div>
        )
}


}
export default SignIn;