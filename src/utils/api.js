import axios from "axios"

const base_url = '';

const options = {}

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${base_url}/${url}`)
    return data
}