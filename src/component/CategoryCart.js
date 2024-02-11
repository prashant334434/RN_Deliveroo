import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {urlFor} from '../../sanity';
// import {urlFor} from '../../sanity';
import tw from 'twrnc';

const CategoryCart = ({imageUrl, title}) => {
  return (
    <TouchableOpacity style={tw`relative mr-2`}>
      <Image
        source={{
          uri: urlFor(imageUrl).url(),
        }}
        style={tw`h-20 w-20 rounded`}
      />
      <Text style={tw`absolute bottom-1 left-1 text-white font-bold`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCart;
