import { Entypo, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default ProfileView = ({ navigation }) => {
  const [hidden, setHidden] = useState(false)
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const initialInputText = ''; // Giá trị ban đầu của inputText

  //  thay doi trang thai bat tat cua thanh tai khoan nguoi dung
  const toggleHiddenText = () => {
    setHidden(!hidden);
  };

  const showDialog = () => {
    setInputText(initialInputText); // Đặt lại giá trị inputText thành giá trị ban đầu
    setIsDialogVisible(true);
  };

  const hideDialog = () => {
    setIsDialogVisible(false);
  };

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleDialogButtonPress = () => {
    if (inputText.trim() !== '') {
      // Xử lý thông tin từ hộp thoại ở đây
      console.log('Input text:', inputText);
    } else {
      setInputText(''); // Xóa giá trị của TextInput
    }
    hideDialog();
  };

  const openModel = () => {
    setModelVisible(true);
  };

  const closeModel = () => {
    setModelVisible(false);
  };

  function ModalUpdateUser() {
    return (
      <View>
        <Modal
          visible={isDialogVisible}
          animationType="fade"
          transparent={true}
        >
          <View style={styles.modalUser}>
            <View style={styles.model}>
              <Text>Nhập thông tin cần sửa:</Text>
              <TextInput
                value={inputText}
                onChangeText={handleInputChange}
                style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 5, fontSize:15 }}
              />

              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'}}>
                <TouchableOpacity onPress={hideDialog}  style={{ width: '50%', marginRight: 10, padding: 5, backgroundColor: 'red'  }}>
                  <Text style={{color:'white', textAlign: 'center'}}>Hủy</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDialogButtonPress}  style={{ width: '50%', padding:5, backgroundColor: '#1E90FF' }}>
                  <Text style={{color:'white', textAlign: 'center'}}>Hoàn Tất</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar3.png' }}
          />
          <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: '800' }}>Jane Doe</Text>
        </View>
      </View>

      <View style={{ marginTop: '30%' }}>
        <Text style={{ fontSize: 20, fontWeight: '800', marginLeft: 20 }}>Thông tin tài khoản</Text>

        {/* thông tin tai khoan nguoi dung */}
        <View style={{ marginTop: 15 }} >
          <TouchableOpacity style={styles.button} onPress={toggleHiddenText}>
            <Ionicons name="person" size={24} color="black" style={{ marginLeft: 10 }} />
            <Text style={{ fontSize: 17, marginLeft: 5 }}>Thông tin tài khoản </Text>
          </TouchableOpacity>
          {hidden && (
            <View style={styles.accountUser}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 16 }}>Chủ tài khoản:</Text>
                <Text style={{ fontSize: 16, paddingLeft: 10 }}>Nguyễn Văn A</Text>
                <TouchableOpacity onPress={showDialog}>
                  <FontAwesome6 name="pen-to-square" size={24} color="black" />
                </TouchableOpacity>
                <ModalUpdateUser />

              </View>

              <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 16 }}>Số điện thoại:</Text>
                <Text style={{ fontSize: 16, paddingLeft: 10 }}>0123456789</Text>
                <TouchableOpacity onPress={showDialog}>
                  <FontAwesome6 name="pen-to-square" size={24} color="black" />
                </TouchableOpacity>
                <ModalUpdateUser />
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 16 }}>Email:</Text>
                <Text style={{ fontSize: 16, paddingLeft: 10 }}>nguyenvana@gmail.com</Text>
                <TouchableOpacity onPress={showDialog}>
                  <FontAwesome6 name="pen-to-square" size={24} color="black" />
                </TouchableOpacity>
                <ModalUpdateUser />
              </View>
            </View>
          )}

          <LinearGradient
            colors={['#00FF7F', '#008B00']}
            start={[0, 0]}
            end={[0, 1]}
            style={{
              height: 5,
              width: '4%',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              height: 50,
              position: 'absolute',
              top: 0,
              left: 18
            }}
          >
            <View></View>
          </LinearGradient>
        </View>

        {/* lich su dat ve */}
        <View style={{ marginTop: 15 }} >
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HistoryOrder")} activeOpacity={0.7}>
            <Entypo name="back-in-time" size={24} color="black" style={{ marginLeft: 10 }} />
            <Text style={{ fontSize: 17, marginLeft: 5 }}>Lịch sử đặt vé</Text>
          </TouchableOpacity>

          <LinearGradient
            colors={['#00FF7F', '#008B00']}
            start={[0, 0]}
            end={[0, 1]}
            style={{
              height: 5,
              width: '4%',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              height: 50,
              position: 'absolute',
              top: 0,
              left: 18
            }}
          >
            <View></View>
          </LinearGradient>
        </View>

        {/* Dang xuat */}
        <View style={{ marginTop: 15 }} >
          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Ionicons name="exit" size={24} color="black" style={{ marginLeft: 10 }} />
            <Text style={{ fontSize: 17, marginLeft: 5 }}>Đăng xuất</Text>
          </TouchableOpacity>

          <LinearGradient
            colors={['#00FF7F', '#008B00']}
            start={[0, 0]}
            end={[0, 1]}
            style={{
              height: 5,
              width: '4%',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              height: 50,
              position: 'absolute',
              top: 0,
              left: 18
            }}
          >
            <View></View>
          </LinearGradient>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#EE82EE',
    height: 120
  },

  headerContent: {
    padding: 30,
    alignItems: 'center',
    marginTop: 10
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#FF6347',
    marginBottom: 10,
  },

  button: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
    width: '85%',
    marginLeft: '7%',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5, // Áp dụng cho Android
  },

  accountUser: {
    backgroundColor: 'white',
    width: '85%',
    height: 130,
    padding: 10,
    marginTop: 5,
    marginLeft: '7%',
    marginRight: '7%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5, // Áp dụng cho Android
  },

  modalUser: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  model: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 8,
  },
})
