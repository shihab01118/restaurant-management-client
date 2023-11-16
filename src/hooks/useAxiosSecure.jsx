import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem("access-token");
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  axiosSecure.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    console.log("error in the interceptors", error.response.status);
    return Promise.reject(error)
  })

  return axiosSecure;
};
export default useAxiosSecure;
