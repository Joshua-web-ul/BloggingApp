import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const PostEdit = ({ route, navigation }) => {
  const { postId } = route.params;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const data = await response.json();
      setTitle(data.title);
      setBody(data.body);
    };

    fetchPost();
  }, [postId]);

  const handleEditPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    });

    if (response.ok) {
      Alert.alert('Post updated successfully!');
      navigation.goBack();
    } else {
      Alert.alert('Failed to update post.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Body"
        value={body}
        onChangeText={setBody}
        multiline
      />
      <Button title="Update Post" onPress={handleEditPost} />
    </View>
  );
};

export default PostEdit;
