import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TextInput, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Header, Spinner} from '../../components';
// Redux
import {useDispatch, useSelector} from 'react-redux';
import {
  requestFeedback,
  onFeedbackResponse,
} from '../../redux/actions/feedbackActions';
import NetInfo from '@react-native-community/netinfo';
import styles from './style';

/**
 * @class Feedback
 * @param  {Object} navigation - Use for navigation
 */
export default Feedback = ({navigation}) => {
  const dispatch = useDispatch();
  /**
   * @description spinner {string} - Spinner for wait login user request.
   */

  const [spinner, setSpinner] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const feedbackResponse = useSelector(
    state => state.feedbackReducer.feedbackResponse,
  );

  useEffect(() => {
    console.log(
      'Final feedback Resp : ',
      JSON.stringify(feedbackResponse.data),
    );
    const setLoginResp = async () => {
      if (
        feedbackResponse &&
        Object.keys(feedbackResponse).length !== 0 &&
        feedbackResponse.hasOwnProperty('status')
      ) {
        if (
          feedbackResponse.status === 200 &&
          feedbackResponse.data.status === 'success'
        ) {
          Alert.alert('Success', feedbackResponse?.data?.message, [
            {text: 'OK', onPress: () => navigation.goBack()},
          ]);
          var setResponse = {};
          dispatch(onFeedbackResponse(setResponse));
          setSpinner(false);
        } else if (
          feedbackResponse.status === 200 &&
          feedbackResponse.data.status === 'error'
        ) {
          Alert.alert('Error', feedbackResponse?.data?.message);
        } else if (feedbackResponse.status === 403) {
          Alert.alert('Error 403', 'Logout the user');
        } else {
          setSpinner(false);
          Alert.alert('Error', 'Something went wrong please try again.');
        }
      } else {
        setSpinner(false);
      }
    };
    setLoginResp();
  }, [feedbackResponse]);

  /**
   * @param {} validateRequest - Validate the request
   */
  const validateRequest = () => {
    // Regux string for email validate
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (name === '' || name === null) {
      Alert.alert('4All', 'Name must be required.');
      return false;
    } else if (email === '' || !regex.test(email)) {
      Alert.alert('4All', 'Invalid email.');
      return false;
    } else if (subject === '' || subject === null) {
      Alert.alert('4All', 'Subject must be required.');
      return false;
    } else if (message === '' || message === null) {
      Alert.alert('4All', 'Message must be required.');
      return false;
    } else {
      return true;
    }
  };

  const submit = () => {
    if (validateRequest()) {
      NetInfo.addEventListener(async state => {
        setSpinner(true);
        if (state.isConnected) {
          // Dispatch login request
          dispatch(requestFeedback(name, email, subject, message));
        } else {
          Alert.alert('Error', 'Please check your internet connection.');
        }
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <Header
        title={'Feedback'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      {spinner ? (
        <Spinner />
      ) : (
        <View style={styles.container}>
          <Text style={styles.titleText}>Send us your feedback!</Text>
          <Text style={styles.descText}>
            Do you have a suggestion or found some bug? Lot us kouw in the field
            bellow.
          </Text>
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
            <TouchableOpacity onPress={submit}>
              <View style={styles.btnView}>
                <Text style={styles.loginBtn}>SUBMIT</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
