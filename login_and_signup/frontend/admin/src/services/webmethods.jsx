import axios from 'axios';
class WebMethod{
    postapi(url,data){
        return axios.post(url,data);
    }
}
export default new WebMethod()