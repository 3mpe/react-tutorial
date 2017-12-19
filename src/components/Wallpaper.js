
import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import bgSrc from '../image/bg.jpg';

export default class Wallpaper extends Component {
	render() {
		return (
			<ImageBackground source={bgSrc} style={styles.picture} >
					{this.props.children}
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	picture: {
		flex: 1,
		width: null,
		height: null,
    alignSelf: 'strecth',
		resizeMode: 'cover',
	}
});
