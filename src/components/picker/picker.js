// import React, {forwardRef} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import {Picker} from '@react-native-picker/picker';

// const DropDown = forwardRef(
//   ({data = [], selectedValue, handleChange, label}, ref) => {
//     return (
//       <View style={style.container}>
//         <Text style={style.text}>{label}</Text>
//         <Picker
//           ref={ref}
//           selectedValue={selectedValue}
//           onValueChange={(itemValue, itemIndex) => handleChange(itemValue)}>
//           {data.length > 0 &&
//             data.map(i => <Picker.Item key={i} label={i} value={i} />)}
//         </Picker>
//       </View>
//     );
//   },
// );

// const style = StyleSheet.create({
//   container: {
//     borderWidth: 1,
//     borderColor: '#c4c4c4',
//     borderRadius: 8,
//     height: 50,
//     justifyContent: 'center',
//     marginBottom: 15,
//   },
//   text: {
//     position: 'absolute',
//     top: -10,
//     fontSize: 12,
//     left: 15,
//     paddingHorizontal: 5,
//     backgroundColor: '#fff',
//     color: 'green',
//   },
// });

// export default DropDown;
