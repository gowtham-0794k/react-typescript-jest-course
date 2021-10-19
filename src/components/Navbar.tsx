import React from 'react';
import { User } from '../model/Model';
import { Link } from 'react-router-dom';

export class Navbar extends React.Component<{
  user: User | undefined;
}> {
  render() {
    let loginLogOut: any;
    if (this.props.user) {
      loginLogOut = (
        <Link to='/logout' className='nav-link d-flex'>
          {this.props.user.userName}
        </Link>
      );
    } else {
      loginLogOut = (
        <Link to='/login' className='nav-link d-flex'>
          Login
        </Link>
      );
    }

    return (
      // <div className='navbar'>
      //     <Link to='/'> Home</Link>
      //     <Link to='/profile'> Profile</Link>
      //     <Link to='/spaces'> Spaces</Link>
      //     <Link to='/atomic'> Atomic </Link>
      //     {loginLogOut}
      // </div>
      <>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='#'>
              Navbar
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNavAltMarkup'
              aria-controls='navbarNavAltMarkup'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
              <div className='navbar-nav'>
                <Link className='nav-link' to='/'>
                  {' '}
                  Home
                </Link>
                <Link className='nav-link' to='/profile'>
                  {' '}
                  Profile
                </Link>
                <Link className='nav-link' to='/spaces'>
                  {' '}
                  Spaces
                </Link>
                <Link className='nav-link' to='/atomic'>
                  {' '}
                  Atomic{' '}
                </Link>
                <Link className='nav-link' to='/bruno'>
                  {' '}
                  Bruno{' '}
                </Link>
                {loginLogOut}
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
