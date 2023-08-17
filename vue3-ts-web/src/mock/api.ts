// get请求从config.url获取参数，post从config.body中获取参数
function paramObj(url: any) {
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse(
        '{"' +
        decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
        '"}'
    )
}

const api = [
    // 登录接口
    {
        url: '/user/login',
        type: 'post',
        response: (config: any) => {
            // const {account} = paramObj(config.url)
            const { account } = JSON.parse(config.body)
            if (account === 'admin') {
                return {
                    code: 200,
                    message: '操作成功',
                    data: {
                        token: 'admin'
                    }
                }
            }
            return {
                code: 401,
                message: '用户信息错误，请重试~',
                data: {}
            }
        }
    },
    {
        url: "/mock/getMenuList", // 模拟登录的链接
        method: "get", // 请求方式
        timeout: 3000, // 超时时间
        statusCode: 200, // 返回的http状态码
        response: { // 返回的结果集
            code: 200,
            message: "获取菜单",
            data: {
                content: "获取菜单成功"
            },
        },
    }, {
        url: "/data/query", // 模拟登录的链接
        method: "get", // 请求方式
        timeout: 3000, // 超时时间
        statusCode: 200, // 返回的http状态码
        response: { // 返回的结果集
            code: 200,
            message: "获取菜单",
            data: [{
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
                check: true,
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
                check: true,
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
                check: false,
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
                check: true,
            }]
        },
    },
]
export default api