import Button from 'react-bootstrap/Button';

const Logout = ({user, fSetUser}) => {
    
    function logout() {
        fSetUser(null);
    }

    return(
        <div className="logout">
            <p>Logged in as {user.username}</p>
            <Button onClick={logout} variant="light">Log out</Button>
        </div>
)}

export default Logout;