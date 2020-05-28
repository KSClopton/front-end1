import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Blankprofile from '../Images/Blankprofile.png';



function ClientSignUP(props) {
    const {signUp, onSignUpChange, onSubmit, disabled, errors, clickClient, clickInstructor} = props
    return (
        <form className='form container' onSubmit={onSubmit}>
        <MainDiv>
            <BlankImage>
                <img src={Blankprofile}/>
            </BlankImage>
            <NameContainer>
                <input placeholder="First Name" name="firstName" value={signUp.firstname} onChange={onSignUpChange} className='firstname'/>
                <div className='errors'>{errors.firstName}</div>
                <input placeholder="Last Name" name="lastName" value={signUp.lastname} onChange={onSignUpChange}/>
                <div className='errors'>{errors.lastName}</div>
            </NameContainer>
            <FieldContainer>
                <input placeholder="Email" name="email" value={signUp.email} onChange={onSignUpChange}/>
                <div className='errors'>{errors.email}</div>
            </FieldContainer>
            <FieldContainer>
                <input placeholder="Password" name="password" value={signUp.password} onChange={onSignUpChange} type="password"/>
                <div className='errors'>{errors.password}</div>
            </FieldContainer>
            <FieldContainer>
                <input placeholder="Confirm Password" name="confirmPassword" value={signUp.confirm} onChange={onSignUpChange} type="password"/>
                <div className='errors'>{errors.confirmPassword}</div>
            </FieldContainer>

            <div className='role-container'>
                <Role>
                    <input type='radio' name='role' className='radio client' onChange={onSignUpChange} />
                    <input type='radio' name='role' className='radio instructor' onChange={onSignUpChange}/>
                </Role>
            </div>

            <div className='errors'>{errors.role}</div>
            <SubmitButton>
            <button disabled={disabled}>Submit</button>
            </SubmitButton>
            <SignIn>
                <Link to='/SignIn'>
                    <h3>Already have an account?</h3> 
                </Link>
            </SignIn>
        </MainDiv>
    </form>
    
    )
}

const MainDiv = styled.div`
    text-align: center;
    outline: none;
    padding: 10%;

    .errors{
        color: red;
        font-size: .75rem;
    }
`
const Role = styled.div`

    .radio{
        height: 18px;
        width: 5rem;
        -webkit-appearance: none;
        border: solid 1px #7146b8;
    }

    .instructor{
        border-radius: 4px;
        outline: none;
        border: solid 1px #7146b8;
        background-color:white;
    }
    .instructor:before {
        content: 'Instructor';
        outline: none;
    }
    .instructor:checked{
        background: #7146b8;
        color: white;
        outline: none;
        border: solid 1px #7146b8;
    }
    .client{
        border: darkgrey solid 1px;
        border-radius: 4px;
        outline: none;
        border: solid 1px #7146b8;
        background-color:white;
    }
    .client:checked{
        background: #7146b8;
        color: white;
        outline: none;
        border: solid 1px #7146b8;
    }
    .client:before {
       content: 'Client'; 
       outline: none;
    }
`
const NameContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    input {
        border: solid 1px #7146b8;
        border-radius: 4px;
        width: 4.9rem;
        outline: none;
    }
`
const BlankImage = styled.div`
        text-align: center;

    img{
        border-radius: 50%;
        height: 140px;
         width: 140px;

    }
    
`
const FieldContainer = styled.div`

    input{
        border: solid 1px #7146b8;
        border-radius: 4px;
        width: 10rem;
        outline: none;
        
    }
`
const SubmitButton = styled.div`
    
    button{
        background: linear-gradient(to right, #7146b8,#440d88);
        color: white;
        padding: 1% 7% 1% 7%;
        border-radius: 20px;
    }
`
const SignIn = styled.div`
    h3{
        font-size: .5rem;
        color: white;
        
    }

`
export default ClientSignUP;