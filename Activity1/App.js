import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('');
  const [address, onChangeAddress] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [school, onChangeSchool] = React.useState('');
  const [course, onChangeCourse] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [comment, onChangeComment] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
           placeholder={"Name :"}
       
         
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="AGE :"
          keyboardType="numeric"
        />
      <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          placeholder={"Address :"}
        />
    <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          placeholder={"School :"}
        />
    <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          placeholder={"Course :"}
                  />
    <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder={"Email:"}
        />
    <TextInput
          style={styles.input}
          onChangeText={onChangeComment}
          placeholder={"Contact :"}
            keyboardType="numeric"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
  };

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;