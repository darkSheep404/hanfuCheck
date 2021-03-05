Page({
  data: {
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://6865-helloyun-4ge5h4wyc91f5778-1304890457.tcb.qcloud.la/hanfu/001%E6%98%8E%E5%88%B6.jpg?sign=990eba6fd94e203a030a1328defbe643&t=1614949411'
    }, {
      id: 1,
        type: 'image',
        url: 'https://6865-helloyun-4ge5h4wyc91f5778-1304890457.tcb.qcloud.la/hanfu/002%E5%AE%8B%E5%88%B6.jpg?sign=f3a0c9c7dd4760f261545863a8550816&t=1614949480',
    }, {
      id: 2,
      type: 'image',
      url: 'https://6865-helloyun-4ge5h4wyc91f5778-1304890457.tcb.qcloud.la/hanfu/003%E5%9D%A6%E9%A2%86.jpg?sign=1e6796483877d66b069bb5bfd9051fd1&t=1614949493'
    }, {
      id: 3,
      type: 'image',
      url: 'https://6865-helloyun-4ge5h4wyc91f5778-1304890457.tcb.qcloud.la/hanfu/004%E6%99%8B%E5%88%B6.jpg?sign=ecc5f6f1142b8cd1ab7c4589df7d1a89&t=1614949506'
    }, {
      id: 4,
      type: 'image',
      url: 'https://6865-helloyun-4ge5h4wyc91f5778-1304890457.tcb.qcloud.la/hanfu/005%E6%B1%89%E5%85%83%E7%B4%A0.jpg?sign=662ec773ffae310da588a9725c708148&t=1614949520'
    }, {
      id: 5,
      type: 'image',
      url: 'https://6865-helloyun-4ge5h4wyc91f5778-1304890457.tcb.qcloud.la/hanfu/006%E5%94%90%E5%88%B6.jpg?sign=f21d5ff488309513c247453df236f80d&t=1614949539'
    }, {
      id: 6,
      type: 'image',
      url: 'https://6865-helloyun-4ge5h4wyc91f5778-1304890457.tcb.qcloud.la/hanfu/007%E5%AE%8B%E5%88%B6.jpg?sign=42c0919ffe2eae713671cb9d5488df6d&t=1614952824'
    },{
      id: 7,
      type: 'image',
      url: 'https://6865-helloyun-4ge5h4wyc91f5778-1304890457.tcb.qcloud.la/hanfu/008%E6%9B%B2%E8%A3%BE.jpg?sign=056597348c5afb931951cad305e6d15e&t=1614952854'
    },{
      id: 8,
      type: 'image',
      url: 'https://6865-helloyun-4ge5h4wyc91f5778-1304890457.tcb.qcloud.la/hanfu/009%E5%94%90%E5%9C%86%E9%A2%86%E8%A2%8D.jpg?sign=852d46bf767d85409fec3213b0adf755&t=1614952876'
    }
  ],
    
  },
  onLoad() {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  },
  showQrcode() {
    wx.previewImage({
      urls: ['https://6865-helloyun-4ge5h4wyc91f5778-1304890457.tcb.qcloud.la/myQrCode/money.jpg?sign=0148353eddb814548368e3db70dd26ee&t=1614000653'],
      current: 'https://6865-helloyun-4ge5h4wyc91f5778-1304890457.tcb.qcloud.la/myQrCode/money.jpg?sign=0148353eddb814548368e3db70dd26ee&t=1614000653' // 当前显示图片的http链接      
    })
  },
})