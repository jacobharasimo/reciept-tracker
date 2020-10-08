import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'rebass';
import { Field } from 'formik';
import { Label, Input as BaseInput } from '@rebass/forms';

export const Input = () => (
  <Field>
    {({
      field, // { name, value, onChange, onBlur }
      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      meta,
    }) => (
      <Flex>
        <Box>
          <Label>
            <BaseInput {...field} />
          </Label>
        </Box>
      </Flex>
    )}
  </Field>
);
Input.propTypes = {
  type: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',

}
