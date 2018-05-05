export const SET_DROPDOWN_MENU_OPENED = "SET_DROPDOWN_MENU_OPENED";
export const SET_DROPDOWN_MENU_CLOSED = "SET_DROPDOWN_MENU_CLOSED";

export function setDropdownMenuOpened() {
    return {
        type: SET_DROPDOWN_MENU_OPENED
    }
}

export function setDropdownMenuClosed() {
    return {
        type: SET_DROPDOWN_MENU_CLOSED
    }
}

