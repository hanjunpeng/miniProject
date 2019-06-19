/**
 * @Desc 对话模态框
 * @param {*} title 
 * @param {*} content 
 */
export function message (title, content) {
  wx.showModal({
    title: title,
    content: content,
    showCancel: false
  })
}

/**
 * @Desc 消息提示框
 */
export function showToast (text) {
  wx.showToast({
    title: text,
    icon: 'success',
    mask: true,
    duration: 1500
  })
}