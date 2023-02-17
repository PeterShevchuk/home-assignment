export const inferenceApiConfig = {
    url: 'https://inference-runner.hw.ask-ai.co',
    headers: {
        common: {
            'X-API-Key': '3211bc12-9ba4-4169-b8a3-dbc92494fa76'
        }
    }
};

export const chunksApiConfig = {
    url: 'https://chunk-holder.hw.ask-ai.co',
    headers: {
        common: {
            'X-API-Key': 'd486a94c-29f4-453a-a822-f909a97dbfa7'
        },
        get: {
            'Authorization': ''
        }
    }
};
