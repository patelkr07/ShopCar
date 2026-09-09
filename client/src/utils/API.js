import axios from "axios";

export default {

    getCar: function(query) {
        return axios.get("/api/cars", {
            params: {
                make: query
            }
        });
    },

    getVideo: function(query) {
        return axios.get(
            "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" +
            query +
            "&key=" +
            process.env.REACT_APP_YOUTUBE_KEY
        )
    }

}