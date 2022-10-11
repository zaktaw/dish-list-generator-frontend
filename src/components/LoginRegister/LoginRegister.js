import Login from './Login';
import Register from './Register';

const LoginRegister = ({fSetUser}) => {
    return(
        <div className='loginRegister'>
            <Login fSetUser={fSetUser}/>
            <Register fSetUser={fSetUser}/>
        </div>
    )
}

export default LoginRegister;