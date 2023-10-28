import axios from "axios"
import {
  TST_TC1047KURLSGLHUC_USERNAME,
  TST_TC1047KURLSGLHUC_PASSWORD
} from "react-native-dotenv"
const tSTTCkurlsglhuc = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047KURLSGLHUC_USERNAME,
    password: TST_TC1047KURLSGLHUC_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
