import { Form, Button, Container, Row, Col, InputGroup, Card } from 'react-bootstrap';
import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';
import './Maptracking.css';

function Maptracking() {
    const username = "User"; 

    return (
        <Container fluid className="Maptracking">
            {/* Header Section */}
            <Row className="align-items-center justify-content-between mb-3">
                {/* Left Section */}
                <Col xs="auto">
                    <h3 className="title-text mb-0">MAP TRACKING</h3>
                    <p className="subtitle-text">Welcome back, {username}!</p>
                </Col>

                {/* Right Section */}
                <Col xs="auto" className="d-flex align-items-center">
                    
                    <Button variant="link" className="icon-button">
                        <div className="icon-circle">
                            <FaBell size={20} />
                        </div>
                    </Button>
                    <Button variant="link" className="icon-button">
                        <div className="icon-circle">
                            <FaSearch size={20} />
                        </div>
                    </Button>

                    {/* Profile Section */}
                    <div className="profile-section d-flex align-items-center ms-3">
                        <FaUserCircle size={30} className="user-icon" />
                        <span className="ms-2 user-text">{username}</span>
                    </div>
                </Col>
            </Row>

            {/* Divider */}
            <hr className="divider" />

            {/* Main Content Section */}
            <Row className="main-content">
                {/* Search Box */}
                <Col md={3} className="search-box">
                    <Form>
                        <Form.Group controlId="search">
                            <Form.Label>Search Location</Form.Label>
                            <InputGroup>
                                <InputGroup.Text className="search-icon">
                                    <FaSearch />
                                </InputGroup.Text>
                                <Form.Control type="text" placeholder="Enter location" />
                            </InputGroup>
                        </Form.Group>
                    </Form>

                    {/* Trip Cards */}
                    <Card className="trip-card mb-3 mt-3">
                        <Card.Body>
                            <Card.Title>Shipping Number</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">ENV-Y7483929420</Card.Subtitle>
                            <div className="location-info">
                                <p><i className="fas fa-map-marker-alt"></i> Gilmore Tower</p>
                                <p><i className="fas fa-map-marker-alt"></i> PLM Campus</p>
                                <p>5.7km Trip Mileage</p>
                                <p>0.65L Fuel Consumption</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Map */}
                <Col md={9} className="map-display">
                    <div style={{ width: '100%', height: '500px' }}>
                       
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093775!2d144.95373531550424!3d-37.81627944202106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43cda0b1bd%3A0x5045675218ce7e33!2z5Zu-54us5ZyL56We5aSn5a246YeR6KaL!5e0!3m2!1szh-CN!2sau!4v1642125664995!5m2!1szh-CN!2sau"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Maptracking;
