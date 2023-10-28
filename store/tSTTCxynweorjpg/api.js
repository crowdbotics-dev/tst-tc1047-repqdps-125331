import axios from "axios"
import {
  TST_TC1047XYNWEORJPG_USERNAME,
  TST_TC1047XYNWEORJPG_PASSWORD
} from "react-native-dotenv"
const tSTTCxynweorjpg = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047XYNWEORJPG_USERNAME,
    password: TST_TC1047XYNWEORJPG_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
