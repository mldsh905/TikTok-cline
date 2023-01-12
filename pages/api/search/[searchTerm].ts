import type { NextApiRequest, NextApiResponse } from 'next'
import {client} from "../../../utils/client";
import {searchPostsQuery} from "../../../utils/queries";

export default async function handler(req: NextApiRequest, res: NextApiResponse
) {
    if (req.method === 'GET'){
        if (req.query.searchTerm){
            const {searchTerm} = req.query;
            const videoQuery = searchPostsQuery(searchTerm);
            const videos = await client.fetch(videoQuery);
            res.status(200).json(videos)
        }

    }
}
