export const server_base_url = "http://172.16.1.224:2063";


let version = `${server_base_url}/api/v1`;
let user = `${version}/user`;


export const api_configs = {
  userLogin: `${user}/userLogin`,
  userSignUp: `${user}/userSignUp`,
 
  
};
