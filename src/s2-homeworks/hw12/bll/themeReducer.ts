const initState = {
    themeId: 1,
}
type InitStateType = typeof initState
export const themeReducer = (state = initState, action: ChangeThemeIdType): InitStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
               ...state, themeId: action.id
            }

        default:
            return state
    }
}
type ChangeThemeIdType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
