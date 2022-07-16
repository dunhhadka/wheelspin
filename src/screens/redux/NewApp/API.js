import axios from 'axios'
export const callAPI=async()=>{
     return await axios({
          method:'GET',
          url:`https://thaoquan.herokuapp.com/api/user`,
          data:null
     }).catch(err=>{
          console.log(err)
     })
}