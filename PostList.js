import React, { useEffect, useState, useContext } from 'react';
import { PostContext } from '../context/PostContext';

import { View, Text, FlatList, Button } from 'react-native';

const PostList = ({ navigation }) => {
  const { posts, setPosts } = useContext(PostContext);


  useEffect(() => {
      const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data); 

    };

    fetchPosts();
  }, []);

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button title="Edit" onPress={() => navigation.navigate('PostEdit', { postId: item.id })} />
          </View>
        )}
      />
      <Button title="Create Post" onPress={() => navigation.navigate('PostCreate')} />
      <Button title="Delete" onPress={() => handleDeletePost(item.id)} />


    </View>
  );
};

export default PostList;
