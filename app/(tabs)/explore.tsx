import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, TextInput, Button, View } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (title.trim() === '' || description.trim() === '') {
      alert('Both fields are required!');
      return;
    }

    const newElement = {
      title,
      description,
    };

    // Here you can handle the submission, like sending newElement to an API or updating state
    console.log('Element Created:', newElement);
    alert('Element Created!');
    
    // Clear the form
    setTitle('');
    setDescription('');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Create New Element</ThemedText>
      </ThemedView>
      
      <View style={styles.formContainer}>
        <ThemedText style={styles.label}>Title</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={title}
          onChangeText={setTitle}
        />
        <ThemedText style={styles.label}>Description</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Enter description"
          value={description}
          onChangeText={setDescription}
        />
        <Button title="Create Element" onPress={handleSubmit} />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  formContainer: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    color: 'white',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
