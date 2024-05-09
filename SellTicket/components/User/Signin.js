import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; // Import icon từ thư viện Expo
import MyContext from '../../config/MyContext';
import {client_id, client_secret} from '../../key/Key_app'
import { authApi, endpoints } from '../../config/Apis';


const Signin = ({ navigation }) => {
  const [user, dispatch] = useContext(MyContext);
  const [loading, setLoading] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
        let res = await Apis.post(endpoints['login'], {
          "username": username, 
          "password": password,
          "client_id": client_id,
          "client_secret": client_secret,
          "grant_type": "password"
        });

        console.info(res.data)

        await AsyncStorage.setItem('access-token', res.data.access_token)
        let user = await authApi(res.data.access_token).get(endpoints['current_user']);
        console.info(user.data)
        dispatch({
                    'type': 'login',
                    'payload': {
                        'username': user.data.username
                    }
                })
        navigation.navigate('Trang chủ');    
    } catch (error) {
        console.error(error);
    } finally{
        setLoading(false);
    }
  };

  return (
    <LinearGradient colors={['#2D99AE', '#764ba2']} style={styles.container} 
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <View style={styles.formContainer}>
        <Text style={styles.welcomeText}>Welcome!!</Text>
        <View style={[styles.inputView, styles.inputBorder]}>
        <AntDesign name="user" size={24} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.inputText}
            placeholder="Tên đăng nhập"
            placeholderTextColor="#fff"
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={[styles.inputView, styles.inputBorder]}>
        <AntDesign name="lock" size={24} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.inputText}
            placeholder="Mật khẩu"
            placeholderTextColor="#fff"
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.checkboxContainer} onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.checkboxText}>{showPassword ? 'Ẩn' : 'Hiển thị'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={styles.registerTextContainer}>
          <Text style={styles.registerText}>Bạn có tài khoản? </Text>
          <TouchableOpacity>
            <Text style={[styles.registerText, styles.registerLink]}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '80%',
    borderWidth: 2,
    borderRadius: 25,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 20,
    paddingTop: 40,
    borderColor: '#fff', 
    borderStyle: 'solid',
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  inputText: {
    height: 50,
    color: '#fff',
    flex: 1,
    
  },

  checkboxContainer: {
    marginLeft: 10,
  },
  checkboxText: {
    color: '#fff',
  },
  loginBtn: {
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  welcomeText: {
    fontFamily: 'Tohoma', // Tên của font chữ
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  loginText: {
    color: '#764ba2',
  },
  registerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    color: '#fff',
  },
  registerLink: {
    textDecorationLine: 'underline',
  },
  icon: {
    marginRight: 10,
  },
});

export default Signin;
