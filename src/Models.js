import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import './Accordion.css'; 
import Popularproduct from './Popular Product';

function Models() {
  return (
    <div className="container">
      <div className="products-container">
        <h2 className="products-title">Popular Products</h2>
        <Popularproduct />
        <Popularproduct />

      </div>
      <div className="accordion-container">
        <h2 className="brand-models-title">Brand Models</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Mercedes-Benz</Accordion.Header>
            <Accordion.Body>
              <h4>Spare Parts for Mercedes-Benz</h4>
              <p>
                Find genuine spare parts for your Mercedes-Benz vehicle. From engine components to
                exterior and interior accessories, we offer a wide range of products to ensure the
                longevity and performance of your car. Whether you need brake pads, filters, or
                electrical parts, we have you covered. Browse our selection and keep your Mercedes-Benz
                running smoothly.
              </p>
              <a href=''>Mercedes Benz Products</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Audi</Accordion.Header>
            <Accordion.Body>
              <h4>Spare Parts for Audi</h4>
              <p>
                Discover our selection of genuine spare parts for Audi vehicles. Whether you're
                looking for replacement parts for routine maintenance or upgrades for enhanced
                performance, we have what you need. From engine components to body parts and
                accessories, our range of Audi spare parts ensures that your vehicle remains in
                top condition.
              </p>
               <a href=''>Audi Products</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Volkswagen</Accordion.Header>
            <Accordion.Body>
              <h4>Spare Parts for Volkswagen</h4>
              <p>
                Explore our collection of spare parts for Volkswagen vehicles. We offer a comprehensive
                range of genuine Volkswagen parts to maintain and enhance the performance of your car.
                Whether you need replacement parts for routine maintenance or upgrades for customization,
                we have you covered. Browse our selection to find the perfect spare parts for your Volkswagen.
              </p>
              <a href=''>VW Products</a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Models;
