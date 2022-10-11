const Logout = ({user, fSetUser}) => {
    
    function logout() {
        fSetUser(null);
    }

    return(
        <div className="logout">
            <p>Logged in as {user.email}</p>
            <button onClick={logout}>Log out</button>
        </div>
)}

export default Logout;