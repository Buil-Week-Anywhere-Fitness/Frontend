// all of the logic to check if values typed into form are gud

export default function validateInfo(values) {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = "Username required"
    }

    // email
    if (!values.email) {
        errors.email = 'Email required'
    } 
    else if
    //weird line copied from SO, ensures email legit
          (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email))
        {
            errors.email="Email address is invalid"
        }
    
    if (!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length <1) {
        errors.password = 'Password needs to be 2 characters or more'
    }

    if (!values.password2) {
        errors.password2 = 'Password is required'
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match'
    }

    return errors
}

//could simplify using external library but will do as is