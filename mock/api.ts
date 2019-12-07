export default {
    // 支持值为 Object 和 Array
    'GET /api/dishes/list': {
        data: {
            list: [{
                id: 1,
                name: '香干芹菜',
                createTime: '2019-11-12 19:49',
                updateTime: '2019-11-30 19:49',
                desc: 'adsfadfa',
                ingredients: [1,2,3],
                photos: ['']
            }, {
                id: 2,
                name: '昂刺鱼豆腐汤',
                createTime: '2019-11-12 19:49',
                updateTime: '2019-11-12 19:49',
                desc: '昂刺鱼豆腐汤',
                ingredients: [1,2,3],
                photos: []
            }, {
                id: 3,
                name: '山药炒肉片',
                createTime: '2019-11-12 19:49',
                updateTime: '2019-11-12 19:49',
                desc: '山药炒肉片',
                ingredients: [1,3],
                photos: []
            }, {
                id: 4,
                name: '炒包菜',
                createTime: '2019-11-12 19:49',
                updateTime: '2019-11-12 19:49',
                desc: '炒包菜',
                ingredients: [2,3],
                photos: []
            }, {
                id: 5,
                name: '炒苋菜',
                createTime: '2019-11-12 19:49',
                updateTime: '2019-11-12 19:49',
                desc: '炒苋菜',
                ingredients: [3, 4],
                photos: []
            }],
            total: 5
        },
        errno: 0
    },
    'GET /api/ingredients/list': {
        data: {
            list: [{
                id: 1,
                name: '香干',
                createTime: '2019-11-12 19:49',
                updateTime: '2019-11-30 19:49',
                desc: 'adsfadfa',
                photos: ['']
            }, {
                id: 2,
                name: '芹菜',
                createTime: '2019-11-12 19:49',
                updateTime: '2019-11-12 19:49',
                desc: '芹菜',
                photos: []
            }, {
                id: 3,
                name: '山药',
                createTime: '2019-11-12 19:49',
                updateTime: '2019-11-12 19:49',
                desc: '山药',
                photos: []
            }, {
                id: 4,
                name: '包菜',
                createTime: '2019-11-12 19:49',
                updateTime: '2019-11-12 19:49',
                desc: '包菜',
                photos: []
            }, {
                id: 5,
                name: '苋菜',
                createTime: '2019-11-12 19:49',
                updateTime: '2019-11-12 19:49',
                desc: '苋菜',
                photos: []
            }],
            total: 5
        },
        errno: 0
    },
    'POST /api/dishes/add': {
        data: {},
        errno: 0,
        msg: 'ok'
    },
    'POST /api/ingredients/add': {
        data: {},
        errno: 0,
        msg: 'ok'
    },
    'PUT /api/dishes/:id': {
        data: {},
        errno: 0,
        msg: 'ok'
    },
};
