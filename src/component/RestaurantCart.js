import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {StarIcon} from 'react-native-heroicons/solid';
import {MapIcon, MapPinIcon} from 'react-native-heroicons/outline';
import {urlFor} from '../../sanity';
// import {urlFor} from '../../sanity';
import tw from 'twrnc';
const ResturantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity style={tw`bg-white mr-3 shadow`}>
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        style={tw`h-36 w-64`}
      />
      <View style={tw`px-3 pb-4`}>
        <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
        <View style={tw`flex-row items-center space-x-1`}>
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text style={tw`text-xs text-gray-500 `}>
            <Text style={tw`text-green-500`}>{rating}</Text> . {genre}
          </Text>
        </View>

        <View style={tw`flex-row items-center space-x-1`}>
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text style={tw`text-xs text-gray-500`}>
            NearBy . {address.slice(0, 25)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;
