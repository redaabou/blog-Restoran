import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
    <Container className="my-5">
      <Row className="mb-5">
        <Col md={6}>
          <Image src="https://foodiesconsulting.com/wp-content/uploads/differentes-formes-de-restauration-1200x780.jpg" rounded fluid style={{ height: '400px', width: '600px' }} />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h1 className="mb-4">À Propos de Restoran</h1>
          <p className="lead">
            Bienvenue sur Restoran, votre destination incontournable pour découvrir des recettes délicieuses et des idées culinaires inspirantes. Nous sommes une chaîne de restauration passionnée par l'art de la cuisine et déterminée à partager notre amour pour les mets exquis avec vous.
          </p>
          <p>
            Notre mission est simple : rendre la cuisine accessible à tous, tout en célébrant la diversité des saveurs du monde entier. Que vous soyez un chef expérimenté ou un amateur de cuisine, notre blog est conçu pour vous offrir des recettes faciles à suivre, des conseils pratiques et des astuces de chefs pour améliorer vos compétences culinaires.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title className="mb-3">Notre Histoire</Card.Title>
              <Card.Text>
                Fondé en 2020, Restoran est né de l'envie de deux amis chefs de partager leur passion pour la cuisine avec le plus grand nombre. Depuis nos humbles débuts, nous avons grandi pour devenir une communauté florissante de passionnés de cuisine.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title className="mb-3">Notre Mission</Card.Title>
              <Card.Text>
                Chez Restoran, nous croyons que la cuisine est une forme d'art et une expression de la culture. Notre mission est de promouvoir la cuisine authentique, de célébrer les ingrédients locaux et de soutenir les producteurs durables.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title className="mb-3">Rencontrez Notre Équipe</Card.Title>
              <Card.Text>
                Notre équipe est composée de chefs talentueux, de blogueurs culinaires et de passionnés de gastronomie. Ensemble, nous travaillons sans relâche pour vous apporter les meilleures recettes et idées culinaires, directement depuis notre cuisine à la vôtre.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="mb-4">Rejoignez Notre Communauté</h2>
          <p className="lead">
            Nous vous invitons à explorer notre blog, à essayer nos recettes et à partager vos propres créations avec nous. Suivez-nous sur les réseaux sociaux pour rester à jour avec nos dernières publications et événements. Chez Restoran, la cuisine n'est pas seulement un passe-temps, c'est un mode de vie. Bon appétit !
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
