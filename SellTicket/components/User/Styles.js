import { StyleSheet } from "react-native";

export default Styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
      },
      logoContainer: {
        alignItems: 'center',
        marginTop: 30,
      },
      logo: {
        width: 100,
        height: 100,
        borderRadius:60,
        resizeMode: 'contain',
      },
      formContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 20,
        marginTop: 20,
      },
      card: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        padding: 20,
        marginBottom: 20,
      },
      inputContainer: {
        marginBottom: 20,
      },
      label: {
        fontSize: 16,
        color: '#333',
      },
      input: {
        height: 40,
        borderRadius:6,
        borderWidth: 1,
        borderColor: '#ddd',
        color: '#333',
        paddingLeft:10,
      },
      button: {
        width: '100%',
        height: 40,
        backgroundColor: '#6ad3cc',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      },
})