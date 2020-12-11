import React, { Component,  useState, useEffect} from 'react';

import { 
  View, 
  Text, 
  Image,
  Dimensions,
  StyleSheet,
  Platform,
  TouchableOpacity
 } from 'react-native';

export default function components() {

const [like, setDeslike] = useState(false)

const getLike = (like) => {
  if(like > 0 ){
    return require("../../../src/instagram-icons/likeC.png")
  }
  return require("../../../src/instagram-icons/like.png")
}

  const curtitFoto = () => {
    setDeslike(!like)
  }


  return (
    <View style={styles.container}> 
          <View style={styles.containerLike}>
            <TouchableOpacity onPress={curtitFoto}>
                <Image source={getLike(like)} style={styles.like} />
            </TouchableOpacity>
            
         </View>

   </View>
  );
}

const margin = Platform.OS === 'ios' ? 40 : 0
const largura = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  img:{
    width: largura, 
    height: largura
  },
  container: {
    marginTop: margin
  },
  like:{
    width: 20,
    height: 20,
    margin: 10
  },
  description:{
    margin: 10
  },
  containerLike:{
    flexDirection: 'row',
    alignItems: 'center'
  }
})