export const GET_SEARCH_VALUE = "GET_SEARCH_VALUE";
export const DELETE_SEARCH_VALUE = "DELETE_SEARCH_VALUE";

export function getSearchValue(searchValue) {
    return {
        type: GET_SEARCH_VALUE,
        searchValue: searchValue
    }
}

export function deleteSearchValue() {
    return {
        type: DELETE_SEARCH_VALUE
    }
}