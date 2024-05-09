import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default ReposeUser = () => {
    return (
        <View style={{ flex: 1 }}>
            <TextInput
                style={styles.Input}
                placeholder="Nội dung phản hồi giúp nhà xe có sự cải thiện trong công tác chuẩn bị... Cảm ơn quý khách"
                multiline={true} // Cho phép nhiều dòng
                numberOfLines={10} // Số dòng hiển thị ban đầu
            />

            <TouchableOpacity style={styles.button}>
                <Text style={{color: 'white', fontSize: 20, textAlign: 'center', fontWeight: '700'}}>Phản hồi ý kiến</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Input: {
        width: '95%',
        backgroundColor: 'white',
        fontSize: 16,
        padding: 10,
        borderRadius: 10,
        margin: 10,
        height: 300, // Chiều cao của TextInput
        textAlignVertical: 'top', // Căn lề đầu dòng lên trên
    }, 

    button: {
        width:'95%',
        height: 50,
        margin: 10,
        borderRadius: 30,
        padding: 10,
        backgroundColor: 'green'
    }
})