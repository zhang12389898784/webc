import axios from "axios";
const request = axios.create({
  baseURL: "http://123.207.197.133:8091",
});
const request1 = axios.create({
  baseURL: "http://1.13.163.6:8091",
});
export  function getVideolist(params: any){
    return request.get("/video/pageFind",{params})
}
export function getLog(params: any){
  return request1.get("/log/get",{params})
}