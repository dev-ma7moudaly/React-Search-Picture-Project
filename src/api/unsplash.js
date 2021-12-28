import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID JzA29CHDxRXHsj641yoYsvtIffRQn2cLxINWTfkjr14'
    }
});