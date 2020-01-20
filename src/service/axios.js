import axios from 'axios';

const header = {
    headers:{
        'Content-Type': 'application/json'
    }
}
url:'http://192.168.0.122:3306/books/firstPage'

export function getAxios(url,callback) {
    console.log('header is ', baseurl.baseUrl + url);
    axios.get(baseurl.baseUrl + url, authRequired ? header:null)
    .then(function(data){
    return callback(null,data)
    })
    .catch(function(err){
    callback(err);
    })
    }