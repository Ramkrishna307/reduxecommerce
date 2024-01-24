import axios from "axios"

export default axios.create({
    // baseURL:"https://img.omdbapi.com",
    baseURL:"http://www.omdbapi.com/?i=tt3896198&apikey=91569c31",
})