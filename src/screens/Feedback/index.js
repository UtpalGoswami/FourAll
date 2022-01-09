import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Header } from '../../components';
import styles from './style';

/**
 * @class Feedback
 * @param  {Object} navigation - Use for navigation
 */
export default Feedback = ({ navigation }) => {

  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait login user request.
   */

  const [spinner, setSpinner] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('Feedback');
  }, []);


  return (
    <SafeAreaView style={styles.safeView}>
      <Header
        title={'Feedback'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <Text style={styles.titleText}>Send us your feedback!</Text>
        <Text style={styles.descText}>Do you have a suggestion or found some bug?
          Lot us kouw in the field bellow.</Text>
        <View style={styles.detailsView}>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={setSubject}
            value={subject}
            placeholder="Subject"
          />
          <TextInput
            style={styles.inputMessage}
            onChangeText={setMessage}
            value={message}
            placeholder="Message"
            multiline={true}
          />
          <TouchableOpacity
            onPress={() => {
              console.log('Submit');
            }}>
            <View style={styles.btnView}>
              <Text style={styles.loginBtn}>SUBMIT</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}