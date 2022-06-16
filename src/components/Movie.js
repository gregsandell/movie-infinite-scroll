// import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
  return (
    <div>
      <img src={props.dataSource.Poster} style={{ height: 100, width: 'auto' }} />
      {props.dataSource.Title}
    </div>
  );
};

Movie.defaultProps = {
  dataSource: {}
};
Movie.propTypes = {
  dataSource: PropTypes.object
};

export default Movie;
