import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, TouchableOpacity, Alert, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function login() {

  const [listCustomer, setListCustomer] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();


  const getListCustomer = async() => {
    await fetch('https://60f4d20e2208920017f39df5.mockapi.io/customer')
      .then(response => response.json())
      .then(json => {
        setListCustomer(json)
    console.log('list',listCustomer);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(  () => {
   getListCustomer();
    
    // setCustomerInfor(res) 
  }, [])


  const onDelete = (deleteId) => {
    const newList = listCustomer.filter((item) => item.id !== deleteId);
    setListCustomer(newList);
  };

const renderPost = (item) => {
  return (
    <View style = {{flexDirection: 'row', flexWrap: 'wrap'}}>
      <View style = {{width: "80%", flexDirection: 'row'}}>
    <Text style = {{fontSize: 25, marginLeft: 20, marginTop: 10}}>{item.name}</Text>
    </View>
    <View style = {{alignSelf: 'flex-start', width: "20%"}}>
    <Button title='x' onPress={() => onDelete(item.id)}/>
    </View>
    <Text style = {{marginLeft: 20, marginTop: 10, marginBottom: 5}}>{item.content}</Text>
    <Image style = {{height: 200, width: 350, marginLeft:12}}
    source={{
      uri: item.avatar,
    }}
      />
    </View>
  )
}

const checkValude = () => {

  var check = false
  listCustomer.forEach(element => {
    if(userName == element.username && password == element.password) {
      check = true
    }
  });
  if(check) {
    Alert.alert("Đăng nhập thành công")
  } else {
    Alert.alert("Đăng nhập không thành công")
  }
}

  
  return (
    <View style={styles.container}>
      <Text style = {{fontSize: 30}}>Facebook</Text>
      {/* <Text style = {{fontSize: 30}}>Login</Text>

      
      <StatusBar style="auto" />

      <TextInput
        style={{width: 300, height: 40, borderRadius: 20, borderColor: '#c4c4c4', borderWidth: 1, paddingLeft: 8, marginTop: 20}}
        onChangeText={(text) => {
          setUserName(text)
        }}
        placeholder="input username"
      />
      <TextInput
        style={{width: 300, height: 40, borderRadius: 20, borderColor: '#c4c4c4', borderWidth: 1, paddingLeft: 8, marginTop: 20}}
        onChangeText={(text) => {
          setPassword(text)
        }}
        placeholder="input password"
        secureTextEntry={true}
        keyboardType=""
      />
      <TouchableOpacity style={{marginTop: 30, width: 300, height: 40, borderRadius: 20, alignContent: 'center', justifyContent: "center", backgroundColor: '#ee0033'}} onPress={checkValude}>
        <Text style={{color: "#ffffff", alignSelf: 'center'}}>Login</Text>
        
      </TouchableOpacity> */}


      <FlatList
        data={listCustomer}
        renderItem={({item}) => renderPost(item)}
        keyExtractor={item => item.id}
      />
      
      <NavigationContainer>
        
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30
    // justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
