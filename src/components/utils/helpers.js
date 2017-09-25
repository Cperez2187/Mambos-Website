import axios from 'axios';

const helpers = {
    getInstagramFeed() {
    // AJAX request to instagram API
        return axios.get("https://api.instagram.com/v1/users/self/media/recent", {
            params: {
                access_token: "3124545252.1677ed0.40f9e15f60944c48828372ce55095ba2"
            }
        }).then((response) => {
            return response.data.data;
        });
    }
}

export default helpers;