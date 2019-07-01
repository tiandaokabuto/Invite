//index.js
Page({
  data: {
    isPlayingMusic: false
  },
  play: function (e) {
    if (this.data.isPlayingMusic) {
      this.bgm.pause()
    } else {
      this.bgm.play()
    }
    this.setData({
      isPlayingMusic: !this.data.isPlayingMusic
    })
  },
  callGroom: function (e) {
    wx.makePhoneCall({
      phoneNumber: '11111111111',
    })
  },
  callBridge: function (e) {
    wx.makePhoneCall({
      phoneNumber: '22222222222',
    })
  },
  bgm: null,
  music_url: 'http://localhost:3000/ForestPath.mp3',
  music_img: 'http://localhost:3000/marry.png',
  onReady: function () {
    this.bgm = wx.getBackgroundAudioManager()
    this.bgm.title = 'marry me'
    this.bgm.epname = 'epname'
    this.bgm.singer = 'singer'
    this.bgm.coverImgUrl = this.music_img
    this.bgm.onCanplay ( () => {
      this.bgm.pause()
    })
    this.bgm.src = this.music_url
  }
})
