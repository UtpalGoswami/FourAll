//import liraries
import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
// Style
import styles from './style';

const {width, height} = Dimensions.get('window');

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
    likes: '245k',
    isLike: false,
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
    likes: '245k',
    isLike: false,
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
    likes: '245k',
    isLike: false,
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
    likes: '245k',
    isLike: false,
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
    likes: '245k',
    isLike: false,
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
    likes: '245k',
    isLike: false,
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
    likes: '245k',
    isLike: false,
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
    likes: '245k',
    isLike: false,
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
    likes: '245k',
    isLike: false,
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
    likes: '245k',
    isLike: false,
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
    likes: '245k',
    isLike: false,
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
    likes: '245k',
    isLike: false,
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
    likes: '245k',
    isLike: false,
  },
];

// create a component
const Reel = ({navigation}) => {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mute, setMute] = useState(false);
  const [like, setLike] = useState(false);

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
        <Ionic
          name="volume-mute"
          style={{
            fontSize: mute ? 20 : 0,
            color: 'white',
            position: 'absolute',
            backgroundColor: 'rgba(52,52,52,0.6)',
            borderRadius: 100,
            padding: mute ? 20 : 0,
          }}
        />
        <View
          style={{
            position: 'absolute',
            width: width,
            zIndex: 1,
            bottom: 0, //edited
            padding: 10,
            marginBottom: 80,
          }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('UserProfile', {userDetails: item});
              }}
              style={{width: 150}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 100,
                    backgroundColor: 'white',
                    margin: 10,
                  }}>
                  <Image
                    source={{uri: item.thumb}}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'cover',
                      borderRadius: 100,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{color: 'white', fontSize: 14, fontWeight: '900'}}>
                    {item.title}
                  </Text>
                  <Text style={{color: 'white', fontSize: 13}}>status</Text>
                </View>
              </View>
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontSize: 13,
              }}
              numberOfLines={2}>
              {item.description}
            </Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 120, //edited
            right: 0,
          }}>
          <TouchableOpacity
            onPress={() => setLike(!like)}
            style={{padding: 10}}>
            <AntDesign
              name={!like ? 'heart' : 'hearto'}
              style={{color: like ? 'red' : 'white', fontSize: 25}}
            />
            <Text style={{color: 'white'}}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10}}>
            <Ionic
              name="ios-chatbubble-outline"
              style={{color: 'white', fontSize: 25}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10}}>
            <Ionic
              name="paper-plane-outline"
              style={{color: 'white', fontSize: 25}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10}}>
            <Feather
              name="more-vertical"
              style={{color: 'white', fontSize: 25}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SwiperFlatList
        vertical={true}
        data={videoList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onChangeIndex={onChangeIndex}
        style={styles.itemContainer}
      />
      <View style={styles.headerR}>
        <Entypo name="plus" size={30} color="white" />
      </View>
    </View>
  );
};

//make this component available to the app
export default Reel;
