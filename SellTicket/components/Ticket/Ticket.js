import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";




export default Ticket = ({ navigation }) => {
    const Tab = createMaterialTopTabNavigator();

    function DacTrung() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
                <View style={styles.ItemDT} onPress={() => navigation.navigate("Ticket")}>
                    <View style={{ margin: '4%', }}>
                        <View style={styles.InputText}>
                            <Text style={{ fontSize: 16, fontWeight: 600 }}> Hoa Mai </Text>
                            <Text style={{ marginBottom: 8, marginTop: 5, color: '#696969' }}> Ghế ngồi 16 chỗ</Text>
                        </View>

                        <View style={styles.InputText}>
                            <Text style={{ fontSize: 16, fontWeight: 600 }}> Thông tin xe </Text>
                            <View style={{ marginBottom: 8, marginTop: 5, marginLeft: '2%', color: '#696969' }}>
                                <Text>Kiểu ghế ngồi 1-1 </Text>
                                <Text>Sức chứa của xe</Text>
                            </View>
                        </View>

                        <View style={styles.InputText}>
                            <Text style={{ fontSize: 16, fontWeight: 600 }}> Tiện ích </Text>
                            <View style={{ flexDirection: 'row', marginBottom: 8, marginTop: 15, justifyContent: 'space-evenly' }}>
                                <AntDesign name="customerservice" size={20} color="green" />
                                <Ionicons name="wifi" size={20} color="black" />
                                <MaterialCommunityIcons name="usb-port" size={20} color="black" />
                                <MaterialCommunityIcons name="battery-charging" size={20} color="black" />
                                <MaterialCommunityIcons name="presentation-play" size={20} color="black" />
                            </View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 16, fontWeight: 600 }}> Chính sách đổi hoàn trả </Text>
                            <Text style={styles.Text}> Không áp dụng đổi lịch trình</Text>
                        </View>
                    </View>

                </View>

                <View style={{ marginTop: '5%' }}>
                    <View style={styles.ItemDT2}>
                        <View>
                            <Text style={{ marginTop: '2%', marginLeft: '3%' }}>Đánh giá của hành khách</Text>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.Text2}>4.3/5</Text>
                                <Text style={{ left: 168, color: '#696969' }}>Lái xe</Text>
                                <Text style={{ left: 184, color: '#1E90FF' }}>4.3/5</Text>
                                <Text style={{ top: 20, left: 97, color: '#696969' }}>Tiện ích</Text>
                                <Text style={{ top: 20, left: 103, color: '#1E90FF' }}>4.3/5</Text>
                                <Text style={{ top: 40, left: 16, color: '#696969' }}>Dịch vụ</Text>
                                <Text style={{ top: 40, left: 24, color: '#1E90FF' }}>4.3/5</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: '5%' }}>
                    <View style={styles.ItemDT2}>
                        <View>
                            <Text style={{ marginTop: '2%', marginLeft: '3%' }}>Đánh giá của hành khách</Text>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.Text2}>4.3/5</Text>
                                <Text style={{ left: 168, color: '#696969' }}>Lái xe</Text>
                                <Text style={{ left: 184, color: '#1E90FF' }}>4.3/5</Text>
                                <Text style={{ top: 20, left: 97, color: '#696969' }}>Tiện ích</Text>
                                <Text style={{ top: 20, left: 103, color: '#1E90FF' }}>4.3/5</Text>
                                <Text style={{ top: 40, left: 16, color: '#696969' }}>Dịch vụ</Text>
                                <Text style={{ top: 40, left: 24, color: '#1E90FF' }}>4.3/5</Text>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={{ marginTop: '5%' }}>
                    <View style={styles.ItemDT2}>
                        <View>
                            <Text style={{ marginTop: '2%', marginLeft: '3%' }}>Đánh giá của hành khách</Text>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.Text2}>4.3/5</Text>
                                <Text style={{ left: 168, color: '#696969' }}>Lái xe</Text>
                                <Text style={{ left: 184, color: '#1E90FF' }}>4.3/5</Text>
                                <Text style={{ top: 20, left: 97, color: '#696969' }}>Tiện ích</Text>
                                <Text style={{ top: 20, left: 103, color: '#1E90FF' }}>4.3/5</Text>
                                <Text style={{ top: 40, left: 16, color: '#696969' }}>Dịch vụ</Text>
                                <Text style={{ top: 40, left: 24, color: '#1E90FF' }}>4.3/5</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

        )
    }
    /*ve*/
    function Ve() {
        return (
            <View>
                <Text style={{ fontSize: 20, marginTop: 10, marginLeft: '5%' }}>Thông tin quan trọng</Text>
                <View style={styles.ItemVe}>
                    <Text style={{ fontSize: 18, fontWeight: 600 }}>Điều khoản và điều kiện</Text>
                    <Text>• Vé khởi hành trong giai đoạn Cuối năm và Tết Nguyên đán có thể không được hoàn, đổi lịch. Vui lòng xác nhận ngày khởi hành của bạn trước khi thực hiện thanh toán.</Text>
                    <Text>•	Yêu cầu đeo khẩu trang khi lên xe</Text>
                    <Text>•	Có mặt tại văn phòng/quầy vé/bến xe trước 15 phút để làm thủ tục lên xe</Text>
                    <Text>•	Không mang đồ ăn, thức ăn có mùi lên xe</Text>
                    <Text>•	Không hút thuốc, uống rượu, sử dụng chất kích thích trên xe</Text>
                    <Text>•	Không mang các vật dễ cháy nổ lên xe</Text>
                    <Text>•	Không vứt rác trên xe</Text>
                    <Text>•	Tổng trọng lượng hành lý không vượt quá 15 kg</Text>
                    <Text>•	Trẻ em từ 6 tuổi hoặc cao từ 100 cm trở lên mua vé như người lớn</Text>
                    <Text>•	Công ty xe khách hoạt động từ 7:00 – 22:00 hàng ngày</Text>

                </View>
            </View>
        )
    }

    function TuyenDuong() {
        return (
            <Text> dac trug</Text>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 0.98 }}>
                <Tab.Navigator>
                    <Tab.Screen name="DacTrung" component={DacTrung} options={{ title: 'Đặc trưng' }} />
                    <Tab.Screen name="Ve" component={Ve} options={{ title: 'Vé' }} />
                    <Tab.Screen name="TuyenDuong" component={TuyenDuong} options={{ title: 'Tuyến đường' }} />
                </Tab.Navigator>
            </ScrollView>

            <View style={{ flex: 0.1, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', borderTopWidth: 1, borderColor: '#C0C0C0' }}>
                <Text style={{ fontSize: 20, fontWeight: '700', color: '#FF8C00' }}>150.000 VNĐ
                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#808080' }}>/chỗ</Text>
                </Text>
                <TouchableOpacity style={{ backgroundColor: '#1E90FF', paddingTop: 10, paddingBottom: 10, paddingLeft: 30, paddingRight: 30, borderRadius: 5 }}
                    onPress={() => navigation.navigate("Pay")}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Chọn</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    ItemDT: {
        top: 18,
        left: 18,
        right: 18,
        backgroundColor: 'white',
        width: '91%',
        height: 400,
    },

    InputText: {
        borderColor: '#C0C0C0',
        borderBottomWidth: 1,
        width: '100%',
        lineHeight: 1.5,
        marginBottom: 15,

    },

    Text: {
        width: '60%',
        backgroundColor: '#696969',
        borderRadius: 5,
        marginBottom: 8,
        marginTop: 8,
        color: '#fff',
        padding: 2,
    },

    ItemDT2: {
        top: 18,
        left: 18,
        right: 18,
        backgroundColor: 'white',
        width: '91%',
        height: 120,
    },

    Text2: {
        color: '#1E90FF',
        fontSize: 22,
        marginBottom: '2%',
        marginLeft: '3%',
    },

    ItemVe: {
        top: 18,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',

    }

})