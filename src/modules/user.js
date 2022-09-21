const User = {
    data: {
    },

    hasData() {
        return this.data.name !== undefined
    },
    resetData() {
        this.data = {
        }
    }
}
export const user = User
