import React from 'react';
import { View, Text, Button } from 'react-native';

const PostItem = ({ post, onEdit, onDelete, userId }) => {
  return (
    <View>
      <Text>{post.title}</Text>
      <Button title="Edit" onPress={onEdit} />
      {userId === 1 && (
        <Button title="Delete" onPress={onDelete} />
      )}
    </View>
  );
};

export default PostItem;
