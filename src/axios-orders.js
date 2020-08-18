import axios from 'axios'

const instance = axios.create({
    baseURL: "https://burger-app-react-4c508.firebaseio.com/"
})

export default instance;