import React from "react";
// import './semantic.min.css';
// import { Button, Icon } from 'semantic-ui-react';
// import AppContainer, { AppSubtitle, AppTitle } from './usersStyles';

const styles = {
  title: {
    color: 'blue',
    backgroundColor: 'yellow',
    fontSize: '8px',
  }
}

const User = ({ user, full_name, courses }) => {
  const { id } = user;
  return (
    <AppContainer>
      <div className="user-card"> 
        {/* in line style */}
        <h1 style={{ color: 'green', backgroundColor: 'red', fontSize: '30px' }}>{full_name}</h1>

        {/* styles as module */}
        <h1 style={ styles.title }>{full_name}</h1>
        {/* <Button color='facebook'>
          <Icon name='facebook' /> Facebook
        </Button> */}

        {/* Styled components */}
        {/* <AppSubtitle>{full_name}</AppSubtitle>
        <AppTitle>{full_name}</AppTitle> */}
        <hr />
        <h4>Courses</h4>
        <ul>
          { courses.map( (c) => (
            <li>
              <a href={`/courses/${c.id}`}>{c.name}</a>
            </li>
          ))}
        </ul>
        <a href={`/users/${id}`} data-method="delete">
          User delete
        </a>
      </div>
    </AppContainer>
  )
}

export default User;