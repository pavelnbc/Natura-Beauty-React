import axios from 'axios';

export const IMPORT_CATEGORIES = 'IMPORT_CATEGORIES';

export function importCategories() {
    return axios.get('https://our-natural-beauty-server.herokuapp.com/api/v1/categories')
                .then(response => response.data)
                .then(categories => ({
                    type: IMPORT_CATEGORIES,
                    categories
                }))
}