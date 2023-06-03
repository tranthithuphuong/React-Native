import React, { useState, useEffect} from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';






const User = () => {
  


    return (
      <View style={styles.container}>
        
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f2f2f2',
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
      backgroundColor: '#ffffff',
      borderRadius: 8,
      padding: 12,
    },
    avatar: {
      width: 64,
      height: 64,
      borderRadius: 32,
      marginRight: 12,
    },
    textContainer: {
      flex: 1,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    details: {
      fontSize: 14,
      color: '#888888',
    },
  });
  
export default User;
