import React, { useEffect } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

import { getDetailMovie, clearDetailState } from '../redux/actions';

const Detail = (props) => {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    props.getDetailMovie(id);
  }, [id]);

  const handleBack = () => {
    props.clearDetailState();
    history.push('/list')
  }

  const { Title, Plot, Poster, Actors, Runtime, Writer, Released, Production, Rated, Metascore } = props.detail;

  return (
    <Card className="mt-3 mb-3">
      <Card.Header as="h2">{Title}</Card.Header>
      <Card.Body>
        <Row>
          <Col xs={{span: 12}} md={{ span: 6 }}>
            <Card.Img src={Poster}></Card.Img>
          </Col>
          <Col xs={{span: 12}} md={{ span: 6 }}>
            <Row>
              <p><b>Plot:</b> {Plot}</p>
            </Row>
            <Row>
              <p><b>Writers:</b> {Writer}</p>
            </Row>
            <Row>
              <p><b>Actors: </b>{Actors}</p>
            </Row>
            <Row>
              <p><b>Duration: </b>{Runtime}</p>
            </Row>
            <Row>
              <p><b>Release: </b>{Released}</p>
            </Row>
            <Row>
              <p><b>Producer: </b>{Production}</p>
            </Row>
            <Row>
              <p><b>Rated: </b>{Rated}</p>
            </Row>
            <Row>
              <p><b>Metascore: </b>{Metascore}</p>
            </Row>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
      <Button variant="danger" onClick={handleBack}>Back to movies list</Button>
      </Card.Footer>
    </Card>
  )
}

const mapStateToProps = state => ({
  detail: state.detail
});

const mapDispatchToProps = dispatch => {
  return {
    getDetailMovie: (id) => dispatch(getDetailMovie(id)),
    clearDetailState: () => dispatch(clearDetailState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);