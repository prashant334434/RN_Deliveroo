import React, {useState, useEffect} from 'react';
import {View, Button, Image, StyleSheet, Platform} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ExampleEditor = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Any initial setup or side effects can go here
  }, []);

  const pickImage = async () => {
    try {
      const options = {
        mediaType: 'mixed', // 'photo' or 'video' or 'mixed'
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };

      const response = await ImagePicker.launchImageLibrary(options);

      if (!response.didCancel) {
        const source = {uri: response.uri};
        setSelectedImage(source);
      }
    } catch (error) {
      console.error('ImagePicker Error: ', error);
    }
  };

  return (
    <View style={styles.container}>
      {selectedImage && (
        <Image
          source={selectedImage}
          style={styles.image}
          resizeMode="contain"
        />
      )}
      <Button title="Pick Image/Video" onPress={pickImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
});

export default ExampleEditor;
