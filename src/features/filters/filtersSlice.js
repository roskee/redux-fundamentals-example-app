const initialState = {
    status: 'All',
    colors: []
}
const updateColors = (colors, payload) => {
    if (payload.changeType === 'added') {
        return [...colors, payload.color]
    } else if (payload.changeType === 'removed') {
        let newColors = [...colors]
        newColors.splice(colors.indexOf(payload.color), 1)
        return newColors
    }
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'filters/statusFilterChanged':
            return {
                ...state,
                status: action.payload
            }
        case 'filters/colorFilterChanged':
            return {
                ...state,
                colors: updateColors(state.colors, action.payload)
            }
        default:
            return state
    }
}