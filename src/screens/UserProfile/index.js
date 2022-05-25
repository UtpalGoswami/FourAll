import React, {useEffect, useState} from 'react';
import {View, Text, Keyboard, Image, SafeAreaView, Alert} from 'react-native';
import {colors, I18n} from '../../constants';
import {Spinner} from '../../components';
// Style
import styles from './style';

/**
 * @class UserProfile
 * @param  {Object} navigation - Use for navigation
 */
export default UserProfile = ({route, navigation}) => {
  const {userDetails} = route.params;

  /**
   * @description spinner {string} - Spinner for wait login user request.
   */

  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    console.log('UserProfile : ', JSON.stringify(userDetails));
  }, []);

  return (
    <SafeAreaView style={styles.safeView}>
      {spinner ? (
        <Spinner />
      ) : (
        <View style={styles.container}>
          <View style={styles.titleView}>
            <View style={styles.profileImgView}>
              <Image
                source={{uri: userDetails.thumb}}
                style={styles.profileImg}
              />
            </View>
            <View style={styles.profileTextView}>
              <Text style={styles.profileText}>{userDetails.title}</Text>
            </View>
          </View>
          <View style={styles.detailView}>
            <Text>Details</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
