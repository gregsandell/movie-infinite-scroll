import React from 'react';
import PropTypes from 'prop-types';
import noPoster from '../noPoster.png'

const Movie = (props) => {
  const posterSrc = props.dataSource.Poster !== 'N/A'
      ? props.dataSource.Poster : noPoster
  return (
      <div>
        <img src={posterSrc} style={{ height: 100, width: 'auto' }} alt={props.dataSource.Title} />
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
