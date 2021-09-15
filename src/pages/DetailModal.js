import React from "react";
import { Button, Modal, Card, Col, Row } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";

const DetailModal = (props) => {
  const {
    Title,
    Plot,
    Poster,
    Actors,
    Runtime,
    Writer,
    Released,
    Production,
    Rated,
    Metascore
  } = props.detail;

  const { isModalShow } = props.appState;

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: "CLOSE_DETAIL_MODAL" });
    dispatch({ type: "CLEAR_DETAIL_PAGE" });
  }

  return (
    <Modal show={isModalShow} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={{ span: 12 }} md={{ span: 6 }}>
            <Card.Img src={Poster}></Card.Img>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 6 }}>
            <Row>
              <p>
                <b>Plot:</b> {Plot}
              </p>
            </Row>
            <Row>
              <p>
                <b>Writers:</b> {Writer}
              </p>
            </Row>
            <Row>
              <p>
                <b>Actors: </b>
                {Actors}
              </p>
            </Row>
            <Row>
              <p>
                <b>Duration: </b>
                {Runtime}
              </p>
            </Row>
            <Row>
              <p>
                <b>Release: </b>
                {Released}
              </p>
            </Row>
            <Row>
              <p>
                <b>Producer: </b>
                {Production}
              </p>
            </Row>
            <Row>
              <p>
                <b>Rated: </b>
                {Rated}
              </p>
            </Row>
            <Row>
              <p>
                <b>Metascore: </b>
                {Metascore}
              </p>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  detail: state.detail,
  appState: state
});

export default connect(mapStateToProps)(DetailModal);
