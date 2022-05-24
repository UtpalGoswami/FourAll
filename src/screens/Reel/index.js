//import liraries
import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/EvilIcons';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const {height, width} = Dimensions.get('window');
const videoList = [
  {
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    ],
    subtitle: 'By Blender Foundation',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    title: 'Big Buck Bunny',
  },
  {
    description: 'The first Blender Open Movie from 2006',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    ],
    subtitle: 'By Blender Foundation',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    title: 'Elephant Dream',
  },
  {
    description:
      'HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    ],
    subtitle: 'By Google',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    title: 'For Bigger Blazes',
  },
  {
    description:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    ],
    subtitle: 'By Google',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
    title: 'For Bigger Escape',
  },
  {
    description:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    ],
    subtitle: 'By Google',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
    title: 'For Bigger Fun',
  },
  {
    description:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    ],
    subtitle: 'By Google',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
    title: 'For Bigger Joyrides',
  },
  {
    description:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    ],
    subtitle: 'By Google',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
    title: 'For Bigger Meltdowns',
  },
  {
    description:
      'Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    ],
    subtitle: 'By Blender Foundation',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
    title: 'Sintel',
  },
  {
    description:
      'Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    ],
    subtitle: 'By Garage419',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
    title: 'Subaru Outback On Street And Dirt',
  },
  {
    description:
      'Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    ],
    subtitle: 'By Blender Foundation',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg',
    title: 'Tears of Steel',
  },
  {
    description:
      "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    ],
    subtitle: 'By Garage419',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg',
    title: 'Volkswagen GTI Review',
  },
  {
    description:
      'The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    ],
    subtitle: 'By Garage419',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg',
    title: 'We Are Going On Bullrun',
  },
  {
    description:
      'The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    ],
    subtitle: 'By Garage419',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg',
    title: 'What care can you get for a grand?',
  },
];

// create a component
const Reel = ({navigation}) => {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onBuffer = e => {
    console.log('onBuffer : ', e);
  };

  const videoError = e => {
    console.log('videoError : ', e);
  };
  const onChangeIndex = e => {
    setCurrentIndex(e.index);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.seek(0);
    }
  }, [currentIndex]);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <Video
          source={{
            uri: item.sources[0],
          }}
          poster={item.thumb}
          posterResizeMode="cover"
          ref={videoRef}
          resizeMode="cover"
          onBuffer={onBuffer}
          onError={videoError}
          onLoad={() => console.log('Start load...')}
          onEnd={() => console.log('End load...')}
          repeat
          paused={true}
          // paused={currentIndex !== index}
          style={styles.backgroundVideo}
          selectedVideoTrack={{
            type: 'resolution',
            value: 512,
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SwiperFlatList
        vertical={true}
        data={videoList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onChangeIndex={onChangeIndex}
      />
      <View style={styles.headerL}>
        <Text style={styles.hText}>Reels</Text>
      </View>
      <View style={styles.headerR}>
        <Icon name="camera" size={35} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  itemContainer: {
    flex: 1,
  },
  headerL: {
    position: 'absolute',
    top: 20,
    left: 16,
  },
  headerR: {
    position: 'absolute',
    top: 20,
    right: 16,
  },
  hText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '800',
  },
  backgroundVideo: {
    height: height,
    width: width,
  },
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  bottomProfileView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: 50,
    width: 50,
  },
  bText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
  },
  child: {width, justifyContent: 'center'},
  text: {fontSize: width * 0.5, textAlign: 'center'},
});

//make this component available to the app
export default Reel;
