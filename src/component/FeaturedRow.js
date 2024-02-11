import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
// import ResturantCard from './ResturantCard';
import client from '../../sanity';
import ResturantCard from './RestaurantCart';

const FeaturedRow = ({id, title, description}) => {
  const [restaurants, setRestaurants] = useState();
  useEffect(() => {
    client
      .fetch(
        `
            *[_type == "featured" && _id == $id] {
                ...,
               restaurants[]->{
                 ...,
                 dishes[]->,
                 type-> {
                    name
                 }
               },
              }[0]
            `,
        {id},
      )
      .then(data => {
        setRestaurants(data?.restaurants);
      });
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4">
        {/*restaurentcard....*/}

        {restaurants?.map(res => (
          <ResturantCard
            key={res._id}
            id={res._id}
            imgUrl={res.image}
            address={res.address}
            title={res.name}
            dishes={res.dishes}
            rating={res.rating}
            short_description={res.short_description}
            genre={res.type?.name}
            long={res.long}
            lat={res.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
