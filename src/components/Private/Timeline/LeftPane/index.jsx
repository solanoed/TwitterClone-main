import { NavLink } from "react-router-dom";
import { Container } from "./leftpane.styles";

const LeftPane = () => {

    return (
        <>
        <Container>
            <header>Twirrer icon</header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/explore">Explore</NavLink>
                <NavLink to="/notifications">Notifications</NavLink>
                <NavLink to="/messages">Messages</NavLink>
                <NavLink to="/bookmarks">Bookmarks</NavLink>
                <NavLink to="/lists">Lists</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </nav>
            <button>Tweet</button>
        </Container>
        </>

    )
};

export default LeftPane;