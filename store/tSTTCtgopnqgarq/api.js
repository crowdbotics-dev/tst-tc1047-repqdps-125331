import axios from "axios"
import {
  TST_TC1047TGOPNQGARQ_PASSWORD,
  TST_TC1047TGOPNQGARQ_USERNAME
} from "react-native-dotenv"
const tSTTCtgopnqgarq = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047TGOPNQGARQ_PASSWORD,
    password: TST_TC1047TGOPNQGARQ_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
