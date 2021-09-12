import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

import { getMovies, loadMoreMovies, updateSearchTerm } from '../redux/actions';

//https://cdn.pixabay.com/photo/2017/06/02/19/12/broken-link-2367103_1280.png

const Movies = props => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const onScroll = (event) => {
      if ((window.innerHeight + window.scrollY) >= event.target.body.offsetHeight - 10) {
        console.log('search term in onscroll: ', searchTerm);
        props.loadMoreMovies();
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onscroll)
  }, []);

  const handleSearch = () => {
    props.updateSearchTerm(searchTerm);
    props.getMovies(searchTerm);
  }

  const onSearchTermChange = e => {
    setSearchTerm(e.target.value);
  }

  const formatTitle = title => title.length > 15 ? `${title.slice(0, 20)} ...` : title;

  const handleErrorLoadImage = (e) => e.target.src = 'https://cdn.tgdd.vn/hoi-dap/580732/cach-khac-phuc-loi-404-not-found-3-1-800x300.jpg';

  return (
    <div>
      <h2>NETFLIX</h2>
      <Row>
        <Col>
          <Form.Control className="mb-3" placeholder="Type to search" value={searchTerm} onChange={onSearchTermChange} />
        </Col>
        <Col><Button variant="primary" onClick={handleSearch}>Search</Button></Col>
      </Row>
      <Row className="mt-3">
        {props.appState.movies.map(movie => (
          <Col xs={12} md={6} lg={4}>
            <Card key={movie.imdbID}>
              <Card.Img variant="top" src={movie.Poster} onError={handleErrorLoadImage} />
              <Card.Title>
                {formatTitle(movie.Title)}
              </Card.Title>
              <Button variant="primary">View detail</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

const mapStateToProps = state => ({
  appState: state
});

const mapDispatchToProps = dispatch => {
  return {
    getMovies: () => dispatch(getMovies()),
    loadMoreMovies: () => dispatch(loadMoreMovies()),
    updateSearchTerm: (text) => dispatch(updateSearchTerm(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
