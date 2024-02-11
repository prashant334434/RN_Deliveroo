import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Tst from './src/Tst';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text className="text-green">App</Text>
        <Text className="text-red-300">App</Text>
        <Text className="text-red-600 text-center text-4xl">App</Text>
        <Text className="text-black ">App</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
