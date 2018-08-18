import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Header from './Header';

const Loading = () => <div>Loading...</div>;

const Login = Loadable({
    loader: () => import('./LoginForm'),
    loading: Loading,
});

const Home = Loadable({
    loader: () => import('./Home'),
    loading: Loading,
});

const Account = Loadable({
    loader: () => import('./Account'),
    loading: Loading,
});
const Profiles = Loadable({
    loader: () => import('./Profiles'),
    loading: Loading,
});
const Contact = Loadable({
    loader: () => import('./Contact'),
    loading: Loading,
});
const Product = Loadable({
    loader: () => import('./Product'),
    loading: Loading,
});

class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <Header logged={true} onClick={(e) => { }}/>
                <Router>
                    <Switch>
                        {/* <Route key={1} exact path="/" component={Home} /> */}
                        <Route key={2} path="/login" component={Login}/>
                        <Route key={3} path="/account" component={Account}/>
                        <Route key={4} path="/contact" component={Contact}/>
                        <Route key={5} path="/profiles" component={Profiles}/>
                        <Route key={6} path="/product" component={Product}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}
export default AppRouter;
