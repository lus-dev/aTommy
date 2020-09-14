import React, { Component } from 'react';
import {
  Button, Text,
  TextInput, View
} from 'react-native';


export default class aTommy extends Component {

  state = {
    url: "",
    video: "Response"
  };

  changeVideoUrl = (view) => {
    const text = view.nativeEvent.text;
    console.log(text);
    this.setState(state => {
      this.fetchVideo(text);
    });
  };

  render() {
    return (<View
      style={{ margin: 10 }}>

      <Text>Video URL:</Text>
      <TextInput
        style={{
          height: 35,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onSubmitEditing = {value => this.changeVideoUrl(value)} />
      <Text>{JSON.stringify(this.state.video)}</Text>
    </View>
   );
  }

  fetchVideo = (url) => {
    return (fetch(url)
    .then(response => response.json())
    .then(json => { 
      console.log(json);
      this.setState({ url: url, video: json });
    })
    .catch(error => { console.log(error) }));
  };

}