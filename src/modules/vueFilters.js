const date = (value) => {
    if (!value) return ''
    return value.split('T')[0];
}

const time = (value) => {
    if (!value) return ''
    return value.split('T')[1].split('.')[0];
}

const separator = (value) => {
    if (!value) return ''
    return value.replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export default {
    date,
    time,
    separator
}