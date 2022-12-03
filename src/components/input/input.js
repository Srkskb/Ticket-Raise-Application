import React, {forwardRef, Fragment} from 'react';
import {StyleSheet, Text} from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';

const Input = forwardRef(
  (
    {
      label,
      onChangeText,
      value,
      isRightComponent = '',
      fieldName,
      errors,
      validateField,
      ...props
    },
    ref,
  ) => {
    return (
      <>
        <FloatingLabelInput
          {...props}
          label={label}
          containerStyles={{
            ...style.containerStyle,
            marginBottom: errors?.[fieldName] ? 0 : 15,
            borderColor: errors?.[fieldName] ? 'red' : '#c4c4c4',
          }}
          customLabelStyles={{
            colorFocused: errors?.[fieldName] ? 'red' : 'green',
            fontSizeFocused: 12,
            topFocused: -25,
            colorBlurred: '#c4c4c4',
          }}
          labelStyles={style.labelStyle}
          inputStyles={style.inputStyle}
          value={value}
          onChangeText={onChangeText}
          ref={ref}
          onBlur={() => validateField(fieldName, value)}
        />
        {errors?.[fieldName] ? (
          <Text style={style.errorMessage}>{errors?.[fieldName]}</Text>
        ) : null}
      </>
    );
  },
);

const style = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 50,
  },
  customLabelStyles: {},
  labelStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  inputStyle: {
    color: '#000',
    paddingHorizontal: 10,
  },
  errorMessage: {color: 'red', marginBottom: 15},
});

export default Input;
