import { Stack } from 'expo-router';
import React from 'react';

import { PostProvider } from './context/PostContext';

export default function App() {
  return (
    <PostProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Blog Posts' }} />
        <Stack.Screen name="PostCreate" options={{ title: 'Create Post' }} />
        <Stack.Screen name="PostEdit" options={{ title: 'Edit Post' }} />
      </Stack>
    </PostProvider>
  );
}
