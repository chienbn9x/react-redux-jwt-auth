import React, { useState, useEffect } from 'react';

import { getUserBoard } from '../services/user.service';

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    getUserBoard().then(
      response => {
        setContent(response.data);
      },
      error => {
        setContent(
          (error.response && error.response.data) ||
          error.message ||
          error.toString()
        );
      }
    );
  });

  return (
    <div className='container'>
      <header className='jumbotron'>
        <h3>{content}</h3>
      </header>
    </div>
  )
}

export default BoardUser;
