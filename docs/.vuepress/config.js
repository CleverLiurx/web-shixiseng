module.exports = {
    title: 'WEB实习僧',
    description: '公众号@WEB实习僧 面试学习网，提供WEB前端面试题、算法面试题、计算机网络面试题等全方面初中级前端面试问题！',
    base: '/',
    dest: './dist/',
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
        [
            "meta",
            {
                name: "baidu-site-verification",
                content: "code-p1vufGYUi1",
            }
        ]
    ],
    themeConfig: {
        logo: "/logo.png",
        sidebarDepth: 2,
        lastUpdated: '最后更新',
        repo: "CleverLiurx/web-shixiseng",
        docsBranch: 'main',
        docsDir: "docs",
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
                        "/front-end/javascript/omnibus_advanced_1",
                        "/front-end/javascript/omnibus_advanced_2",
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
                        "/front-end/design/singleton_pattern",
                        "/front-end/design/factory_pattern",
                        "/front-end/design/strategy_pattern",
                        "/front-end/design/proxy_pattern",
                        "/front-end/design/observer_pattern",
                    ]
                },
            ],
            '/data-structure-algorithm/': [
                '/data-structure-algorithm/',
                {
                    title: "数据结构与算法基础",
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
                        "/data-structure-algorithm/basic/search",
                        "/data-structure-algorithm/basic/sequential_search",
                        "/data-structure-algorithm/basic/binary_search",
                        "/data-structure-algorithm/basic/design1",
                        "/data-structure-algorithm/basic/design2",
                    ]
                },
                {
                    title: '深度优先搜索',
                    children: [
                        "/data-structure-algorithm/dsf/binary-tree-preorder-traversal",
                        "/data-structure-algorithm/dsf/binary-tree-inorder-traversal",
                        "/data-structure-algorithm/dsf/binary-tree-postorder-traversal",
                    ]
                },
                {
                    title: '广度优先搜索',
                    children: [
                        "/data-structure-algorithm/bsf/binary-tree-level-order-traversal",
                    ]
                },
                {
                    title: '双指针',
                    children: [
                        "/data-structure-algorithm/double_pointer/inverted_string",
                    ]
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
                {
                    title: '网络模型',
                    children: [
                        '/network/network_model/osi',
                        '/network/network_model/tcp_ip',
                        '/network/network_model/use_tcp_ip_not_osi',
                        '/network/network_model/cs_p2p',
                    ]
                },
                {
                    title: 'DNS',
                    children: [
                        '/network/dns/what_is_dns',
                        '/network/dns/dns_resolution',
                    ]
                },
                {
                    title: 'HTTP',
                    children: [
                        '/network/http/methods',
                        '/network/http/get_post',
                        '/network/http/header',
                        '/network/http/http1.1',
                        '/network/http/http2.0',
                        '/network/http/request_msg',
                        '/network/http/response_msg',
                        '/network/http/load_multiple_images',
                        '/network/http/status_code',
                        '/network/http/keep_alive',
                        '/network/http/channel_multiplexing',
                        '/network/http/url_to_html',
                        '/network/http/cache',
                    ]
                },
                {
                    title: 'HTTPS',
                    children: [
                        '/network/https/what_is_https',
                        '/network/https/http_https',
                        '/network/https/advantage_disadvantage',
                        '/network/https/handshake',
                    ]
                },
                {
                    title: 'TCP/UDP',
                    children: [
                        '/network/tcp_udp/difference',
                        '/network/tcp_udp/usage_scenario',
                        '/network/tcp_udp/shakehands_wave',
                        '/network/tcp_udp/retransmission',
                        '/network/tcp_udp/reliable',
                        '/network/tcp_udp/flow_control',
                        '/network/tcp_udp/congestion_control',
                    ]
                },
                {
                    title: '其他',
                    children: [
                        '/network/others/dhcp',
                        '/network/others/websocket',
                        '/network/others/cdn',
                    ]
                },
            ],
            '/update_record/': [
                '/update_record/',
                '/update_record/2022-05-20',
                '/update_record/2022-05-22',
                '/update_record/2022-05-23',
                '/update_record/2022-05-24',
                '/update_record/2022-05-26',
                '/update_record/2022-06-01',
            ]
        }
    }
};

