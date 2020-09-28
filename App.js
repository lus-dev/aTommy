import React, { Component, useState } from 'react';
import {
  Button, Text,
  TextInput, View, StyleSheet
} from 'react-native';


export default function main() {
  // const [videoUrl, setVideoUrl] = useState("")
  const [metadata, setMetadata] = useState("")

  return (
    <View styles={containerStyle}>
      <Text>Video URL:</Text>
      <TextInput styles={inputFieldStyle}
        onSubmitEditing={changeVideoUrl} />
      <Text>{JSON.stringify({ metadata })}</Text>
    </View>
  );

  function changeVideoUrl(view) {
    const text = view.nativeEvent.text;
    console.log(text);
    fetchVideo(text);
  }

  function fetchVideo(url) {
    return (
      fetch(url)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          // setVideoUrl(url)
          setMetadata(json)
        })
        .catch(error => { console.log(error) })
    );
  }

}

const containerStyle = StyleSheet.create({
  margin: 10
})

const inputFieldStyle = StyleSheet.create({
  height: 35,
  borderColor: 'gray',
  borderWidth: 1
})