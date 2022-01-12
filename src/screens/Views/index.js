import React, { useEffect, useState } from 'react';
import { View, Text, Keyboard, Image, SafeAreaView, Alert, FlatList } from 'react-native';
// Images
import Images from '../../utils/Images';
import { Header } from '../../components';
// Style
import styles from './style';

/**
 * @class Views
 * @param  {Object} navigation - Use for navigation
 */
export default Views = ({ navigation }) => {

  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait login user request.
   */

  const [spinner, setSpinner] = useState(false);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Lorem ipsum dolor sit amet',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Lorem ipsum dolor sit amet',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
      title: 'Lorem ipsum dolor sit amet',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6c',
      title: 'Lorem ipsum dolor sit amet',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7d',
      title: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
      title: 'Lorem ipsum dolor sit amet',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6f',
      title: 'Lorem ipsum dolor sit amet',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7g',
      title: 'Lorem ipsum dolor sit amet',
    },
  ];

  useEffect(() => {
    console.log('Views');
  }, []);

  const Item = ({ title }) => (
    <View style={styles.item}>
      <View style={styles.imageView}>
        <Image source={Images.followerIcon} style={styles.logo} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.safeView}>
      <Header
        title={'Views'}
        onPress={() => {
          navigation.goBack();
        }}
        onPressSearch={() => {
          console.log('Search');
        }}
      />
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}