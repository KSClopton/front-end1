import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ClientSignUp from './Components/ClientSignUp'
import ClientSignIn from './Components/ClientSignIn'
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './formSchema'
import styled from 'styled-components'
import workoutclassroom from './Images/workoutclassroom.jpg'


const initialSignUpValues = {firstName: '', lastName: '', email: '', password: '', role: ''}
const initialSignInValues = {email: '', password: ''}
const initialNewSignIn = {}
const initialDisabled = true;
const initialFormErrors = {firstName: '', lastName: '', email: '', password: '',confirmPassword: '', role: ''}

function App() {
  const [signUp, setSignUp ] = useState(initialSignUpValues)
  const [signIn, setSignIn ] = useState(initialSignInValues)
  const [newSignIn, setNewSignIn] = useState()
  const [disabled, setDisabled ] = useState(initialDisabled)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [roleDisabled, setRoleDisabled] = useState(true)


  function clickClient(){
    let clientElem = document.getElementById('client');
    let instructorElem = document.getElementById('instructor')
    
    clientElem.style.backgroundColor = 'rgb(105, 189, 46)';
    clientElem.style.color = 'white';
    instructorElem.style.backgroundColor = 'grey';
    instructorElem.style.color = 'white';
    console.log('getting this far')
}
  function clickInstructor(){
    let clientElem = document.getElementById('client');
    let instructorElem = document.getElementById('instructor')

    clientElem.style.backgroundColor = 'grey';
    clientElem.style.color = 'white';
    instructorElem.style.backgroundColor = 'rgb(105, 189, 46)';
    instructorElem.style.color = 'white';
    console.log('getting this far')
    
  }

  const postNewSignIn = (newClient) => {
    axios.post('http://anywhere-fit.herokuapp.com/api/auth/register', newClient)
    .then(res => {
      console.log('totes worked')
      window.location = '/'
      setSignUp(initialSignUpValues)
    })
    .catch(err => {
      console.log('The api is not working')
    })
    .finally({
    })
  }
  const onSignUpChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    yup 
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({...formErrors, 
          [name]: ''})
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, 
          [name]: err.errors[0]
        })
      })
    setSignUp({
      ...signUp,
      [name]: value
    })
  }
  const onSubmit = e => {
    e.preventDefault()
  
    const newClient = {
      firstName: signUp.firstName.trim(),
      lastName: signUp.lastName.trim(),
      email: signUp.email.trim(),
      password: signUp.password.trim(),
      role: signUp.role.trim()
    }
    postNewSignIn(newClient)
  }
  const onSignInChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setSignIn({
      ...signIn,
      [name]: value
    })
  }
  useEffect(() => {
    formSchema.isValid(signUp)
    .then(valid => {
      setDisabled(!valid)
    })
    
  }, [signUp])

  return (
    <Router>
  <MainContainer>
    <div className="App">
      <Route path='/SignUp'>
        <ClientSignUp clickInstructor={clickInstructor} disabled={disabled} onSubmit={onSubmit} signUp={signUp} onSignUpChange={onSignUpChange} errors={formErrors}/>
      </Route>
      <Route path='/SignIn'>
        <ClientSignIn onSubmit={onSubmit} signIn={signIn} onSignInChange={onSignInChange}/>
      </Route>
    </div>
  </MainContainer>
    </Router>
  );
}
const MainContainer = styled.div`
    background-image: url(${workoutclassroom});
    background-size: cover;

`
export default App;
