import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import axios from 'axios';
import Button from '../AdditionComponent/Button';
// import Detay from './Detay';

class Liste extends Component {
  state = { data: [] };
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ data: response.data }));
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  renderData() {
    return this.state.data.map((responseData, index) =>
      // <Detay key={Id} data={responseData} />
      <View key={index}>
        <Text>{responseData.title}</Text>
        <Button children={'Satin Al'} />
      </View>
    );
  }

  render() {
    console.log(`gelen data ${this.state}`);
    console.log('render');
    return (
      <ScrollView style={{ marginTop: 5 }}>
        {this.renderData()}
      </ScrollView>
    );
  }
}

export default Liste;
