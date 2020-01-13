// components/tabBar/tabBar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        activeItem: 1,
        tabBarList: [
            {
                className: 'icon-index',
                url: '/pages/home/home',
                name: '首页'
            }, {
                className: 'icon-iconclassification',
                url: '/pages/category/category',
                name: '分类'
            }, {
                className: 'icon-icon_shoppingcar',
                url: '/pages/cart/cart',
                name: '购物车'
            }, {
                className: 'icon-icon-mine',
                url: '/pages/my/my',
                name: '我的'
            },
        ]
    },
    attached() {
        const { route } = getCurrentPages().pop()
        const routerList = this.data.tabBarList.map(v => v.url)
        this.setData({ activeItem: routerList.indexOf(`/${route}`) })
    },
    /**
     * 组件的方法列表
     */
    methods: {
        routerTo: ({ currentTarget: { dataset } }) => {
            const { route } = getCurrentPages().pop()
            if (dataset.url !== `/${route}`) wx.redirectTo({ url: dataset.url })
        }
    }
})
