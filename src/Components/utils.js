// import axios from 'axios';
//
// const makeRequestCreator = () => {
//     let token;
//
//     return (query) => {
//         if(token){
//             token.cancel()
//         }
//         token = axios.CancelToken.source()
//         try{
//             const res = await axios(query, {cancelToken: cancel.token})
//             const result = data.data
//             return result;
//         } catch(error) {
//             if(axios.isCancel(error)) {
//                 // Handle if request was cancelled
//                 console.log('Request canceled', error.message);
//             } else {
//                 // Handle usual errors
//                 console.log('Something went wrong: ', error.message)
//             }
//         }
//     }
// }
//
// export const search = makeRequestCreator()