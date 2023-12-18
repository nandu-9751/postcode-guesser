import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, FormControl } from '@mui/material';

const TextInput = ({ label, onChange, style, type }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth style={style}>
      <TextField
        type={type}
        label={label}
        value={value}
        onChange={handleChange}
        variant="outlined"
      />
    </FormControl>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  type: PropTypes.oneOf(['text', 'number']),
};

TextInput.defaultProps = {
  label: '',
  style: {},
  type: 'text',
};

export default TextInput;
