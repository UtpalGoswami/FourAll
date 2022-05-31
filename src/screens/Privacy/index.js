import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Keyboard,
  Image,
  SafeAreaView,
  Alert,
  FlatList,
} from 'react-native';
import {Header, Spinner} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {
  requestPrivacyPolicy,
  onPrivacyPolicyResponse,
} from '../../redux/actions/privacyPolicyActions';
// Style
import styles from './style';

/**
 * @class Privacy
 * @param  {Object} navigation - Use for navigation
 */
export default Privacy = ({navigation}) => {
  const dispatch = useDispatch();
  /**
   * @description spinner {string} - Spinner for wait help data request.
   */

  const [spinner, setSpinner] = useState(true);
  const [dataList, setDataList] = useState([]);

  const privacyPolicyResponse = useSelector(
    state => state.privacyPolicyReducer.privacyPolicyResponse,
  );

  useEffect(() => {
    return navigation.addListener('focus', () => {
      NetInfo.addEventListener(state => {
        if (state.isConnected) {
          setSpinner(true);
          dispatch(requestPrivacyPolicy());
        } else {
          Alert.alert('Please check your internet connection');
        }
      });
    });
  }, []);

  useEffect(() => {
    console.log(
      'privacyPolicyResponse :',
      JSON.stringify(privacyPolicyResponse.data),
    );

    const updateLogout = async () => {
      if (
        privacyPolicyResponse &&
        Object.keys(privacyPolicyResponse).length !== 0 &&
        privacyPolicyResponse.hasOwnProperty('status')
      ) {
        if (privacyPolicyResponse.status === 200) {
          setDataList(privacyPolicyResponse?.data?.data);
          var setResponse = {};
          dispatch(onPrivacyPolicyResponse(setResponse));
          setSpinner(false);
        } else if (privacyPolicyResponse.status === 403) {
          setSpinner(false);
          Alert.alert(
            'Alert',
            'The access token has expired and the user signs out successfully.',
          );
        } else {
          if (privacyPolicyResponse.message) {
            Alert.alert('Error', privacyPolicyResponse.message);
          } else {
            Alert.alert('Error', 'Something went wrong. Please try again');
          }
          setSpinner(false);
        }
      } else {
        setSpinner(false);
      }
    };
    updateLogout();
  }, [privacyPolicyResponse]);

  const renderItem = ({item, index}) => (
    <View style={styles.scroll}>
      <Text style={styles.titleText}>{item.question}</Text>
      <Text style={styles.descText}>{item.answer}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeView}>
      <Header
        title={'Privacy Policy'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      {spinner ? (
        <Spinner />
      ) : (
        <View style={styles.container}>
          {dataList.length > 0 ? (
            <FlatList
              data={dataList}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          ) : (
            <Text>No data found</Text>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};
