import React from 'react';
import PropTypes from 'prop-types';

const ScreenRow = (props) => {
  return(
    <div>
      <input type='text' readOnly value={props.value} />
    </div>
  )
}

ScreenRow.propTypes = {
  value: PropTypes.string.isRequired
}

export default ScreenRow;
