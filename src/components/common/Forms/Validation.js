
export const required = (value) => (value ? undefined : 'Required')

export const maxLengthCreator = (maxLength) => (value) => {
    return (value) => {
        return (value.length > maxLength ? `Max length ${maxLength} symbols` : undefined)
    }
}
