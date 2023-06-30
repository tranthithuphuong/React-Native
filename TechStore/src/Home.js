import { useEffect } from "react";
import { View, Text, Image, TextInput } from "react-native";


export default function Home({navigation, route}) {
    //const { username, password} = route.params;
    // //useEffect{() => {
    //     console.log('username: ', username);
    // }, []}


    return (
        <View style={{
            flex: 1,
            flexDirection: 'column', 
            width: '100%'}} >
            <View style={{
                backgroundColor: '#32a852', 
                flexDirection: 'column', 
                borderWidth:2, 
                borderColor: '#000000', 
                alignItems:'center',
                flexDirection: 'row',
                paddingLeft:10}}>
                <Image source={require('../src/asset/logo.png')} style={{width:100, height:100}}></Image>
                <Text style={{
                    fontSize: 25, 
                    color: "#FFFFFF", 
                    fontWeight:"bold",
                    }}>
                    Tech Store
                </Text>
            </View>

            <View style={{
                flex: 10, 
                backgroundColor: "#ff00ff"
                }}>
                <View style={{
                    backgroundColor:'##ffff', 
                    width: '90%', height: 47,
                    alignSelf:'center',
                    backgroundColor: "#fff", 
                    marginTop:11, 
                    borderRadius:10, 
                    justifyContent: 'center', 
                    borderWidth: 2, 
                    borderColor: '#000000', 
                    flexDirection:'row', 
                    alignItems: 'center'}}>
                    <Image source={require('../src/asset/search.png')} style={{width: 20, height:20,}}></Image>
                    <TextInput  placeholder="Tìm kiếm sản phẩm" style={{width: 300,height: 40,paddingLeft: 8}} />

                </View>

            </View>
            <View style={{flex:1, backgroundColor:'#a83277'}}>

            </View>

        </View>
    )

}