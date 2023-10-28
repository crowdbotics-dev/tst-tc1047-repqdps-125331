import axios from "axios"
import {
  TST_TC1047VLGGHXXXZZ_USERNAME,
  TST_TC1047VLGGHXXXZZ_PASSWORD
} from "react-native-dotenv"
const tSTTCvlgghxxxzz = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047VLGGHXXXZZ_USERNAME,
    password: TST_TC1047VLGGHXXXZZ_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
