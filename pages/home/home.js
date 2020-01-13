
//获取应用实例
const app = getApp()
Page({
  data: {
    valueList: [],
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 200,
    productData: {}
  },
  onLoad() {
    wx.request({
      url: 'https://test130-m.angsi.com/new/201972614434350336.json',
      success: ({data}) => {
        const {valueList} = data[0]
        this.setData({valueList})
      }
    });
    const {data} = {"msg":"","code":0,"data":{"total":7,"rows":[{"spuId":333,"skuTitle":"浓郁黑巧克力","skuSubTitle":"EXTRA DARK CHOCOLATE","createTime":"2019-12-07 12:02:19","categoryId":306953,"picUrl":"https://oss.angsi.com/frontend-picture/1575691295197.png","skuId":841,"skuType":0,"haveStore":1,"skuPrice":6800,"price":"","priceRuleName":"","salesVolume":6,"spuTagId":"","spuTagName":"","spuTagPic":"","state":"","skuAttrVOList":[],"stock":"","singleSpec":""},{"spuId":52,"skuTitle":"葡萄芝士浮云","skuSubTitle":"GRAPE CHEESEA","createTime":"2019-11-22 11:47:33","categoryId":306917,"picUrl":"https://oss.angsi.com/frontend-picture/1575034173085.png","skuId":884,"skuType":0,"haveStore":1,"skuPrice":2800,"price":"","priceRuleName":"","salesVolume":13,"spuTagId":"","spuTagName":"","spuTagPic":"","state":"","skuAttrVOList":[],"stock":"","singleSpec":""},{"spuId":35,"skuTitle":"果香美式","skuSubTitle":"Fruity Americano","createTime":"2019-11-20 12:09:44","categoryId":306916,"picUrl":"https://oss.angsi.com/frontend-picture/1575033910678.png","skuId":862,"skuType":0,"haveStore":1,"skuPrice":2200,"price":"","priceRuleName":"","salesVolume":5,"spuTagId":"","spuTagName":"","spuTagPic":"","state":"","skuAttrVOList":[],"stock":"","singleSpec":""},{"spuId":51,"skuTitle":"双莓芝士浮云","skuSubTitle":"STRAWBERRY & BLUEBERRY CHEESEA","createTime":"2019-11-22 11:47:33","categoryId":306917,"picUrl":"https://oss.angsi.com/frontend-picture/1575034197937.png","skuId":888,"skuType":0,"haveStore":1,"skuPrice":3300,"price":"","priceRuleName":"","salesVolume":1,"spuTagId":"","spuTagName":"","spuTagPic":"","state":"","skuAttrVOList":[],"stock":"","singleSpec":""},{"spuId":50,"skuTitle":"草莓芝士浮云Z","skuSubTitle":"STRAWBERRY CHEESEA","createTime":"2019-11-22 11:47:32","categoryId":306917,"picUrl":"https://oss.angsi.com/frontend-picture/1575625019388.png","skuId":894,"skuType":0,"haveStore":1,"skuPrice":3200,"price":"","priceRuleName":"","salesVolume":18,"spuTagId":"","spuTagName":"","spuTagPic":"","state":"","skuAttrVOList":[],"stock":"","singleSpec":""},{"spuId":54,"skuTitle":"金芒芝士浮云","skuSubTitle":"MANGO CHEESEA","createTime":"2019-11-22 11:47:33","categoryId":306917,"picUrl":"https://oss.angsi.com/frontend-picture/1575034028392.png","skuId":876,"skuType":0,"haveStore":1,"skuPrice":3200,"price":"","priceRuleName":"","salesVolume":3,"spuTagId":"","spuTagName":"","spuTagPic":"","state":"","skuAttrVOList":[],"stock":"","singleSpec":""},{"spuId":53,"skuTitle":"芭乐芝士浮云","skuSubTitle":"GUAVA CHEESEA","createTime":"2019-11-22 11:47:33","categoryId":306917,"picUrl":"https://oss.angsi.com/frontend-picture/1575034138018.png","skuId":880,"skuType":0,"haveStore":1,"skuPrice":3100,"price":"","priceRuleName":"","salesVolume":18,"spuTagId":"","spuTagName":"","spuTagPic":"","state":"","skuAttrVOList":[],"stock":"","singleSpec":""}],"current":"","pageSize":""},"msgCode":"","url":""}
    console.log(data);
    this.setData({productData: data})
    //
  }
})
