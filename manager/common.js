function getNavHeight() {
  const statusBarHeight = wx.getWindowInfo().statusBarHeight
  console.log("开始计算 statusBarHeight =====> " + statusBarHeight)
  const jnHeight = wx.getMenuButtonBoundingClientRect().height
  const jnTop = wx.getMenuButtonBoundingClientRect().top
  console.log("开始计算 jnHeight =====> " + jnHeight)
  const topMargin = jnTop - statusBarHeight
  const navHeight = jnHeight + topMargin * 2
  console.log("开始计算 navHeight =====> " + navHeight)
  return navHeight;
}

function getPageContentHeight(){
  const screenHeight = wx.getWindowInfo().screenHeight
  const statusBarHeight = wx.getWindowInfo().statusBarHeight
  const navHeight = getNavHeight()
  const pageContentHeight = screenHeight - statusBarHeight - navHeight
  return pageContentHeight
}

module.exports.getNavHeight = getNavHeight
module.exports.getPageContentHeight = getPageContentHeight
module.exports.statusBarHeight = wx.getWindowInfo().statusBarHeight
