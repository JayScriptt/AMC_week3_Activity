import React from 'react';
import { StyleSheet, TextInput, Image, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const MultilineTextInputExample  = () => {
  const [name, onChangeName] = React.useState('');
  const [age, onChangeAge] = React.useState('');
  const [address, onChangeAddress] = React.useState('');
  const [school, onChangeSchool] = React.useState('');
  const [course, onChangeCourse] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [comment, onChangeComment] = React.useState('');
  const [aboutMe, onChangeAboutMe] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.content}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://cdn5.vectorstock.com/i/1000x1000/37/84/name-icon-male-user-person-profile-avatar-symbol-vector-23703784.jpg')}
          />
            <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          placeholder={"Name :"}
      
        
        />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://static.vecteezy.com/system/resources/previews/010/310/977/non_2x/age-icon-on-white-background-age-limit-sign-age-symbol-reliability-logo-flat-style-vector.jpg')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAge}
            value={age}
            placeholder={"Age :"}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://th.bing.com/th/id/OIP.QvzuseLwjlrCEFWNxY0YswHaG_?rs=1&pid=ImgDetMain')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={address}
            placeholder="Address:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://static.vecteezy.com/system/resources/previews/000/592/910/original/vector-school-icon.jpg')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeSchool}
            value={school}
            placeholder="School:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://static.vecteezy.com/system/resources/previews/014/734/420/original/course-icon-free-vector.jpg')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCourse}
            value={course}
            placeholder="Course:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://static.vecteezy.com/system/resources/previews/000/564/255/original/vector-email-symbol-icon.jpg')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://icon-library.com/images/contact-us-icon-png/contact-us-icon-png-4.jpg')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeComment}
            value={comment}
            placeholder="Contact:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://th.bing.com/th/id/OIP.Weg7GkB2G16OpWynKYGwuAHaHw?rs=1&pid=ImgDetMain')}
          />
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={(text) => onChangeAboutMe(text)}
            placeholder="About Me: "
            value={aboutMe}
            style={styles.textInput}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    borderBottomColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 12,
    width: "100%",
  },
  row: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 20,
  },
  image: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
});

export default MultilineTextInputExample ;