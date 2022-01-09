import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Header, HideShowView } from '../../components';
import styles from './style';

/**
 * @class Help
 * @param  {Object} navigation - Use for navigation
 */
export default Help = ({ navigation }) => {

  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait login user request.
   */

  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    console.log('Help');
  }, []);


  return (
    <SafeAreaView style={styles.safeView}>
      <Header
        title={'Help'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.scroll}>
          <HideShowView
            title={'Nam imperdetrsus a amiermentum?'}
            desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulou ale esan enm dcium suscioil. Vivamus alguam venenals convallis'}
          />
          <HideShowView
            title={'In vulputate mauris a tells bibendum vitae dignissim?'}
            desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulou ale esan enm dcium suscioil. Vivamus alguam venenals convallis'}
          />
          <HideShowView
            title={'Fusce accumsan neque ac ex ultricies?'}
            desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulou ale esan enm dcium suscioil. Vivamus alguam venenals convallis'}
          />
          <HideShowView
            title={'Curanituret nis vel velit nendrerit accumsan?'}
            desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulou ale esan enm dcium suscioil. Vivamus alguam venenals convallis'}
          />
          <HideShowView
            title={'Etiam feugiat nulla at orci blandit consectetur?'}
            desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulou ale esan enm dcium suscioil. Vivamus alguam venenals convallis'}
          />
          <HideShowView
            title={'Nam imperdetrsus a amiermentum?'}
            desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulou ale esan enm dcium suscioil. Vivamus alguam venenals convallis'}
          />
          <HideShowView
            title={'Praosont a ipsum vitae anto maximus pharetra?'}
            desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulou ale esan enm dcium suscioil. Vivamus alguam venenals convallis'}
          />
          <HideShowView
            title={'Aliquam ornare risus a nsus conse yencula?'}
            desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulou ale esan enm dcium suscioil. Vivamus alguam venenals convallis'}
          />
          <HideShowView
            title={'Ut pretium dui quis cursus luctu?'}
            desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulou ale esan enm dcium suscioil. Vivamus alguam venenals convallis'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}