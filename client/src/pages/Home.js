import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = ()=> <h2>Header</h2>
const Dashboard = ()=> <h2>Dashboard</h2>
const Survey = ()=> <h2>Headerdsdsd</h2>
const Landing = ()=> <h2>Headersqwss</h2>


const Home = () => {
  return(
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={Survey}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Home;