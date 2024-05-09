import { useContext } from "react";
import { Button } from "react-native";
import MyContext from "../../MyContext";

export default Logout = ()=>{
    const [user, dispatch] = useContext(MyContext);

    const logout = () => {
        dispatch({
            'type': 'logout'
        })
    }

    return <Button title="Logout" onPress={logout}></Button>
}