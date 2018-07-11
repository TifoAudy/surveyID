import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styles from './Home.scss';
import Header from '../components/Header';


const Dashboard = () => <p>Dashboard</p>
const Survey = () => <h2>Headerdsdsd</h2>
const Landing = () => <h2>Heasqwss</h2>


const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <div className={styles.container}>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={Survey} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Home;