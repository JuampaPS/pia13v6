import { Image, StyleSheet, Platform, View, Text, SafeAreaView, TextInput, Button, FlatList } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {


  const [shopdata, setShopdata] = useState ([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ]);



  const [addtext, setAddtext] = useState("");
  const [shoptext, setShoptext] = useState("");


  useEffect(() => {
    loadShopping();
  }, []);


  async function saveShopping() {
    setShoptext(addtext);

    const newshop = [...shopdata, { id: "a", title: addtext}];

await AsyncStorage.setItem ("shoplist")

    setShopdata (newshop);


    await AsyncStorage.setItem("mytext", addtext);
  }

  async function loadShopping() {
    const loadedtext = await AsyncStorage.getItem("mytext");

    if (loadedtext != null) {
      setShoptext(loadedtext);
    }

  }



  return (

    <SafeAreaView>

      <View>
        <Text> {shoptext} </Text>

        <TextInput onChangeText={setAddtext} value={addtext} />

        <Button title='Save' onPress={saveShopping} />


        <FlatList
          data={shopdata}
          renderItem={({ item }) => <Text>{ item.title }</Text>}
          />

      </View>

    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
