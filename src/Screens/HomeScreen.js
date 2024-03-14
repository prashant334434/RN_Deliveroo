import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from 'react-native-heroicons/outline';
import * as Icon from 'react-native-feather';
import {ScrollView} from 'react-native';
import Categories from '../component/Categories';
import FeaturedRow from '../component/FeaturedRow';
import client from '../../sanity';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategory, setFeaturedCategory] = useState();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `

     *[_type == "featured"] {
      ...,
      restaurants []->{
        ...,
        dishes[]->[]
    
    }
    
    }
     `,
      )
      .then(data => {
        setFeaturedCategory(data);
      });
  }, []);
  console.log(client);
  return (
    <SafeAreaView style={tw`bg-white pt-5`}>
      {/*header*/}
      <View style={tw`flex-row pb-3 items-center mx-4 space-x-2 `}>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
        />

        <View style={tw`flex-1 mx-2`}>
          <Text style={tw`font-bold text-gray-400 text-xs `}>Deliver Now!</Text>
          <Text tyle={tw`font-bold text-xl `}>
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/*search*/}
      <View style={tw`flex-row items-center space-x-2 pb-2 mx-4  `}>
        <View style={tw`flex-row flex-1 space-x-2 bg-gray-200 p-3`}>
          <Icon.Search color="gray" size={20} opacity={0.5} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <Icon.Sliders color="#00CCBB" />
      </View>

      {/*body*/}
      <ScrollView
        style={tw`bg-gray-100`}
        contentContainerStyle={{
          paddingBottom: 100,
        }}>
        {/*categories*/}
        <Categories />

        {/* featured rows*/}

        {featuredCategory?.map(category => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
