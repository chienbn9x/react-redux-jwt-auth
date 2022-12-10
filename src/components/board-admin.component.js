import React, { useState, useEffect } from 'react';

import { getAdminBoard } from '../services/user.service';

const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    getAdminBoard().then(
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

export default BoardAdmin;
