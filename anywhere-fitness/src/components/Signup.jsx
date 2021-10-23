// Form

import React, {useState} from 'react';
import RegistrationForm from './RegistrationForm';
import FormSuccess from './FormSuccess'


const Signup = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }
    return (
        <> 
            <div className='form-container'>
                <span className='close-btn'>x</span>
                <div className='form-content-left'>
                    <img src="../../../public/apple-touch-icon.png"  
                         alt='line-figure-stretching'
                         className='form-img'
                    />
                </div>
                {!isSubmitted ? <RegistrationForm submitForm=
                {submitForm} /> : <FormSuccess/>}
            </div>
        
        
        </>
    )
}
 
export default Signup;