import axios from "axios";

const API_URL = "http://localhost:9000/user/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      // response.status

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const send = 
 { register,
  login,
  logout,
};
export default send;
