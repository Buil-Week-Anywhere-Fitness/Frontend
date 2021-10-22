// for boilerplate:
// install es7 react extension, type rface + enter

// FormSignup

import React from 'react'
import useForm from './useFormHook'
import validate from './validateInfo'
import './RegistrationForm.css'

const RegistrationForm = (submitForm) => {
    const {handleChange, values, handleSubmit, errors} 
    = useForm(
        submitForm,
        validate
        )
    
    return ( 
        <div className='.form-content-right'>
            <form className="form" onSubmit={handleSubmit}>
                <h3>Get started with us today! <br/> Create your
                    account by filling out the information below.
                </h3>

                <div className='form-inputs'>
                    <label htmlFor='username' 
                           className='form-label'>
                               Username
                    </label>
                        <input  type='text'
                                id='username'
                                name='username'
                                className='form-input'
                                placeholder='Enter your username'
                                value={values.username}
                                onChange={handleChange}
                        />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='email' 
                           className='form-label'>
                               <br/>
                               Email
                    </label>
                        <input  type='email'
                                id='email'
                                name='email'
                                className='form-input'
                                placeholder='Enter your email'
                                value={values.email}
                                onChange={handleChange}
                        />
                    {errors.email && <p>{errors.email}</p>}

                </div>

                <div className='form-inputs'>
                    <label htmlFor='password' 
                           className='form-label'>
                               <br/>
                               Password
                    </label>
                        <input  type='password'
                                id='password'
                                name='password'
                                className='form-input'
                                placeholder='Enter your password'
                                value={values.passwort}
                                onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}

                </div>

                <div className='form-inputs'>
                    <label htmlFor='password2' 
                           className='form-label'>
                               <br/>
                               Confirm Password
                    </label>
                        <input  type='password'
                                id='password2'
                                name='password2'
                                className='form-input'
                                placeholder='Confirm your password'
                                value={values.password2}
                                onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}

                </div>
                <br/>
                <button className='form-input-btn'
                        type='submit'
                >
                    Sign up
                </button>
                <span className='form-input-login'>
                    <br/>
                    Already have an account? Login  
                    <a href='#>'> here</a>
                </span>

            </form>
        </div>
        
        
    )
}
     
export default RegistrationForm
