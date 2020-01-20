import Axios from "axios"

// import  {postAxios,getAxios} from ''
export default class  Service {
getAllBooks(){
    return Axios({
        method: 'GET',
        url:'http://192.168.0.122:3306/books/firstPage'
    })
    .then(result => {
    return result;
    });
}
 }