import React, { useEffect, useState } from 'react';
import { View, Text, Keyboard, Image, SafeAreaView, Alert, ScrollView } from 'react-native';
import { Header } from '../../components';
// Style
import styles from './style';

/**
 * @class TermsAndConditions
 * @param  {Object} navigation - Use for navigation
 */
export default TermsAndConditions = ({ navigation }) => {

  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait login user request.
   */

  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    console.log('TermsAndConditions');
  }, []);


  return (
    <SafeAreaView style={styles.safeView}>
      <Header
        title={'Terms And Conditions'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.scroll}>
          <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate est in enim dictum suscipit. Vivamus aliquam venenatis
            convallis. Phasellus at turpis interdum, maximus risus et, imperdiet
            nis. Sed a lacinia turpis, vel ultricies justo. Nullam vulputate justo
            elit get mauris gravida, vitae scelerisque metus vehicula. Nulla
            ultricies odio nibh, quis mattis nisi imperdiet vel. Donec vitae erat
            tempor, sagittis est tincidunt, fringilla lorem. Proin fringilla mauris
            lacus, sit amet ornare justo posuere eget. Vivamus convallis ac
            quam vitae malesuada. Quisque quis neque scelerisque leo loborti
            s pretium laculis quis sem. Morbi elit sapien, egestas sed eleifend at,
            aliquam et lectus. Morbi at lobortis lacus.</Text>
          <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate est in enim dictum suscipit. Vivamus aliquam venenatis
            convallis. Phasellus at turpis interdum, maximus risus et, imperdiet
            nis. Sed a lacinia turpis, vel ultricies justo. Nullam vulputate justo
            elit get mauris gravida, vitae scelerisque metus vehicula. Nulla
            ultricies odio nibh, quis mattis nisi imperdiet vel. Donec vitae erat
            tempor, sagittis est tincidunt, fringilla lorem. Proin fringilla mauris
            lacus, sit amet ornare justo posuere eget. Vivamus convallis ac
            quam vitae malesuada. Quisque quis neque scelerisque leo loborti
            s pretium laculis quis sem. Morbi elit sapien, egestas sed eleifend at,
            aliquam et lectus. Morbi at lobortis lacus.</Text>
          <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate est in enim dictum suscipit. Vivamus aliquam venenatis
            convallis. Phasellus at turpis interdum, maximus risus et, imperdiet
            nis. Sed a lacinia turpis, vel ultricies justo. Nullam vulputate justo
            elit get mauris gravida, vitae scelerisque metus vehicula. Nulla
            ultricies odio nibh, quis mattis nisi imperdiet vel. Donec vitae erat
            tempor, sagittis est tincidunt, fringilla lorem. Proin fringilla mauris
            lacus, sit amet ornare justo posuere eget. Vivamus convallis ac
            quam vitae malesuada. Quisque quis neque scelerisque leo loborti
            s pretium laculis quis sem. Morbi elit sapien, egestas sed eleifend at,
            aliquam et lectus. Morbi at lobortis lacus.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}