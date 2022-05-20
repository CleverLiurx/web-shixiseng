module.exports = {
    title: 'WEB实习僧',
    description: '公众号@WEB实习僧 面试学习网，提供WEB前端面试题、算法面试题、计算机网络面试题等全方面初中级前端面试问题！',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        [
            "meta",
            {
              name: "keywords",
              content:
                "web实习僧,web前端面试,vue面试题,react面试题,js面试题,大厂面试题,阿里面试题,力扣,算法面试题,leetcode题",
            },
          ],
    ],
    themeConfig: {
        logo: "/logo.png",
        sidebarDepth: 2,
        lastUpdated: '最后更新',
        repo: "CleverLiurx/web-shixiseng",
        docsBranch: 'main',
        editLinks: true,
        editLinkText: "发现问题？帮我们修改此页面～",
        nav: [
            { text: '大前端', link: '/front-end/' },
            { text: '数据结构与算法', link: '/data-structure-algorithm/' },
            { text: '计算机网络', link: '/network/' },
            { text: '更新记录', link: '/update_record/' },
        ],
        sidebar: {
            '/front-end/': [
                "/front-end/",
                {
                    title: 'HTML',
                    children: [
                        '/front-end/html/semantization',
                        '/front-end/html/element_type',
                    ]
                },
                {
                    title: 'CSS',
                    children: [
                        "/front-end/css/selector",
                    ]
                },
                {
                    title: 'JavaScript',
                    children: [
                        "/front-end/javascript/date_type",
                    ]
                },
                {
                    title: 'Vue2',
                    children: [
                        "/front-end/vue2/vue",
                    ]
                },
                {
                    title: 'Vue3',
                    children: [
                        "/front-end/vue3/goal",
                    ]
                },
                {
                    title: 'React',
                    children: [
                        "/front-end/react/react",
                    ]
                },
                {
                    title: '浏览器',
                    children: [
                        "/front-end/browser/xss",
                    ]
                },
                {
                    title: '设计模式',
                    children: [
                        "/front-end/design/design",
                    ]
                },
            ],
            '/data-structure-algorithm/': [
                '/data-structure-algorithm/',
                {
                    title: "基础概念",
                    children: [
                        "/data-structure-algorithm/basic/algorithm",
                        "/data-structure-algorithm/basic/time_space",
                        "/data-structure-algorithm/basic/structure",
                        "/data-structure-algorithm/basic/stack_queue",
                        "/data-structure-algorithm/basic/linked_list",
                        "/data-structure-algorithm/basic/set",
                        "/data-structure-algorithm/basic/tree",
                        "/data-structure-algorithm/basic/heap",
                        "/data-structure-algorithm/basic/graph",
                        "/data-structure-algorithm/basic/sort",
                        "/data-structure-algorithm/basic/bubble_sort",
                        "/data-structure-algorithm/basic/selection_sort",
                        "/data-structure-algorithm/basic/insertion_sort",
                        "/data-structure-algorithm/basic/merge_sort",
                        "/data-structure-algorithm/basic/quick_sort",
                        "/data-structure-algorithm/basic/binary_search",
                        "/data-structure-algorithm/basic/design1",
                        "/data-structure-algorithm/basic/design2",
                    ]
                },
                {
                    title: '排序',
                    children: [
                        "/data-structure-algorithm/sort/bubble_sort",
                        "/data-structure-algorithm/sort/quick_sort",
                        "/data-structure-algorithm/sort/insertion_sort",
                        "/data-structure-algorithm/sort/selection_sort",
                        "/data-structure-algorithm/sort/merge_sort",
                        "/data-structure-algorithm/sort/heap_sort",
                    ]
                },
                {
                    title: '查找',
                    children: []
                },
                {
                    title: 'DFS和BFS',
                    children: []
                },
                {
                    title: '递归和循环',
                    children: []
                },
                {
                    title: '分治',
                    children: []
                },
                {
                    title: '回溯算法',
                    children: []
                },
                {
                    title: '数学运算',
                    children: []
                },
                {
                    title: '动态规划',
                    children: []
                },
                {
                    title: '贪心算法',
                    children: []
                },
            ],
            '/network/': [
                '/network/',
                '/network/get_post',
                '/network/header',
            ],
            '/update_record/': [
                '/update_record/',
                '/update_record/2022-05-20'
            ]
        }
    }
};

