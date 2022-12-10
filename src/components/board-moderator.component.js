import React, { useState, useEffect } from 'react';

import { getModeratorBoard } from '../services/user.service';

const BoardModerator = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    getModeratorBoard().then(
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

export default BoardModerator;
