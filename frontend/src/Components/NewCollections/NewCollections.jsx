import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import Item from '../Item/Item';

const NewCollections = () => {
  const [new_collection, setNew_Collection] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newCollections')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Ensure the fetched data is an array
        if (Array.isArray(data)) {
          setNew_Collection(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        // Optionally, you can set new_collection to an empty array if an error occurs
        setNew_Collection([]);
      });
  }, []);

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.length > 0 ? (
          new_collection.map((item) => (
            <Item
              key={item._id} // Use `item._id` as the unique key
              id={item._id} // Ensure that `item._id` is passed as the id prop
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No new collections available.</p>
        )}
      </div>
    </div>
  );
};

export default NewCollections;
