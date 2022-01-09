import React, { useEffect, useState } from 'react';
import { View, Text, Keyboard, Image, SafeAreaView, Alert } from 'react-native';
import { Header } from '../../components';
// Style
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../constants';

/**
 * @class ContactUs
 * @param  {Object} navigation - Use for navigation
 */
export default ContactUs = ({ navigation }) => {

  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait login user request.
   */

  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    console.log('ContactUs');
  }, []);


  return (
    <SafeAreaView style={styles.safeView}>
      <Header
        title={'Contact us'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.detailsView}>
          <Ionicons
            name="mail"
            color={colors.blue}
            size={15}
            style={styles.iconView}
          />
          <View style={styles.textView}>
            <Text style={styles.titleText}>Email</Text>
            <Text style={styles.descText}>4all@gmail.com</Text>
          </View>
        </View>

        <View style={styles.detailsView}>
          <FontAwesome
            name="phone"
            color={colors.blue}
            size={15}
            style={styles.iconView}
          />
          <View style={styles.textView}>
            <Text style={styles.titleText}>Phone</Text>
            <Text style={styles.descText}>+001 234 567 89</Text>
          </View>
        </View>

        <View style={styles.detailsView}>
          <Ionicons
            name="location"
            color={colors.blue}
            size={15}
            style={styles.iconView}
          />
          <View style={styles.textView}>
            <Text style={styles.titleText}>Address</Text>
            <Text style={styles.descText}>012. Main Street. Gujarat, INDIA.</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}