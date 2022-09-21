import store from "@/state/store";
// import modules from "@/modules";

export default [
    {
        path: "/",
        name: "default",
        meta: {
            authRequired: true,
        },
        component: () => import("./views/dashboards/default"),
    },
    //************************************************
    //fast access in mobile device
    //************************************************
    //TECHNICAL
    //************************************************
    {
        path: "/technical",
        name: "default",
        meta: {
            authRequired: true,
        },
        component: () => import("./views/dashboards/MobilePages/Technical"),
    },
    //************************************************
    //FUNDAMENTAL
    {
        path: "/fundamental",
        name: "default",
        meta: {
            authRequired: true,
        },
        component: () => import("./views/dashboards/MobilePages/Fundamental"),
    },
    //************************************************
    //SUPPORTER
    {
        path: "/supporter",
        name: "default",
        meta: {
            authRequired: true,
        },
        component: () => import("./views/dashboards/MobilePages/Supporter"),
    },
    //************************************************
    //LEARNING
    {
        path: "/learning",
        name: "default",
        meta: {
            authRequired: true,
        },
        component: () => import("./views/dashboards/MobilePages/Learning"),
    },
    //************************************************
    //PORTFOLIO
    {
        path: "/portfolio",
        name: "default",
        meta: {
            authRequired: true,
        },
        component: () => import("./views/dashboards/MobilePages/Portfolio"),
    },
    //************************************************
    {
        path: "/login",
        name: "login",
        component: () => import("./views/account/login"),
        meta: {
            beforeResolve(routeTo, routeFrom, next) {
                // If the user is already logged in
                if (store.getters["auth/loggedIn"]) {
                    // Redirect to the home page instead
                    next({ name: "default" });
                } else {
                    // Continue to the login page
                    next();
                }
            },
        },
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("./views/account/register"),
    },
    {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: () => import("./views/account/forgot-password"),
    },
    {
        path: "/change-password",
        name: "ChangePassword",
        component: () => import("./views/account/change-password"),
    },
    {
        path: "/404",
        name: "404",
        component: require("./views/utility/404").default,
    },
    {
        path: "*",
        redirect: "404",
    },
    //*********************** Admin
    //Users
    {
        path: "/admin/user",
        name: 'users',
        meta: { authRequired: true },
        component: () => import("./views/Admin/Users/index")
    },
    //Tags
    {
        path: "/admin/tags",
        name: 'tags',
        meta: { authRequired: true },
        component: () => import("./views/Admin/Tag/index")
    },
    //Category
    {
        path: "/admin/categories",
        name: 'categories',
        meta: { authRequired: true },
        component: () => import("./views/Admin/Category/index")
    },
    //Blog
    {
        path: "/admin/blog",
        name: 'categories',
        meta: { authRequired: true },
        component: () => import("./views/Admin/Blog/index")
    },
    //Comments
    {
        path: "/admin/comments",
        name: 'comments',
        meta: { authRequired: true },
        component: () => import("./views/Admin/Comments/index")
    },
    //signal
    {
        path: "/admin/signal",
        name: 'signal',
        meta: { authRequired: true },
        component: () => import("./views/Admin/Signal/index")
    },
    //ticket
    {
        path: "/admin/ticket",
        name: 'ticket',
        meta: { authRequired: true },
        component: () => import("./views/Admin/Ticket/index")
    },
    {
        path: "/admin/ticket/:id",
        name: 'Ticket Information',
        meta: { authRequired: true },
        component: () => import("./views/Admin/Ticket/info")
    },
    {
        path: "/admin/notification",
        name: 'Notification',
        meta: { authRequired: true },
        component: () => import("./views/Admin/Notification/index")
    },
    
    {
        path: "/chat",
        name: "chat",
        meta: { authRequired: true },
        component: () => import("./views/chat/index"),
    },
    {
        path: "/signal/list",
        name: "Signal",
        meta: { authRequired: true },
        component: () => import("./views/ecommerce/signalList"),
    },
    {
        path: "/signalDetail/:id",
        name: "signalDetail",
        meta: { authRequired: true },
        component: () => import("./views/ecommerce/signalDetail"),
    },
    {
        path: "/trade",
        name: "Trade",
        meta: { authRequired: true },
        component: () => import("./views/ecommerce/weeklyanalysis"),
    },
    {
        path: "/calculationProfitLoss",
        name: "Calculation",
        meta: { authRequired: true },
        component: () => import("./views/ecommerce/Calculation"),
    },
    {
        path: "/blog/list",
        name: "blog-list",
        meta: { authRequired: true },
        component: () => import("./views/blog/list"),
    },
    //Fundamental state
    {
        path: "/blog/:id?",
        name: "blog",
        meta: { authRequired: true },
        component: () => import("./views/blog/list"),
    },
    {
        path: "/blogFundamental/detail/:id",
        name: "blog-detail",
        meta: { authRequired: true },
        component: () => import("./views/blog/detail"),
    },
    {
        path: `/blog/:id`,
        name: "Wallet",
        meta: { authRequired: true },
        component: () => import("./views/crypto/wallet/list"),
    },
    {
        path: `/blogWaller/detail/:id`,
        name: "Wallet",
        meta: { authRequired: true },
        component: () => import("./views/crypto/wallet/detail"),
    },
    {
        path: "/crypto/buy-sell",
        name: "Buy/sell",
        meta: { authRequired: true },
        component: () => import("./views/crypto/buysell/index"),
    },
    {
        path: `/social/:id`,
        name: "Exchange",
        meta: { authRequired: true },
        component: () => import("./views/crypto/exchange/list"),
    },
    {
        path: `/socialDetail/:id`,
        name: "Exchange",
        meta: { authRequired: true },
        component: () => import("./views/crypto/exchange/detail"),
    },
    {
        path: `/project/:id`,
        name: "Lending",
        meta: { authRequired: true },
        component: () => import("./views/crypto/lending/list"),
    },
    {
        path: `/projectDetail/:id`,
        name: "Lending",
        meta: { authRequired: true },
        component: () => import("./views/crypto/lending/detail"),
    },
    {
        path: `/airdrop/:id`,
        name: "crypto-orders",
        meta: { authRequired: true },
        component: () => import("./views/crypto/orders/list"),
    },
    {
        path: `/airdropDetail/:id`,
        name: "crypto-orders",
        meta: { authRequired: true },
        component: () => import("./views/crypto/orders/detail"),
    },
    {
        path: "/crypto/kyc-application",
        name: "kyc-application",
        meta: { authRequired: true },
        component: () => import("./views/crypto/kycapplication/index"),
    },
    {
        path: "/crypto/ico-landing",
        name: "Ico-landing",
        meta: { authRequired: true },
        component: () => import("./views/crypto/ico-landing"),
    },
    //single blog metaverse information
    {
        path: "/metaverseDetail/:id",
        name: "Invoice Detail",
        meta: { authRequired: true },
        component: () => import("./views/invoices/metaverse/detail"),
    },
    {
        path: "/invoices/article/list",
        name: "article",
        meta: { authRequired: true },
        component: () => import("./views/invoices/article/list"),
    },
    {
        path: "/invoices/cource/list",
        name: "article",
        meta: { authRequired: true },
        component: () => import("./views/invoices/cource/list"),
    },
    {
        path: "/invoices/books/list",
        name: "article",
        meta: { authRequired: true },
        component: () => import("./views/invoices/books/list"),
    },
    {
        path: "/invoices/free/list",
        name: "article",
        meta: { authRequired: true },
        component: () => import("./views/invoices/freeVideo/list"),
    },
    {
        path: "/invoices/metaverse",
        name: "Invoice Detail",
        meta: { authRequired: true },
        component: () => import("./views/invoices/metaverse/list"),
    },
    //*********************************************************
    //PORTFOLIO
    //*********************************************************
    {
        path: "/portfolio/watchList",
        name: "Watch List",
        meta: { authRequired: true },
        component: () => import("./views/Portfolio/watchList"),
    },
    {
        path: "/portfolio/create",
        name: "Create Portfolio",
        meta: { authRequired: true },
        component: () => import("./views/Portfolio/create"),
    },
    //single portfolio info
    {
        path: "/portfolio/info/:id",
        name: "Portfolio Info",
        meta: { authRequired: true },
        component: () => import("./views/Portfolio/Info"),
    },
    {
        path: "/portfolio/signals",
        name: "Portfolio Signal",
        meta: { authRequired: true },
        component: () => import("./views/Portfolio/signal"),
    },
    {
        path: "/portfolio/articles",
        name: "Portfolio Articles",
        meta: { authRequired: true },
        component: () => import("./views/Portfolio/articles"),
    },
    {
        path: "/portfolio/connection-wallet",
        name: "Portfolio Connection Wallet",
        meta: { authRequired: true },
        component: () => import("./views/Portfolio/connectionWallet"),
    },
    //*********************************************************
    {
        path: "/pages/500",
        name: "Error-500",
        meta: { authRequired: true },
        component: () => import("./views/utility/500"),
    },
    {
        path: "/ticket",
        name: "Inbox",
        meta: { authRequired: true },
        component: () => import("./views/ticket/index"),
    },
    //single ticket info
    {
        path: "/ticket/:id",
        name: "Single Ticket",
        meta: { authRequired: true },
        component: () => import("./views/ticket/singleTicketInfo"),
    },
    //******************** Trade Assistant
    {
        path: "/tradeAssistant/chart",
        name: "tradeAssistantChart",
        meta: { authRequired: true },
        component: () => import("./views/tradeAssistant/chart"),
    },
    {
        path: "/tradeAssistant/screener",
        name: "tradeAssistantScreener",
        meta: { authRequired: true },
        component: () => import("./views/tradeAssistant/screener"),
    },
    {
        path: "/tradeAssistant/technichal",
        name: "tradeAssistantTechnichal",
        meta: { authRequired: true },
        component: () => import("./views/tradeAssistant/technichal"),
    },
    //*********************************************************
    //USER PROFILE
    //*********************************************************
    {
        path: "/userprofile/:id",
        name: "userprofile",
        meta: { authRequired: true },
        component: () => import("./views/UserProfile/index"),
    },

    //*********************************************************
    //Chart
    //*********************************************************
    //cryptoquant
    {
        path: "/chart/cryptoquant",
        name: "Cryptoquant",
        meta: { authRequired: true },
        component: () => import("./views/Chart/Cryptoquant"),
    },
    //glassNode
    {
        path: "/chart/glassNode",
        name: "GlassNode",
        meta: { authRequired: true },
        component: () => import("./views/Chart/GlassNode"),
    },
];