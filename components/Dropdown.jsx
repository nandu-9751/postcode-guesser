import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Dropdown = ({ options, label, onSelect, style }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <FormControl fullWidth style={style}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={selectedOption}
        label={label}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string,
  onSelect: PropTypes.func,
  style: PropTypes.object,
};

Dropdown.defaultProps = {
  label: 'Select an option',
  onSelect: () => {},
  style: {},
};

export default Dropdown;
