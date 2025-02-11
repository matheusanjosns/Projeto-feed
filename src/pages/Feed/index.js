import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList,Button , View, Image ,text,ScrollView, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios'
import LazyImage from '../../components/LazyImage';
import  {AsyncStorage} from 'react-native';

import { Container, Post, Header, Avatar, Name, Description, Loading } from './styles';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Like from '../../pages/Like';

export default function Feed() {
  const [error, setError] = useState('');
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [viewable, setViewable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [text, setText] = useState('')
  const [comentarios, setComentarios] = useState([])
  

  const MAX_LENGTH = 250;

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (pageNumber === total) return;
    if (loading) return;

    setLoading(true);
    axios
    .get(`https://5fa103ace21bab0016dfd97e.mockapi.io/api/v1/feed?page=${pageNumber}&limit=4`)
    .then(response => {
      const totalItems = response.headers["x-total-count"]
      const data = response.data
    

      setLoading(false)
      setTotal(Math.floor(totalItems / 4));
      setPage(pageNumber + 1);
      setFeed(shouldRefresh ? data : [...feed, ...data]);
    })
    .catch(err => {
      setError(err.message);
      setLoading(true)
    })
  }

  async function refreshList() {
    setRefreshing(true);
    
    await loadPage(1, true);

    setRefreshing(false);
  }

  const onGet = (id) => {
    try {
      const value = AsyncStorage.getItem(id);
      if (value !== null) {
        
        setComentarios(value)
      } 
    } catch (error) {
      

    }
  }

  const onSave = async (id) => {
    try {
      await AsyncStorage.setItem(id, text);
      setComentarios([...comentarios, ...text])
    } catch (error) {
      

    }
  }

  useEffect(() => {
    loadPage()
  }, []);

  const renderItem = ({item}) => {
    return (
      <View>
        <Post>
          
            <Header>
              <Avatar source={{ uri: item.author.avatar}} />
              <Name>{item.author.name}</Name>              
            </Header>
          
            <LazyImage
              aspectRatio={item.aspectRatio} 
              shouldLoad={viewable.includes(item.id)} 
              smallSource={{ uri: item.small }}
              source={{ uri: item.image }}
            />
            
            <Like>

            </Like>
            
            <Description>
              <Name>{item.author.name}</Name> {item.description}
            </Description>
            <Description>
              {comentarios}
            </Description>

            <View>
              
              <TextInput
              multiline={true}
              onChangeText={(text) => setText(text)}
              placeholder={"Comentários"}
              style={[styles.text]}
              maxLength={MAX_LENGTH}
              value={text}/>

            </View>   
              <Button
              title="Publicar"
              onPress={() => onSave(String(item.id))}
              accessibilityLabel="Publicar"              
              >
           

            </Button>

        </Post>
      </View>
    )
  }
  
  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed.map(({ item }) => item.id));
  }, []);

  return (
    <Container>
      <FlatList
        key="list"
        data={feed}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        ListFooterComponent={loading && <Loading />}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 10,
        }}
        showsVerticalScrollIndicator={false}
        onRefresh={refreshList}
        refreshing={refreshing}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadPage()}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
    text: {
     fontSize: 30,
     lineHeight: 33,
     color: "#333333",
     padding: 16,
     paddingTop: 16,
     minHeight: 170,
     borderTopWidth: 1,
     borderColor: "rgba(212,211,211, 0.3)"
    }, 
    Actions:{
      flexDirection:'row'
    },
    leftActions:{
      left: 5, 
    },
    difeActions:{
      left: 10,
  }
}
)
