/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from './components/Card.jsx';
import Carousel from './components/Carousel.jsx';
import Footer from './components/Footer.jsx';
import Theme from './components/Theme.jsx';

export default function App() {
  const [apiData, setApiData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log('Fetched data:', data);
        setApiData(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount

  return (
    <>
      <div className="text-center">
        <div className="flex justify-between m-5">
          <h1 className="text-3xl">React APP</h1>
          <Theme></Theme>
        </div>
        <Carousel />
        <h4>Feature Products</h4>
        <div className="flex flex-wrap justify-center gap-2 mb-5">
            {apiData.map((data) => (
              <Card cardInfo={data} key={data.id} />
            ))}
          </div>
        <Footer />
      </div>
    </>
  );
}
