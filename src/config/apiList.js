export default {
    user: {
        login: 'login',
        register: 'register',
        logout: 'logout',
        current: 'current_user',
        list: 'users',
        delete: 'users/',
        info: 'users/',
        add: 'users',
        //admin
        update: 'users/',
        //profile
        updateUserProfile: 'users/',
        password: {
            forget: 'password/forgot',
            change: 'password/change'
        }
    },
    global: {
        permissionList: 'users/permissions',
        extraData: "extra_data",
        uploader: "upload"
    },
    blog: {
        tag: {
            list: 'tags',
            add: 'tags',
            singleInfo: 'tags/',
            update: 'tags/',
            delete: 'tags/',
        },
        article: {
            list: "articles",
            add: "articles",
            singleInfo: "articles/",
            update: "articles/",
            delete: "articles/",
        },
        like: {
            likeSingleBlog: 'likes'
        }
    },
    category: {
        list: "categories",
        add: "categories",
        singleInfo: "categories/",
        update: "categories/",
        delete: "categories/",
    },
    comments: {
        list: "comments",
        add: "comments",
        singleInfo: "comments/",
        update: "comments/",
        delete: 'comments/',
        acceptedOrReject: "comments/changeStatus/",
        singleArticleComments: 'content/'
    },
    signal: {
        list: "signals",
        add: "signals",
        singleInfo: "signals/",
        singleUpdate: "signals/",
        singleDelete: "signals/",
        extraData: "signals/extra/data",
        users: {
            list: "user/signals",
            singleInfo: "user/signals/"
        }
    },
    ticket: {
        admin: {
            list: 'tickets',
            recovery: 'tickets/',
            delete: 'tickets/',
            answer: 'tickets_messages'
        },
        user: {
            list: 'current_user/tickets'
        },
        public: {
            add: 'tickets',
            info: 'tickets/',
            extraData: 'tickets/extra/data'
        }
    },
    chart: {
        glassNode: 'glassData/',
        cryptoquant: 'cryptoquant/'
    },
    watchList: {
        list: 'watch-lists',
        update: 'watch-lists',
        delete: 'watch-lists',
        users: 'watch-lists/users'
    },
    portfolios: {
        list: 'portfolios',
        add: 'portfolios',
        update: 'portfolios/',
        delete: 'portfolios/',
        deleteAll: 'coin-portfolios/',
        info: 'portfolios/',
    },
    wallet: {
        list: 'wallets',
        add: 'wallets',
        info: 'wallets/',
        delete: 'wallets/',
        update: 'wallets/'
    },
    coin: {
        list: 'coins'
    },
    notification: {
        send: 'notifications',
        deviceKey: "device-keys"
    },
}