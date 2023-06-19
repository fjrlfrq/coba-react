const instance = axios.create({
    baseURL: 'https://localhost:3000/users',
    timeout: 1000,
    headers: { 'Authorization': 'token' }
});

export const loadUserSuccess = (data) => ({
    type: 'LOAD_USER',
    data
})

export const loadUser = (dispatch) => ({
    return axios.get('users').then().catch() //error atau belum ada axiosnya
})

export const addUser = (name, phone) => ({
    type: 'ADD_USER',
    name,
    phone
})