import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from "./"
import LeftPane  from "./LeftPane";

const Timeline = () => {
    return (
        <>
        
        <BrowserRouter>
            <Container>
            <LeftPane></LeftPane>
            <Switch>
                <Route path="/" exact> Home </Route>
                <Route path="/explore" exact> Explore </Route>
                <Route path="/notifications" exact> Notifications </Route>
                <Route path="/messages" exact> Messages </Route>
                <Route path="/bookmarks" exact> Bookmarks </Route>
                <Route path="/lists" exact> Lists </Route>
                <Route path="/profile" exact> Profile </Route>
            </Switch>
            </Container>
        </BrowserRouter>
        </>
    );
}

export default Timeline;