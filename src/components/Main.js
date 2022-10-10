import Dishes from './Dishes'

const Main = (user) => {
    return(
    <div>
        <h1>Welcome, {user.user.firstName}!</h1>
        <h2>My dishes:</h2>
        {user.user.dishes ? <Dishes dishes={user.user.dishes}/> : <h3>No dishes added</h3>}
    </div>
)}

export default Main
