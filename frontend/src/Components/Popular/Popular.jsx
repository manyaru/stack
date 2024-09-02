import React, { useEffect, useState } from 'react';
import './Popular.css';
import Item from '../Item/Item';

const Popular = () => {
  // Initialize state as an empty array
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Ensure the fetched data is an array
        if (Array.isArray(data)) {
          setPopularProducts(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        // Optionally, you can set popularProducts to an empty array if an error occurs
        setPopularProducts([]);
      });
  }, []);

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.length > 0 ? (
          popularProducts.map((item) => (
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
          <p>No popular products available.</p>
        )}
      </div>
    </div>
  );
};

export default Popular;
