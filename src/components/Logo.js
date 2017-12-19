import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImg from '../image/logo.png';

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={logoImg} style={styles.image} resizeMode="contain" resizeMethod="resize" />
				<Text style={styles.text}>REACT LOGO</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column'
	},
	image: {
		width: 180,
		height: 70,
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 10,
	}
});
