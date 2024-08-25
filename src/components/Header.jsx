import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/signIn'>Sign In</NavLink>
            <NavLink to='/signUp'>Sign Up</NavLink>
        </div>
    );
};

export default Header;