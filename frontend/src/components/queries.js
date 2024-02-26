"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Query() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [comment, setComment] = useState('');
  const [queries, setQueries] = useState([]);


  useEffect(() => {
    handleGetQuery();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/query/createquery', {
        name,
        email,
        query,
        comment
      });
      window.location.reload();
      console.log('Query created:', response.data);
    } catch (error) {
      console.error('Error creating query:', error);
    }
  };

   const handleGetQuery = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/query/getallquery', {
        email
      });
      console.log('Queries retrieved:', response.data);
      setQueries(response.data);
    } catch (error) {
      console.error('Error getting queries:', error);
    }
  };

  const handleUpdateQuery = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/query/updatequery/${id}`, {
        comment
      });
      console.log('Query updated:', response.data);
      window.location.reload();
    } catch (error) {
      console.error('Error updating query:', error);
    }
  };

  return (
    <>
    
      <div className="query-container">
      <input type="text" className="query-input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" className="query-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" className="query-input" placeholder="Query" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button className="query-button" onClick={handleSubmit}>Create Query</button>
      {/* ...existing code... */}
      <div className="query-list">
        {queries.map((query) => (
          <div key={query._id} className="query-item">
            <div className="flebox">
            <h3 className="query-name">{query.name}</h3> 
            <p className="query-date">{new Date(query.date).toLocaleString('en-US', { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' })}</p>
            </div>
            <p className="query-email">{query.email}</p><br />
             <div><b>Query:</b><em className="query-text">{query.query}</em></div>
             <div><b>Comment:</b><em className="comm-text">{query.comment}</em></div>
            <input type="text" placeholder="Add comment" onChange={(e) => setComment(e.target.value)} />
            <button className="query-button" onClick={() => handleUpdateQuery(query._id)}>Add Comment</button>
          </div>
        ))}
      </div>
    </div>
    </>
 
  
  );
}
