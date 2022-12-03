
import React from 'react';
import { View, Image,Platform } from 'react-native';
import { Wave } from 'react-native-animated-spinkit'
export default class SplashScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timer: null,
            counter: 2,
            userDetailsData: null,
        };
    }

    startTimer = () => {
        let timer = setInterval(this.manageTimer, 2000);
        this.setState({ timer });
    }

    manageTimer = () => {
        var states = this.state;

        if (states.counter === 0) {
            clearInterval(this.state.timer);
            this.setState({
                counter: 1000,
            });
            this.props.navigation.reset({ index: 0, routes: [{ name: 'LoginStack' }] });
            if (this.state.userDetailsData != null) {
                //Go to Dashboard
            } else {
                //Go to sign in
                // this.props.navigation.replace('OtpScreen');
            }
        }
        else {
            this.setState({
                counter: this.state.counter - 1,
            });
        }
    }

    componentDidMount() {
        // this.getuserDetail();
        if (Platform.OS == 'ios' ) {
            this.props.navigation.reset({ index: 0, routes: [{ name: 'LoginStack' }] });
            if (this.state.userDetailsData != null) {
                //Go to dashboard
            } else {
                //Go to Sign up
                // this.props.navigation.replace('OtpScreen');
            }
        } else {
            this.startTimer();
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{ height:'70%', width:'70%', resizeMode:'contain' }}
                    source={require('../images/logo.jpeg')}
                />
                 <Wave size={60} color="#FEE9B0"/>
            </View>
        );
    }
}