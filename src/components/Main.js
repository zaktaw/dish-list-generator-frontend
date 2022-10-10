import Dishes from './Dishes'

const Main = (user) => {
    return(
    <div>
        <h1>Welcome, {user.user.firstName}!</h1>
        <h2>My dishes:</h2>
        <Dishes dishes={user.user.dishes}/>
    </div>
)}

export default Main
