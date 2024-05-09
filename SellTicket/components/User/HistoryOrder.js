import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default HistoryOrder = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.Item}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>Nguyễn Văn An</Text>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#FF4500' }}>TP.HCM - Đà Lạt</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <Text style={{ fontSize: 15 }}>Số ghế đã đặt: 2</Text>
                    <Text style={{ fontSize: 15 }}>Giá tiền: 240.000 VNĐ</Text>
                </View>

                <Text style={{ fontSize: 15, marginTop: 5 }}>Ngày giờ khởi hành: 12/05/2024 9:00</Text>
                <Text style={{ fontSize: 15, marginTop: 5 }}>Ngày đặt vé: 09/05/2024 18:00</Text>

                <View style={{ flexDirection: 'row', marginTop: 8, justifyContent: 'space-around' }}>
                    <View style={styles.state}>
                        <Text style={{ fontSize: 15, color: 'green', fontWeight: '600', textAlign: 'center' }}>Hoàn thành</Text>
                    </View>

                    <TouchableOpacity style={styles.reponse} onPress={() => navigation.navigate("Reposes")}>
                        <Text style={{ textAlign: 'center', color: 'red' }}>Phản hồi về chuyến đi</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Item: {
        backgroundColor: 'white',
        height: 165,
        width: '94%',
        padding: 10,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        borderColor: '#DCDCDC',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5, // Áp dụng cho Android
    },

    state: {
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 5,
        height: 35,
        width: '30%',
        padding: 5
    },

    reponse: {
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        height: 35,
        width: '53%',
        padding: 5
    }
})