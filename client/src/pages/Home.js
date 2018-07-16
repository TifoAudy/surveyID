import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import styles from './Home.scss';
import Header from '../components/Header';
import Landing from '../components/Landing';

const Dashboard = () => <p>Dashboard</p>
const Survey = () => <h2>Headerdsdsd</h2>



const Home = ({ loggedIn }) => {
  console.log(loggedIn);
  
  return (
    <div>
      <BrowserRouter>
        <div className={styles.container}>
          <Header />
          <Route exact path="/" render={() => (
            loggedIn ? (
              <Redirect to="/surveys" />
            ) : (
                <Landing />
              )
          )} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={Survey} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Home;