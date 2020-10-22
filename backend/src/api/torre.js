'use strict';
const client = require('axios');

module.exports = {

    jobSearch: async (offset, user) => {
        try {
            let response = await client.post(`https://search.torre.co/opportunities/_search/?offset=${offset}&size=10&aggregate=true`, {
                bestfor: {
                    username: user,
                }
            });
            return response;
        } catch (error) {
            throw error;
        }
    },
    getJobInfo: async (id) => {
        try {
            let response = await client.get(`https://torre.co/api/opportunities/${id}`);
            return response;
        } catch (error) {
            throw error;
        }
    },
    getBioInfo: async (user) => {
        try {
            let response = await client.get(`https://torre.bio/api/bios/${user}`);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

