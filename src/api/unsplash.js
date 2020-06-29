import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID mG0WfeAZuHUU1E8EMZY1_XwLmbCTCGSH8Q_KwxxGs6s'
    }
});