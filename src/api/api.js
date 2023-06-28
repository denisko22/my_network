
import axios, * as others from 'axios';
let instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{'API-KEY':'47231fc5-d738-49b3-8906-d60d052741ab'},
})
export const usersAPI = {
    getUsers(pageSize = 1,currentPage = 10){ 
   return instance.get(`users?count=${pageSize}&page=${currentPage}`)
    .then(response=>{
    return response.data;   
  })
},
followUser(userId){
    return instance.post(`follow/${userId}`).then(response=>{
                                    return response.data;
                            
                              
                              
                          })
},
unfollowUser(userId){
    return instance.delete(`follow/${userId}`).then(response=>{
                                    return response.data;

                          })
},
getUserData(){
  return  instance.get(`auth/me`)
    .then(response=>{
      return response.data
    }
      )
        
  },
  setContent(userId){
    console.warn('obsolete method is used. Please change to profileAPI obj');
   
      return profileAPI.setContent(userId)
   
 
  }
   
}
export const profileAPI = {
 
setContent(userId){
 return instance.get(`profile/${userId}`).then(response=>{
     
    return response.data
 
})
},
getStatus(userId){
  return instance.get(`profile/status/${userId}`).then(response=>{
     
    return response.data
 
})
},
updateStatus(status){
  return instance.put(`profile/status`, {status}).then(response=>{
     
    return response.data
 
})
},
savePhoto(photoFile){
  const formData = new FormData()
  formData.append('image',photoFile)
  return instance.put('profile/photo',formData,{
    headers:{
      'Content-Type':'multipart/form-data'
    }
  }).then(response=>{
     
    return response.data
 
})
},
saveProfile(profile){

  return instance.put('profile',profile).then(response=>{
     
    return response.data
 
})
}
}

export const authAPI = {
  login(email,password,rememberMe,captcha = null){
    return instance.post(`auth/login`, {email,password,rememberMe,captcha}).then(response=>{
                                    return response.data;  
                          })
},
logout(){
  return instance.delete(`auth/login`).then(response=>{
                                  return response.data;  
                        })
},
}

export const securityAPI = {
  getCaptchaUrl(){
    return instance.get(`security/get-captcha-url`).then(response=>{
      return response.data
    }
      
    )
  }
}
