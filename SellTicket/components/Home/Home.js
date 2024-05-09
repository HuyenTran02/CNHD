import React, { useState } from 'react'
import {StyleSheet,View, Text, TouchableOpacity, Image, ScrollView, StatusBar, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import CarouselTrending from './CarouselTrending';
export default Home = ({navigation}) => {
  const data = [
    {
        image: require('./Image/CV.jpg')
    },
    {
        image: require('./Image/hinhCV.jpg')
    },
    {
        image: require('./Image/hinhCV1.jpg')
    },
];

  return(
        <View style={{flex:1}}>
         <StatusBar barStyle="light-content" />
            {/* khung tim kiem */}
        <View style={{flex: 2, backgroundColor: '#1E90FF', position: 'relative'}}>
          <View style={{padding: 10, paddingTop: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Image
                source={require('./Image/bus-logo.png')}
                style={{ width: 70, height: 30, resizeMode: 'contain' }}/>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>BUS</Text>
            </View>
          </View>
        </View>
        {/* #F0F0F0 */}
        <View style={{flex: 8, backgroundColor: '#F0F0F0'}}>
          {/* <ScrollView style={{ marginTop: 350, zIndex: 999}}>
            <CarouselTrending data={data} />
          </ScrollView> */}
        </View>

        <View style={styles.ItemSreach}>
          <View style={{width:'95%', height:'95%'}}>
            <View style={{margin:10}}>
              <Text style={{fontSize: 18}}>Từ</Text>
              <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="car-arrow-left" size={24} color="#808080" style={{marginRight: 5}} />
                <TextInput style={styles.InputText}   placeholder="Thành phố, khu vực, điểm lên xe" ></TextInput>
              </View>
            </View>

            <View style={{margin:10}}>
              <Text style={{fontSize: 18}}>Đến</Text>
              <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="car-arrow-right" size={24} color="#808080" style={{marginRight: 5}} />
                <TextInput style={styles.InputText}  placeholder="Thành phố, khu vực, điểm lên xe" ></TextInput>
              </View>
            </View>

            <View style={{margin:10}}>
              <Text style={{fontSize: 18}}>Ngày khởi hành</Text>
              <View style={{flexDirection: 'row'}}>
                <Fontisto name="date" size={24} color="#808080" style={{marginRight: 10}}/>
                <TextInput style={styles.InputText}  placeholder="Ngày khởi hành" ></TextInput>
              </View>
            </View>

            <View style={{margin:10}}>
              <Text style={{fontSize: 18}}>Ghế</Text>
              <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="seat-passenger" size={24} color="#808080" style={{marginRight: 10}} />
                <TextInput style={styles.InputText}  placeholder="Thành phố, khu vực, điểm lên xe" ></TextInput>
              </View>
            </View>

            <TouchableOpacity  style={styles.buttonSreach} onPress={() => navigation.navigate("Busses")}>
              <Text style={{fontSize: 20, color: 'white', textAlign: 'center', fontWeight: '600'}}>Tìm kiếm</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
  )
}

const styles = StyleSheet.create({
  ItemSreach: {
        top: 60,
        left: 18,
        right: 18,
        width: '91%',
        height: '60%',
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 9,
        borderWidth: 1,
        borderColor: '#DCDCDC',
        borderRadius: 25,
        justifyContent: 'space-between',
        alignItems: 'center'
  },

  buttonSreach: {
    width: '100%',
    backgroundColor: '#FF8C00', 
    height: '11%',
    borderRadius: 5, 
    padding: 7,
    marginTop: 20
  },
  
  InputText: {
    borderColor: '#C0C0C0',
    borderBottomWidth: 1,
    width: '90%'
  }
})