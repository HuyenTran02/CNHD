import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default Busses = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
            <TouchableOpacity style={styles.Item} onPress={() => navigation.navigate("Ticket")} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 12 }}>
                    <Text style={{ fontSize: 16, fontWeight: '700' }}>Hoa Mai</Text>
                    <Text style={{ fontSize: 16, fontWeight: '700', color: '#FF8C00' }}>150000 VNĐ
                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#808080' }}>/chỗ</Text>
                    </Text>
                </View>

                <Text style={{ marginLeft: 10, marginTop: 5, marginBottom: 10 }}>Số ghế trống: 10
                    <Text style={{ fontSize: 14, fontWeight: '400', color: 'red' }}>/30</Text>
                </Text>

                <View style={{ marginTop: 10, marginLeft: 5, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <Text style={{ width: '13%', textAlign: 'center' }}>04:30</Text>
                        <FontAwesome name="circle-o" size={24} color="black" style={{ width: '10%' }} />
                        <Text style={{ width: '70%' }}>Văn phòng quận 1A</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="ellipsis-vertical-outline" size={24} color="black" style={{ marginLeft: '12.5%' }} />
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <Text style={{ width: '13%', textAlign: 'center' }}>06:30</Text>
                        <FontAwesome name="circle" size={24} color="black" style={{ width: '10%' }} />
                        <Text style={{ width: '70%' }}>Bến xe Bà Rịa 1</Text>
                    </View>
                </View>

                <View style={styles.icon}>
                    <AntDesign name="customerservice" size={18} color="black" />
                    <Ionicons name="wifi" size={18} color="black" />
                    <MaterialCommunityIcons name="usb-port" size={18} color="black" />
                    <MaterialCommunityIcons name="battery-charging" size={18} color="black" />
                    <MaterialCommunityIcons name="presentation-play" size={18} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Item} onPress={() => navigation.navigate("Ticket")} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 12 }}>
                    <Text style={{ fontSize: 16, fontWeight: '700' }}>Hoa Mai</Text>
                    <Text style={{ fontSize: 16, fontWeight: '700', color: '#FF8C00' }}>150000 VNĐ
                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#808080' }}>/chỗ</Text>
                    </Text>
                </View>

                <Text style={{ marginLeft: 10, marginTop: 5, marginBottom: 10 }}>Số ghế trống: 10
                    <Text style={{ fontSize: 14, fontWeight: '400', color: 'red' }}>/30</Text>
                </Text>

                <View style={{ marginTop: 10, marginLeft: 5, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <Text style={{ width: '13%', textAlign: 'center' }}>04:30</Text>
                        <FontAwesome name="circle-o" size={24} color="black" style={{ width: '10%' }} />
                        <Text style={{ width: '70%' }}>Văn phòng quận 1A</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="ellipsis-vertical-outline" size={24} color="black" style={{ marginLeft: '12.5%' }} />
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <Text style={{ width: '13%', textAlign: 'center' }}>06:30</Text>
                        <FontAwesome name="circle" size={24} color="black" style={{ width: '10%' }} />
                        <Text style={{ width: '70%' }}>Bến xe Bà Rịa 1</Text>
                    </View>
                </View>

                <View style={styles.icon}>
                    <AntDesign name="customerservice" size={18} color="black" />
                    <Ionicons name="wifi" size={18} color="black" />
                    <MaterialCommunityIcons name="usb-port" size={18} color="black" />
                    <MaterialCommunityIcons name="battery-charging" size={18} color="black" />
                    <MaterialCommunityIcons name="presentation-play" size={18} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Item} onPress={() => navigation.navigate("Ticket")} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 12 }}>
                    <Text style={{ fontSize: 16, fontWeight: '700' }}>Hoa Mai</Text>
                    <Text style={{ fontSize: 16, fontWeight: '700', color: '#FF8C00' }}>150000 VNĐ
                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#808080' }}>/chỗ</Text>
                    </Text>
                </View>

                <Text style={{ marginLeft: 10, marginTop: 5, marginBottom: 10 }}>Số ghế trống: 10
                    <Text style={{ fontSize: 14, fontWeight: '400', color: 'red' }}>/30</Text>
                </Text>

                <View style={{ marginTop: 10, marginLeft: 5, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <Text style={{ width: '13%', textAlign: 'center' }}>04:30</Text>
                        <FontAwesome name="circle-o" size={24} color="black" style={{ width: '10%' }} />
                        <Text style={{ width: '70%' }}>Văn phòng quận 1A</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="ellipsis-vertical-outline" size={24} color="black" style={{ marginLeft: '12.5%' }} />
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <Text style={{ width: '13%', textAlign: 'center' }}>06:30</Text>
                        <FontAwesome name="circle" size={24} color="black" style={{ width: '10%' }} />
                        <Text style={{ width: '70%' }}>Bến xe Bà Rịa 1</Text>
                    </View>
                </View>

                <View style={styles.icon}>
                    <AntDesign name="customerservice" size={18} color="black" />
                    <Ionicons name="wifi" size={18} color="black" />
                    <MaterialCommunityIcons name="usb-port" size={18} color="black" />
                    <MaterialCommunityIcons name="battery-charging" size={18} color="black" />
                    <MaterialCommunityIcons name="presentation-play" size={18} color="black" />
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Item: {
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 10,
        width: '95%',
        height: 230,
        padding: 10,
        margin: 10
    },

    icon: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#C0C0C0',
        borderRadius: 10,
        padding: 5,
        width: 120,
        justifyContent: 'space-evenly',
        marginTop: 3,
        marginLeft: 10
    }
})