import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import CustomButtonSmall from '../../components/Profiles/CustomButtonSmall.js'

const ProfileScreen = (props) => {
  const randomData = {
    "owner_name": "123@yahoo.com",
    "display_name": "Alex",
    "dog_name": "Coco",
    "breed": "German Shepherd",
    "size": "Large",
    "age": 3,
    "gender": "Female",
    "personality": "Outgoing",
    "description": "Coco is very outgoing and loves to go on hikes!",
    "photos": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxYy4mS5E0-eG5aKeoTPTtkwal628dGFsrgA&usqp=CAU", "https://www.loveyourdog.com/wp-content/uploads/2022/04/Miniature-Pinscher.jpg"],
    "zipcode": 92105
  };
  console.log('props on profile screen: ', props.route.params.user);
  const [info, setInfo] = useState(randomData);

  const navigation = useNavigation();

  useEffect(() => {

  }, [])

  const clickEdit = () => {
    navigation.navigate('ProfileEdit', { info })
  }

  const clickLogOut = () => {
    navigation.navigate('SignIn');
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#d9edff'}}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
     <Text style={styles.title}>
        My Profile
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: info.photos[0]}}
          resizeMode='cover' resizeMethod='auto'
          style={styles.image}
        />
      </View>
      <View>
        <Text>{info.dog_name}</Text>
      </View>
      <View>
        <Text>{info.breed}</Text>
      </View>
      <View>
        <Text>{info.size}  |  {info.age} years old  |   {info.gender}</Text>
      </View>
      <View>
        <Text>{info.personality}</Text>
      </View>
      <View>
        <Text>{info.zipcode}</Text>
      </View>
      <View>
        <Text>{info.description}</Text>
      </View>
      <View style={styles.btnContainer}>
        <CustomButtonSmall
          text='Edit Profile'
          onPress={clickEdit}
        />
        <CustomButtonSmall
          text='Log out'
          bgColor='#FFC8DD'
          onPress={clickLogOut}
        />
      </View>

    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    // height: '100%',
    height: Dimensions.get('window').height,
    paddingTop: 20,
    paddingBottom: 40,
    marginBottom: 20,
    alignItems: 'center',
    // top: 40,
    backgroundColor: '#d9edff'
  },
  title: {
    color: '#716F81',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    height: '40%'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  btnContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});