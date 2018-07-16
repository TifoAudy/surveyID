import React, { Component } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import styles from './Header.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';


class Header extends Component {
  renderContent() {
    const { user } = this.props;
    if (user) {
      return (
        <div>
          <Payments />
          <Button primary style={{marginLeft: 10}}>
            {`Current Credits : ${user.credit}`}
          </Button>
          <a href="/api/logout" className={styles.payment}>
            <Button primary basic>
              Logout
            </Button>
          </a>
        </div>
      )
    } else {
      return (
        <a className={styles.btn} href="/auth/google">
          <Button icon color='violet' labelPosition='left' basic>
            <Icon name="google" />
            Signing with Google
          </Button>
        </a>
      )
    }
  }

  render() {
    console.log(this.props.user)
    return (
      <div className={styles.container}>
        <Menu className={styles.header}>
          <Link to={this.props.user ? "/surveys":"/"}>
            <h2>SURVEY.ID</h2>
          </Link>
          <Menu.Menu position='right' className={styles.menu}>
            {this.renderContent()}
          </Menu.Menu>
        </Menu>
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.auth
  }
};

export default connect(mapStateToProps)(Header);
