import  Axios  from "axios";

const AxiosInstance = Axios.create({
    baseURL : 'http://universities.hipolabs.com'
});
const CollegeApi = {
    getAll : () => {
        return AxiosInstance.request({
            method:'GET',
            url:'/search'
        })
    },
    getSingle : (id) => {
        return AxiosInstance.request({
            method:'GET',
            url:`/search/${id}`
        })
    },
    create : (user) => {
        return AxiosInstance.request({
            method:'POST',
            url: '/search',
            data : user
        })
    },
    update : (user , id) => {
        return AxiosInstance.request({
            method:'PUT',
            url: `/search/${id}`,
            data:user
        })
    },
    delete : (id) => {
        return AxiosInstance.request({
            method:'DELETE',
            url:`/search/${id}`
        })
    }
}
export default CollegeApi