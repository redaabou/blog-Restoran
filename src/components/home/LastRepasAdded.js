import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepas } from '../../slices/repasSlice'
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link

function LastRepasAdded() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.repas);

  useEffect(() => {
    dispatch(fetchRepas());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error fetching repas.</p>;

  return (
    <div>
      <h2>Last Repas Added</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {items.slice(-4).map((repas) => (
          <Col key={repas.id}>
            <Card>
              <Card.Img variant="top" src={repas.image} alt={repas.title} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{repas.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{repas.categorie}</Card.Subtitle>
                <Card.Text>{repas.description}</Card.Text>
                <Button variant="primary">View More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* Add a Link wrapped around a button for navigation */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link to="/displayRepas">
          <Button variant="info">Show All</Button>
        </Link>
      </div>
    </div>
  );
}

export default LastRepasAdded;