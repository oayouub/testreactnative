import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'Match 1', description: 'Bondy' },
  { id: '2', title: 'Match 2', description: 'Paris' },
{ id: '4', title: 'Match 3', description: 'Toulouse' },
{ id: '5', title: 'Match 3', description: 'Toulouse' },
{ id: '6', title: 'Match 3', description: 'Toulouse' },
{ id: '7', title: 'Match 3', description: 'Toulouse' },
{ id: '8', title: 'Match 3', description: 'Toulouse' },
{ id: '9', title: 'Match 3', description: 'Toulouse' },
{ id: '10', title: 'Match 3', description: 'Toulouse' },
{ id: '11', title: 'Match 3', description: 'Toulouse' },
{ id: '12', title: 'Match 3', description: 'Toulouse' },
  ];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        Liste des match
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  itemContainer: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
