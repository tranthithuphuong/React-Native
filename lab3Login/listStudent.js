import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

const ListStudent = ({ route, navigation }) => {
  const { userAdmin } = route.params;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://6475a8c5e607ba4797dc4582.mockapi.io/student/Student'
      );
      const responseData = await response.json();
      setData(responseData);
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      const response = await fetch(
        `https://6475a8c5e607ba4797dc4582.mockapi.io/student/Student/${id}`,
        {
          method: 'DELETE',
        }
      );
      if (response.ok) {
        fetchData();
      } else {
        console.error('Không xóa được sinh viên');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const confirmDeleteStudent = (id) => {
    Alert.alert(
      'Xác nhận xoá',
      'Bạn có chắc chắn muốn xoá sinh viên này?',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Xoá',
          onPress: () => deleteStudent(id),
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        {/* {item.Gender === 1 ? (
          <Image source={require('./assets/male.png')} style={styles.avatar} />
        ) : (
          <Image source={require('./assets/female.png')} style={styles.avatar} />
        )} */}
        <Image source={{uri: item.avatar}} style={styles.avatar} />
        <View style={styles.textContainer}>

          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>{item.Gender === 1 ? "Male" : "Female"}</Text>
          <Text style={styles.details}>Số điện thoại: {item.phoneNumber}</Text>
          <Text style={styles.details}>Địa chỉ: {item.address}</Text>
          <Text style={styles.details}>Ngày sinh: {item.dateOfBirth}</Text>
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => confirmDeleteStudent(item.id)}
        >
          <Image source={require('./assets/delete.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
    <TouchableOpacity
      style={[styles.actionButton, styles.addButton]}
      onPress={() => navigation.navigate('Thêm nhân viên', { user: userAdmin })}
    >
      <Text style={styles.actionButtonTextAdd}>+</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.actionButtonUpdate, styles.updateButton]}
      onPress={() => navigation.navigate('Cập nhật', { user: userAdmin })}
    >
      <Image source={require('./assets/writing.png')} style={styles.actionButtonImg}/>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  
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

  image: {
    width: 32,
    height: 32,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
    justifyContent: 'flex-end',
  },
  //...
  actionButton: {
    position: 'absolute',
    borderRadius: 100,
    paddingVertical: 1,
    paddingHorizontal: 11,
  },
  actionButtonUpdate: {
    position: 'absolute',
    borderRadius: 100,
    // paddingVertical: 5,
    // paddingHorizontal: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  addButton: {
    backgroundColor: '#ff6600',
    left: 16,
    bottom: 20,
  },
  updateButton: {
    backgroundColor: '#007AFF',
    left: 16,
    bottom: 80,
  },
  actionButtonImg: {
   height: 30,
   width: 30,
  },
  actionButtonTextAdd : {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
  }
});
export default ListStudent;
