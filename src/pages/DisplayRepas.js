import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepas } from '../slices/repasSlice';
import { selectSearchTerm } from '../slices/searchSlice'; // Import the selector
import { Card, Button, Row, Col } from 'react-bootstrap';

function DisplayRepas() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.repas);
  const searchTerm = useSelector(selectSearchTerm); // Use the selector to get the search term
  const [showMore, setShowMore] = useState(false); // State to toggle visibility

  useEffect(() => {
    dispatch(fetchRepas());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error fetching repas.</p>;

  // Filter items based on the search term, ensuring to trim the search term and handle case sensitivity
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div>
      <h2>Repas List</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {filteredItems && filteredItems.slice(0, showMore ? filteredItems.length : 8).map((repas) => (
          <Col key={repas.id}>
            <Card>
              <Card.Img 
                variant="top" 
                src={repas.image} 
                alt={repas.title} 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <Card.Body style={{ height: '200px' }}>
                <Card.Title>{repas.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{repas.categorie}</Card.Subtitle>
                <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{repas.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {filteredItems && filteredItems.length > 8 && (
        <Button variant="secondary" onClick={() => setShowMore(!showMore)} className="mt-3">
          {showMore ? 'Show Less' : 'Show More'}
        </Button>
      )}
    </div>
  );
}

export default DisplayRepas;