import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_5NZeaVKAF1jHGsX1TGQd455T3hejPBG32lhdp74iIxOq7IKWvZVKnYqgKwTJp1sr";

export function fetchBreeds() {
    const url = 'https://api.thecatapi.com/v1/breeds';

    return axios.get(url).then(response => response.data);
}

export function fetchCatByBreed(breedId) {
    const baseUrl = 'https://api.thecatapi.com/v1/images/search';
    const PARAMS = new URLSearchParams({ breed_ids: breedId });
    const url = `${baseUrl}?${PARAMS}`;

    return axios.get(url).then(response => response.data);
}