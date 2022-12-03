import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Orders', 'Order Date', 'Status','Action'],
      tableData: [
        ['ID: 100002', '2022-07-15 23:26:19', 'Cancel', '3200.00',],
        ['ID: 100004', '2022-08-15 23:20:18', 'Cancel', '4500.00',],
        ['ID: 1000005', '2022-06-15 23:10:17', 'Pending', '4600.00',],
        ['ID: 1000006', '2022-04-15 23:05:15', 'Pending', '7800.00',]
      ]
    }
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Preview</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center',paddingTop:20,padding:20}}>
<Text style={{fontSize:25,color:"#000000",fontWeight:'bold'}}>
  My Orders
</Text>
        </View>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1,padding:1, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 60, backgroundColor: '#808B97' },
  text: { margin: 10},
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});