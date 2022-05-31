import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import {Header, HideShowView, Spinner} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {requestHelp, onHelpResponse} from '../../redux/actions/helpActions';
import styles from './style';

/**
 * @class Help
 * @param  {Object} navigation - Use for navigation
 */
export default Help = ({navigation}) => {
  const dispatch = useDispatch();
  /**
   * @description spinner {string} - Spinner for wait help data request.
   */

  const [spinner, setSpinner] = useState(false);
  const [dataList, setDataList] = useState([]);

  const helpResponse = useSelector(state => state.helpReducer.helpResponse);

  useEffect(() => {
    return navigation.addListener('focus', () => {
      NetInfo.addEventListener(state => {
        if (state.isConnected) {
          setSpinner(true);
          dispatch(requestHelp());
        } else {
          Alert.alert('Please check your internet connection');
        }
      });
    });
  }, []);

  useEffect(() => {
    console.log('helpResponse :', JSON.stringify(helpResponse.data));

    const updateLogout = async () => {
      if (
        helpResponse &&
        Object.keys(helpResponse).length !== 0 &&
        helpResponse.hasOwnProperty('status')
      ) {
        if (helpResponse.status === 200) {
          setDataList(helpResponse?.data?.data);
          var setResponse = {};
          dispatch(onHelpResponse(setResponse));
          setSpinner(false);
        } else if (helpResponse.status === 403) {
          setSpinner(false);
          Alert.alert(
            'Alert',
            'The access token has expired and the user signs out successfully.',
          );
        } else {
          if (helpResponse.message) {
            Alert.alert('Error', helpResponse.message);
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
  }, [helpResponse]);

  const renderItem = ({item}) => (
    <HideShowView title={item.question} desc={item.answer} />
  );

  return (
    <SafeAreaView style={styles.safeView}>
      <Header
        title={'Help'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      {spinner ? (
        <View style={styles.mainView}>
          <Spinner />
        </View>
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
