import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

export default class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const { label, ...props } = this.props;
    const { isFocused } = this.state;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: !isFocused ? 26 : 0,
      fontSize: !isFocused ? 12 : 12,
      color: !isFocused ? '#96969B' : '#96969B',
    };
    return (
      <View style={{ paddingTop: 18, marginHorizontal: widthPercentageToDP((28 / 375) * 100) }}>
        <Text style={labelStyle}>
          {label}
        </Text>
        <TextInput
          {...props}
          style={{ fontSize: 15, color: '#000', borderBottomColor: isFocused ? '#555' : '#C8C8C8' }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </View>
    );
  }
}

