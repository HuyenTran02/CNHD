import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather } from '@expo/vector-icons'; // Import icon từ thư viện Expo

const RegisterAccount = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleRegister = () => {
    // Xử lý đăng ký ở đây
    console.log('Họ tên:', fullName);
    console.log('Email:', email);
    console.log('Mật khẩu:', password);
    console.log('Nhập lại mật khẩu:', confirmPassword);
    console.log('Avatar:', avatar);
  };

  return (
  <LinearGradient colors={['#2D99AE', '#764ba2']} style={styles.container}>
  <View style={styles.formContainer}>
    <Text style={styles.title}>Đăng ký tài khoản</Text>
    <ScrollView>
    <View style={styles.inputView}>
      <AntDesign name="user" size={24} color="#fff" style={styles.icon} />
      <TextInput
        style={styles.inputText}
        placeholder="Họ tên"
        placeholderTextColor="#fff"
        onChangeText={(text) => setFullName(text)}
      />
  </View>
  <View style={styles.inputView}>
    <AntDesign name="mail" size={24} color="#fff" style={styles.icon} />
    <TextInput
      style={styles.inputText}
      placeholder="Email"
      placeholderTextColor="#fff"
      onChangeText={(text) => setEmail(text)}
    />
  </View>
  <View style={styles.inputView}>
    <AntDesign name="lock" size={24} color="#fff" style={styles.icon} />
    <TextInput
      style={styles.inputText}
      placeholder="Mật khẩu"
      placeholderTextColor="#fff"
      secureTextEntry={true}
      onChangeText={(text) => setPassword(text)}
    />
  </View>
  <View style={styles.inputView}>
    <AntDesign name="lock" size={24} color="#fff" style={styles.icon} />
    <TextInput
      style={styles.inputText}
      placeholder="Nhập lại mật khẩu"
      placeholderTextColor="#fff"
      secureTextEntry={true}
      onChangeText={(text) => setConfirmPassword(text)}
    />
  </View>

        <TouchableOpacity style={styles.inputView}>
        <Feather name="file" size={24} color="#fff" style={styles.icon} />
          <Text style={[styles.inputText,{marginTop:30}]}>Tải ảnh đại diện</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Đăng ký</Text>
        </TouchableOpacity>
        </ScrollView>
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
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
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
    flex: 1,
    height: 50,
    color: '#fff',
  },
  avatarButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  avatarButtonText: {
    color: '#764ba2',
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButtonText: {
    color: '#764ba2',
    fontSize: 18,
  },
  icon: {
    marginRight: 10,
  },
});

export default RegisterAccount;
