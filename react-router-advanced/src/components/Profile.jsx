import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom';

const Profile = () => {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h2>My profile</h2>
            <ul>
                <li>
                    <Link to={`${url}/profile`}>ProfileDetails</Link>
                </li>
                <li>
                    <Link to={`${url}/settings`}>ProfileSettings</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h3>Please select an option.</h3>
                </Route>
                <Route path={`${path}/profiledetails`}>
                    <ProfileDetails />
                </Route>
                <Route path={`${path}/profilesettings`}>
                    <ProfileSettingsSettings />
                </Route>
            </Switch>
        </div>
    );
};

const ProfileDetails = () => <h3>Profile Details</h3>;

const ProfileSettings = () => <h3>Profile Settings</h3>;

const NestedRoutesExample = () => (
    <Router>
        <div>
            <nav>
                <Link to="/profile">Profile</Link>
            </nav>
            <Switch>
                <Route path="/profile" component={Profile} />
                <Route path="/">
                    <h2>Home</h2>
                </Route>
            </Switch>
        </div>
    </Router>
);

export default Profile;