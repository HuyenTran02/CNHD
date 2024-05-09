import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Styles from './Styles';
import * as ImagePicker from 'expo-image-picker';
import Apis, { endpoints } from '../../Apis';
import { ActivityIndicator } from 'react-native-paper';
// import { append } from "domutils";

const {width} = Dimensions.get('window');

export default Register = () => {

  const [user, setUser] = useState({
          'first_name': "",
          'last_name': "",
          'email': "",
          'username': "",
          'password': "",
          'cofim_password': "",
          'avatar': ""
      });
  
      const [loading, setLoading] = useState();
  
      const register = async () => {
        
          setLoading(true);

          try {
            if(user.password === user.cofim_password){

              let form = new FormData();
             
              for(key in user){
                
                  if(key ==='avatar'){
                    
                      form.append( key, {
                          uri: user[key].uri,
                          name: user[key].fileName,
                          type: user[key].type
                      })
                  }else
                      form.append(key, user[key]);
              }
              console.info(user.avatar)
            //   const res = await Apis.post(endpoints['register'], form, {
            //       headers:{
            //           "Content-Type": 'multipart/formdata'
            //       }
            //   })
            //   console.info(res.data);
            }
            else{
                alert("2 pass không khớp!!")
            }
          } catch (error) {
              console.error(error);
          } finally{
              setLoading(false);
          }
      }
  
      const change = (field, value)=> {
          setUser(current => {
              return {...current, [field]: value}
          })
      }
  
      const picker = async () => {
          const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if(status!=="granted"){
              alert("Permission denied!");
          }else{
              const res = await ImagePicker.launchImageLibraryAsync();
              if(!res.canceled){
                  change('avatar', res.assets[0]);
              }
          }
      }

  return (
    <View style={Styles.container}>
      <Image
        source={{uri: 'https://www.bootdey.com/image/280x280/00BFFF/000000'}}
        style={Styles.background}
      />
      {/* <View style={Styles.logoContainer}>
        <Image
          source={{uri: 'https://www.bootdey.com/img/Content/avatar/avatar6.png'}}
          style={Styles.logo}
        />
      </View> */}
      <View style={Styles.formContainer}>
        {/* <Text style={Styles.title}>Sign Up</Text> */}
        <View style={Styles.card}>
{/* cuộn */}
        <ScrollView>
{/* fisrt name */}
          <View style={Styles.inputContainer}>
            <Text style={Styles.label} >First Name</Text>
            <TextInput
              style={Styles.input}
              value={user.first_name} onChangeText={t=>change('first_name',t)}
              placeholder="first_name"
              placeholderTextColor="#999"
            />
          </View>
{/* last name */}
          <View style={Styles.inputContainer}>
            <Text style={Styles.label} > Last Name</Text>
            <TextInput
              style={Styles.input}
              value={user.last_name} onChangeText={t=>change('last_name',t)}
              placeholder="last_name"
              placeholderTextColor="#999"
            />
          </View>
{/* mail */}
          <View style={Styles.inputContainer}>
            <Text style={Styles.label}>Email</Text>
            <TextInput
              style={Styles.input}
              value={user.email} onChangeText={t=>change('email',t)}
              placeholder="Email"
              placeholderTextColor="#999"
            />
          </View>
{/* username */}
          <View style={Styles.inputContainer}>
            <Text style={Styles.label}>Username</Text>
            <TextInput
              style={Styles.input}
              value={user.username} onChangeText={t=>change('username',t)}
              placeholder="Username"
              placeholderTextColor="#999"
            />
          </View>
{/* pass */}
          <View style={Styles.inputContainer}>
            <Text style={Styles.label}>Password</Text>
            <TextInput
              style={Styles.input}
              value={user.password} onChangeText={t=>change('password',t)}
              placeholder="password"
              placeholderTextColor="#999"
              secureTextEntry
            />
          </View>
{/* Cofim_pass */}
         <View style={Styles.inputContainer}>
            <Text style={Styles.label}>Cofim Password</Text>
            <TextInput
              style={Styles.input}
              value={user.cofim_password} onChangeText={t=>change('cofim_password',t)}
              placeholder="Cofim password"
              placeholderTextColor="#999"
              secureTextEntry
            />
          </View>
{/* ava */}
        <TouchableOpacity onPress={picker}>
            <Text style={{...styles.button, width: width}} >Chọn avatar....</Text>
        </TouchableOpacity>

        {user.avatar!==""?<Image source={{uri: user.avatar.uri}} style={{width: 100, height: 100, margin: 10}}></Image>:""}

{/* button */}
        {loading===true?<ActivityIndicator/>:<>
          <TouchableOpacity style={Styles.button} onPress={register}>
            <Text style={Styles.button}>Đăng kí</Text>
          </TouchableOpacity>
        </>}
        </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = {
    button: {
        width: '100%',
        height: 30,
        backgroundColor: '#6ad3cc',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginBottom: 6,
      },
  };