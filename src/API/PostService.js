import axios from "axios";

export default class PostService {
    static async getAll(limit=10, page=1) {
        
            const response = await axios.get('https://jservice.io/api/clues', {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            return response;

    }
}