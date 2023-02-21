import axios from "axios";
import {inferenceApiConfig, chunksApiConfig} from "./config";

class API {
    async sendQuestion (value) {
        const answersData = await this.getAnswer(value)
        if (answersData.data) {
            return await this.getChunks(answersData.data.chunks)
        }
    }

    async getChunks(chunks = []) {
        const filteredChunks = chunks.filter((chunk) => chunk.confidence > 70)
        const results = []
        if (filteredChunks.length !== 0) {
            for (const chunk of filteredChunks) {
                const result = await this.getChunkByID(chunk)

                if (result) {
                    results.push(result)
                }
            }
        }
        return results
    }

    async getAnswer(question) {
        const { url, headers } = inferenceApiConfig
        return await axios.post(url+ '/ask', { question }, { headers })
    }

    async getChunkByID(chunk) {
        const { url, headers } = await this.getChunksApiConfig()
        const { data } = await axios.get(url + '/chunks/' + chunk.chunkId, { headers });
        if (data) {
            return { answer: data, confidence: chunk.confidence, id: chunk.chunkId }
        }
    }

    async getChunksApiConfig () {
        const config = chunksApiConfig
        const { data } = await axios.post(config.url + '/auth/generate-token', {}, { headers: config.headers })
        if (data?.token) {
            config.headers.get.Authorization = data.token
        }
        return config
    }
}

export default API
