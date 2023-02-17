import axios from "axios";
import {inferenceApiConfig, chunksApiConfig} from "./config";

class API {
    async sendQuestion (value) {
        const answersData = await this.getAnswer(value)
        if (answersData.data) {
            const token = await this.generateToken()
            return await this.getChunks(answersData.data.chunks, token)
        }
    }

    async getChunks(chunks = [], token) {
        const filteredChunks = chunks.filter((chunk) => chunk.confidence > 70)
        const results = []
        if (filteredChunks.length !== 0 && token) {
            for (const chunk of filteredChunks) {
                const result = await this.getChunkByID(chunk, token)

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

    async getChunkByID(chunk, token) {
        const { url, headers } = this.setTokenToHeaders(chunksApiConfig, token)
        const result = await axios.get(url + '/chunks/' + chunk.chunkId, { headers });
        if (result.data) {
            return { answer: result.data, confidence: chunk.confidence, id: chunk.chunkId }
        }
    }

    async generateToken () {
        const { url, headers } = chunksApiConfig
        const results = await axios.post(url + '/auth/generate-token', {}, { headers })
        return results.data?.token ?? undefined
    }

    setTokenToHeaders(config, token) {
        config.headers.get.Authorization = token
        return config
    }
}

export default API
