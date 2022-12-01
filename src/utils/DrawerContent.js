import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  Color,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Snack from '../utils/Snack';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Utils from '../utils';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


class DrawerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Update Your Profile',
      email: 'Email',
      image: require('../Images/track.png'),
      id: '',
      mobile: '',
      userType: '',
    };
  }

  componentDidMount = async () => {

  };


  otpSignOut() {
    this.props.navigation.toggleDrawer();
    AsyncStorage.clear().then(() => console.log('Cleared'));
    this.props.navigation.navigate('Login');
  }

  goTo(screen) {
    if (screen == 'Profile') {
      this.props.navigation.navigate('Root', { screen: screen });
      this.props.navigation.closeDrawer();
    } else if (screen == 'Splash') {
      AsyncStorage.removeItem(Utils.phone);
      this.props.navigation.replace('Login');
    } else {
      this.props.navigation.navigate(screen);
      this.props.navigation.closeDrawer();
    }
  }
 
  render() {
    return (
      <DrawerContentScrollView {...this.props} style={Style.container}>
        <View style={Style.sub_container}>
          <View style={{ }}>
            <TouchableOpacity
              style={Style.touchable_opacity}
              onPress={() =>
                this.goTo('Profile')
                // this.goTo('Profile')
              }>
              <View style={{ marginLeft: -30, marginVertical: 10 }}>
                {/* <Image source={this.state.image} style={Style.profile_dp} /> */}
                <Text>Hello</Text>
              </View>
              <View style={{ justifyContent: 'center', marginHorizontal: 5, }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                    fontWeight: 'bold'
                    // fontWeight: 'bold',
                  }}>
                  {this.state.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.7 }}>
            <View>
              <TouchableOpacity
                style={Style.touchable_opacity}
                onPress={() => this.goTo('Home')}>
                <Icon size={20} name='home' style={{ color: 'black', }}></Icon>

                <Text style={Style.icon_text}>Home</Text>
              </TouchableOpacity>
            </View>
          
         
          
           
          </View>
        </View>
      </DrawerContentScrollView>
    );
  }
}

const Style = StyleSheet.create({
  container: {
    height: height,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    flex: 1,
  },
  sub_container: {
    // paddingHorizontal: 10,
    flex: 1,
    height:height-65,
    backgroundColor: 'whitesmoke',
    borderRadius: 20
  },
  touchable_opacity: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 55,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginHorizontal: 15
  },
  profile_dp: {
    height: 70,
    width: 70,
    borderRadius: 55,
    marginLeft: 20,
  },
  image: {
    height: 18,
    width: 18,
  },
  icon_text: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17
  },
});

export default DrawerContent;
