export const Menu = [
    {
        id: 2,
        label: "menuitems.dashboards.text",
        icon: "bx-home-circle",
        link: "/",
    },
    {
        id: 3,
        label: "menuitems.signals.text",
        icon: "bx-bitcoin",
        subItems: [
            {
                id: 22,
                label: "menuitems.signals.list.signalsList",
                link: "/signal/list",
                parentId: 3
            },
            {
                id: 23,
                label: "menuitems.signals.list.template.text",
                parentId: 3,
                subItems: [
                    {
                        id: 33,
                        label: 'menuitems.signals.list.template.list.nemodar',
                        link: '/tradeAssistant/chart',
                        parentId: 3
                    },
                    {
                        id: 34,
                        label: 'menuitems.signals.list.template.list.screener',
                        link: '/tradeAssistant/screener',
                        parentId: 3
                    },
                    {
                        id: 35,
                        label: 'menuitems.signals.list.template.list.technichal',
                        link: '/tradeAssistant/technichal',
                        parentId: 3
                    }
                ],
            },
            {
                id: 24,
                label: "menuitems.signals.list.weeklyAnalysis",
                link: "/trade",
                parentId: 3,
            },
            {
                id: 25,
                label: "menuitems.signals.list.riskFormula",
                link: "/calculationProfitLoss",
                parentId: 3,
            },
        ]
    },
    {
        id: 21,
        label: "menuitems.crypto.text",
        icon: "bx-bitcoin",
        subItems: [
            {
                id: 22,
                label: "menuitems.crypto.list.wallet",
                link: `/blog/6`,
                parentId: 21
            },
            //chart state
            {
                id: 23,
                label: "menuitems.crypto.list.template.text",
                parentId: 21,
                subItems: [
                    {
                        id: 1,
                        label: "menuitems.crypto.list.template.list.crypto",
                        link: '/chart/cryptoquant',
                        parentId: 23
                    },
                    {
                        id: 2,
                        label: "menuitems.crypto.list.template.list.glassNode",
                        link: '/chart/glassNode',
                        parentId: 23
                    },
                ]
            },
            {
                id: 24,
                label: "menuitems.crypto.list.exchange",
                link: `/social/11`,
                parentId: 21
            },
            {
                id: 25,
                label: "menuitems.crypto.list.lending",
                link: `/project/2`,
                parentId: 21
            },
            {
                id: 26,
                label: "menuitems.crypto.list.orders",
                link: `/airdrop/25`,
                parentId: 21
            },
        ]
    },
    {
        id: 29,
        label: "menuitems.ticket.text",
        icon: "bx-envelope",
        link: "/ticket",
    },
    {
        id: 34,
        label: "menuitems.invoices.text",
        icon: "bx-receipt",
        subItems: [
            {
                id: 35,
                label: "menuitems.invoices.list.invoicelist",
                link: "/invoices/article/list",
                parentId: 34
            },
            {
                id: 36,
                label: "menuitems.invoices.list.course",
                link: "/invoices/cource/list",
                parentId: 34
            },
            {
                id: 36,
                label: "menuitems.invoices.list.books",
                link: "/invoices/books/list",
                parentId: 34
            },
            {
                id: 36,
                label: "menuitems.invoices.list.freeVideo",
                link: "/invoices/free/list",
                parentId: 34
            },
            {
                id: 80,
                label: "menuitems.invoices.list.metaverse",
                link: "/invoices/metaverse",
                parentId: 34
            }
        ]
    },
    //portfolio
    {
        id: 37,
        label: "menuitems.portfolio.text",
        icon: "bx-briefcase-alt-2",
        subItems: [
            {
                id: 35,
                label: "menuitems.portfolio.list.watchList",
                link: "/portfolio/watchList",
                parentId: 37
            },
            {
                id: 38,
                label: "menuitems.portfolio.list.create",
                link: "/portfolio/create",
                parentId: 37
            },
            // {
            //     id: 39,
            //     label: "menuitems.portfolio.list.signal",
            //     link: "/portfolio/signals",
            //     parentId: 37
            // },
            // {
            //     id: 40,
            //     label: "menuitems.portfolio.list.articles",
            //     link: "/portfolio/articles",
            //     parentId: 37
            // },
            {
                id: 41,
                label: "menuitems.portfolio.list.connectionWallet",
                link: "/portfolio/connection-wallet",
                parentId: 37
            }
        ]
    },
    {
        id: 42,
        label: "menuitems.tasks.text",
        icon: "bx-task",
        link: "/tasks/list",
    },
    //admin
    {
        id: 73,
        label: 'menuitems.admin.text',
        icon: 'bx-file',
        subItems: [
            {
                id: 74,
                label: 'menuitems.admin.list.users',
                icon: 'bx-file',
                link: '/admin/user',
                parentId: 73
            },
            {
                id: 75,
                label: 'menuitems.admin.list.tags',
                icon: 'bx-file',
                link: '/admin/tags',
                parentId: 73
            },
            {
                id: 76,
                label: 'menuitems.admin.list.categories',
                icon: 'bx-file',
                link: '/admin/categories',
                parentId: 73
            },
            {
                id: 77,
                label: 'menuitems.admin.list.blog',
                icon: 'bx-file',
                link: '/admin/blog',
                parentId: 73
            },
            {
                id: 78,
                label: 'menuitems.admin.list.comments',
                icon: 'bx-file',
                link: '/admin/comments',
                parentId: 73
            },
            {
                id: 79,
                label: 'menuitems.admin.list.signal',
                icon: 'bx-file',
                link: '/admin/signal',
                parentId: 73
            },
            {
                id: 80,
                label: 'menuitems.admin.list.ticket',
                icon: 'bx-file',
                link: '/admin/ticket',
                parentId: 73
            },
            {
                id: 81,
                label: 'menuitems.admin.list.notification',
                icon: 'bx-file',
                link: '/admin/notification',
                parentId: 73
            }
        ]
    }
]
