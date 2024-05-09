import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';


const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.title}>CHÀO MỪNG BẠN ĐẾN VỚI BUS App!</Text>
            <Image source={{uri:'https://res.cloudinary.com/dgsii3nt1/image/upload/v1713676292/welcome_jebocu.png'}} style={styles.image} />
            <Text style={styles.desc}>{'Hãy đến với chúng tôi\n cùng bạn đồng hành khắp nẻo đường'}</Text>
        </View>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, styles.login]} onPress={() => navigation.navigate("TrangChu")}>
                <Text style={styles.buttonText}>Đăng Nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.register]} onPress={() => navigation.navigate("RegisterAccount")}>
                <Text style={styles.buttonText}>Đăng ký</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content :{
        flex:8,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:18,
        color:'#764ba2',
        fontWeight:'bold',
    },
    image:{
        width:270,
        height:210,
        borderRadius:60,
        marginTop:39,
    },
    desc:{
        fontSize:18,
        textAlign:'center',
        marginTop:30,
        color:'#808080'
    },
    buttonsContainer:{
        flex:2,
        flexDirection:'row',
        marginHorizontal:30,
        justifyContent:'space-around'
    },
    button:{
        width: '48%',
        height:50,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold',
    },
    login:{
        backgroundColor:'#2D99AE'
    },
    register:{
        backgroundColor:'green'
    }
});

export default Welcome;