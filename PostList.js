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
  }, [setPosts]);

  const handleDeletePost = async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setPosts(posts.filter(post => post.id !== postId));
    } else {
      alert('Failed to delete post.');
    }
  };

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button title="Edit" onPress={() => navigation.navigate('PostEdit', { postId: item.id })} />
            {item.userId === 1 && (
              <Button title="Delete" onPress={() => handleDeletePost(item.id)} />
            )}
          </View>
        )}
      />
      <Button title="Create Post" onPress={() => navigation.navigate('PostCreate')} />
    </View>
  );
};

export default PostList;
