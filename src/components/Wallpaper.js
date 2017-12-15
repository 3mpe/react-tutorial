
import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import bgSrc from '../image/bg.jpg';

export default class Wallpaper extends Component {
	render() {
		return (
			<View>
				<Image style={styles.picture} source={bgSrc} />
					{this.props.children}
			</View>
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
