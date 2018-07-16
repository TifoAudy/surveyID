import React from 'react';
import styles from './Landing.scss';
import { Button } from 'semantic-ui-react';

const Landing = () => {
  return(
    <div className={styles.container}>
      <h1> Improve your Apps </h1>
      <p> Send your surveys easily by using our services <br /> Collecting feedback for your bright future </p>
      <div>
        <Button 
          primary 
          size = 'big' 
          circular
        >
          Start
        </Button>
        <Button 
          basic 
          primary 
          size = 'big' 
          circular
        >
          About
        </Button>
      </div>
    </div>
  )
};

export default Landing;

