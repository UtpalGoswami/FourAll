import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Keyboard,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
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
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    console.log('UserProfile');
  }, []);

  const Reels = () => {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.reelContainer}>
          <View style={styles.thumImgView}>
            <Image source={{uri: userDetails.thumb}} style={styles.thumImg} />
          </View>
          <View style={styles.thumImgView}>
            <Image source={{uri: userDetails.thumb}} style={styles.thumImg} />
          </View>
          <View style={styles.thumImgView}>
            <Image source={{uri: userDetails.thumb}} style={styles.thumImg} />
          </View>
          <View style={styles.thumImgView}>
            <Image source={{uri: userDetails.thumb}} style={styles.thumImg} />
          </View>
          <View style={styles.thumImgView}>
            <Image source={{uri: userDetails.thumb}} style={styles.thumImg} />
          </View>
          <View style={styles.thumImgView}>
            <Image source={{uri: userDetails.thumb}} style={styles.thumImg} />
          </View>
          <View style={styles.thumImgView}>
            <Image source={{uri: userDetails.thumb}} style={styles.thumImg} />
          </View>
          <View style={styles.thumImgView}>
            <Image source={{uri: userDetails.thumb}} style={styles.thumImg} />
          </View>
          <View style={styles.thumImgView}>
            <Image source={{uri: userDetails.thumb}} style={styles.thumImg} />
          </View>
          <View style={styles.thumImgView}>
            <Image source={{uri: userDetails.thumb}} style={styles.thumImg} />
          </View>
          <View style={styles.thumImgView}>
            <Image source={{uri: userDetails.thumb}} style={styles.thumImg} />
          </View>
          <View style={styles.thumImgView}>
            <Image source={{uri: userDetails.thumb}} style={styles.thumImg} />
          </View>
        </View>
      </ScrollView>
    );
  };
  const ChannelsCard = () => {
    return (
      <View style={styles.channelCardView}>
        <View style={styles.channelTopView}>
          <View style={styles.cardTitleView}>
            <Image
              source={{uri: userDetails.thumb}}
              style={styles.profileImg}
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
      <View>
        <Text>Followers</Text>
      </View>
    );
  };

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
              <View style={styles.followView}>
                <View style={styles.followDetailsView}>
                  <Text style={styles.profileText}>500</Text>
                  <Text style={styles.followText}>Followers</Text>
                </View>
                <View style={styles.followDetailsView}>
                  <Text style={styles.profileText}>120</Text>
                  <Text style={styles.followText}>Reels</Text>
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
