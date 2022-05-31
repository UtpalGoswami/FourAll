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
  requesttermsAndConditions,
  ontermsAndConditionsResponse,
} from '../../redux/actions/termsAndConditionsActions';
// Style
import styles from './style';

/**
 * @class TermsAndConditions
 * @param  {Object} navigation - Use for navigation
 */
export default TermsAndConditions = ({navigation}) => {
  const dispatch = useDispatch();
  /**
   * @description spinner {string} - Spinner for wait help data request.
   */

  const [spinner, setSpinner] = useState(false);
  const [dataList, setDataList] = useState([]);

  const termsAndConditionsResponse = useSelector(
    state => state.termsAndConditionsReducer.termsAndConditionsResponse,
  );

  useEffect(() => {
    return navigation.addListener('focus', () => {
      NetInfo.addEventListener(state => {
        if (state.isConnected) {
          setSpinner(true);
          dispatch(requesttermsAndConditions());
        } else {
          Alert.alert('Please check your internet connection');
        }
      });
    });
  }, []);

  useEffect(() => {
    console.log(
      'termsAndConditionsResponse :',
      JSON.stringify(termsAndConditionsResponse.data),
    );

    const updateLogout = async () => {
      if (
        termsAndConditionsResponse &&
        Object.keys(termsAndConditionsResponse).length !== 0 &&
        termsAndConditionsResponse.hasOwnProperty('status')
      ) {
        if (termsAndConditionsResponse.status === 200) {
          setDataList(termsAndConditionsResponse?.data?.data);
          var setResponse = {};
          dispatch(ontermsAndConditionsResponse(setResponse));
          setSpinner(false);
        } else if (termsAndConditionsResponse.status === 403) {
          setSpinner(false);
          Alert.alert(
            'Alert',
            'The access token has expired and the user signs out successfully.',
          );
        } else {
          if (termsAndConditionsResponse.message) {
            Alert.alert('Error', termsAndConditionsResponse.message);
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
  }, [termsAndConditionsResponse]);

  const renderItem = ({item}) => (
    <Text style={styles.descText}>{item?.value}</Text>
  );

  return (
    <SafeAreaView style={styles.safeView}>
      <Header
        title={'Terms And Conditions'}
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
