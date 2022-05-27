import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {colors, I18n} from '../../constants';
// Images
import Images from '../../utils/Images';
import {Spinner, Header} from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    console.log('UserProfile');
  }, []);

  const ReelDataList = [
    {
      thumb: userDetails.thumb,
      durations: '01:00',
    },
    {
      thumb: userDetails.thumb,
      durations: '01:01',
    },
    {
      thumb: userDetails.thumb,
      durations: '01:02',
    },
    {
      thumb: userDetails.thumb,
      durations: '01:03',
    },
    {
      thumb: userDetails.thumb,
      durations: '01:04',
    },
    {
      thumb: userDetails.thumb,
      durations: '01:05',
    },
    {
      thumb: userDetails.thumb,
      durations: '01:06',
    },
    {
      thumb: userDetails.thumb,
      durations: '01:00',
    },
    {
      thumb: userDetails.thumb,
      durations: '01:01',
    },
    {
      thumb: userDetails.thumb,
      durations: '01:02',
    },
    {
      thumb: userDetails.thumb,
      durations: '01:03',
    },
    {
      thumb: userDetails.thumb,
      durations: '01:04',
    },
    {
      thumb: userDetails.thumb,
      durations: '01:05',
    },
    {
      thumb: userDetails.thumb,
      durations: '01:06',
    },
  ];

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

  const Item = ({title}) => (
    <View style={styles.item}>
      <View style={styles.imageView}>
        <Image source={Images.followerIcon} style={styles.logo} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );

  const renderItem = ({item}) => <Item title={item.title} />;

  const renderReelsItem = ({item, index}) => (
    <View>
      {console.log('mod : ' + (index % 7))}
      {index % 7 === 0 || index % 7 === 1 ? (
        <View style={styles.thumImgView}>
          <Image source={{uri: item.thumb}} style={styles.thumImg} />
          <View style={styles.durationsView}>
            <AntDesign name="caretright" size={12} color={colors.white} />
            <Text style={styles.durationsText}>{item.durations}</Text>
          </View>
        </View>
      ) : index % 7 === 2 || index % 7 === 3 ? (
        <View
          style={
            index % 7 === 2
              ? styles.thumImgViewSplitMain
              : [styles.thumImgViewSplitMain, styles.thumImgViewSplitMainBottom]
          }>
          <View style={styles.thumImgViewSplit}>
            <Image source={{uri: item.thumb}} style={styles.thumImg} />
            <View style={styles.durationsView}>
              <AntDesign name="caretright" size={12} color={colors.white} />
              <Text style={styles.durationsText}>{item.durations}</Text>
            </View>
          </View>
          <View style={styles.thumImgViewSplit}>
            <Image source={{uri: item.thumb}} style={styles.thumImg} />
            <View style={styles.durationsView}>
              <AntDesign name="caretright" size={12} color={colors.white} />
              <Text style={styles.durationsText}>{item.durations}</Text>
            </View>
          </View>
        </View>
      ) : index % 7 === 4 || index % 7 === 5 ? null : index % 7 === 6 ? (
        <View style={styles.thumImgFullView}>
          <Image source={{uri: item.thumb}} style={styles.thumImg} />
          <View style={styles.durationsView}>
            <AntDesign name="caretright" size={12} color={colors.white} />
            <Text style={styles.durationsText}>{item.durations}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.thumImgView}>
          <Image source={{uri: item.thumb}} style={styles.thumImg} />
          <View style={styles.durationsView}>
            <AntDesign name="caretright" size={12} color={colors.white} />
            <Text style={styles.durationsText}>{item.durations}</Text>
          </View>
        </View>
      )}
    </View>
  );

  const Reels = () => {
    return (
      <View>
        <FlatList
          data={ReelDataList}
          numColumns={3}
          renderItem={renderReelsItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.reelsList}
        />
      </View>
    );
  };

  const ChannelsCard = () => {
    return (
      <View style={styles.channelCardView}>
        <View style={styles.channelTopView}>
          <View style={styles.cardTitleView}>
            <Image
              source={{uri: userDetails.thumb}}
              style={styles.profileChannelImg}
            />
            <View style={styles.cardTitleTextView}>
              <Text numberOfLines={2} style={styles.cardTitleText}>
                {userDetails.title}
              </Text>
              <Text numberOfLines={2} style={styles.cardsubTitleText}>
                Publish on 20 Jan 2021
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.channelBottomView}>
          <View style={styles.cardDetailsView}>
            <Text style={styles.cardText}>Followers</Text>
            <Text style={styles.cardCountText}>500</Text>
          </View>
          <View style={styles.cardDetailsView}>
            <Text style={styles.cardText}>Subscribers</Text>
            <Text style={styles.cardCountText}>125</Text>
          </View>
          <View style={styles.cardDetailsView}>
            <Text style={styles.cardText}>Videos</Text>
            <Text style={styles.cardCountText}>100</Text>
          </View>
        </View>
      </View>
    );
  };

  const Channels = () => {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.channelContainer}>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
          <View>
            <ChannelsCard />
          </View>
        </View>
      </ScrollView>
    );
  };

  const Followers = () => {
    return (
      <View style={styles.followerContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.followList}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeView}>
      {spinner ? (
        <Spinner />
      ) : (
        <View style={styles.container}>
          <View style={styles.headerView}>
            <Header
              title={userDetails.title}
              onPress={() => {
                navigation.goBack();
              }}
              bgColor={colors.mint}
            />
          </View>
          <View style={styles.titleView}>
            <View style={styles.profileImgView}>
              <Image
                source={{uri: userDetails.thumb}}
                style={styles.profileImg}
              />
            </View>
            <View style={styles.profileTextView}>
              <View style={styles.followView}>
                <View style={styles.followDetailsView}>
                  <Text style={styles.profileText}>120</Text>
                  <Text style={styles.followText}>Reels</Text>
                </View>
                <View style={styles.followDetailsView}>
                  <Text style={styles.profileText}>500</Text>
                  <Text style={styles.followText}>Followers</Text>
                </View>
                <View style={styles.followDetailsView}>
                  <Text style={styles.profileText}>123</Text>
                  <Text style={styles.followText}>Following</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.detailView}>
            <View style={styles.tabView}>
              <TouchableOpacity
                style={
                  selectedIndex === 0
                    ? [styles.tabTitleView, styles.tabTitleViewSelect]
                    : styles.tabTitleView
                }
                onPress={() => {
                  setSelectedIndex(0);
                }}>
                <Text
                  style={
                    selectedIndex === 0
                      ? [styles.tabTitleText, styles.tabTitleTextSelected]
                      : styles.tabTitleText
                  }>
                  Reels
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  selectedIndex === 1
                    ? [styles.tabTitleView, styles.tabTitleViewSelect]
                    : styles.tabTitleView
                }
                onPress={() => {
                  setSelectedIndex(1);
                }}>
                <Text
                  style={
                    selectedIndex === 1
                      ? [styles.tabTitleText, styles.tabTitleTextSelected]
                      : styles.tabTitleText
                  }>
                  Channels
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  selectedIndex === 2
                    ? [styles.tabTitleView, styles.tabTitleViewSelect]
                    : styles.tabTitleView
                }
                onPress={() => {
                  setSelectedIndex(2);
                }}>
                <Text
                  style={
                    selectedIndex === 2
                      ? [styles.tabTitleText, styles.tabTitleTextSelected]
                      : styles.tabTitleText
                  }>
                  Followers
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tabDetailView}>
              {selectedIndex === 0 ? (
                <Reels />
              ) : selectedIndex === 1 ? (
                <Channels />
              ) : (
                <Followers />
              )}
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
