import React, { Component } from 'react';
import { View, Text } from 'react-native';
import style from './style';

class Practise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name : 'Atul sharma',
          class : '9th',
          section: 'C',
        }
    }

    render() {
        return (
            <View style={{}}>
                <View style={{ marginTop: 100, alignItems: 'center' }}>
                    <View style={style.mainview}>
                        <View style={{flexDirection:'row'}}>
                            <View style={style.nameview}>
                                <Text style={style.textname}>Name = {this.state.name}</Text>
                                <Text style={style.textname}>Class = {this.state.class}</Text>
                                <Text style={style.textname}>Section = {this.state.section}</Text>
                            </View>
                            <View style={style.imageview}>
                          {/* <Image ></Image> */}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}

export default Practise;