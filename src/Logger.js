/**
 * 日志器
 * @class
 */
class Logger {
  /**
   * @constructs Logger
   * @param {String} color 颜色
   * @param {String} fontSize 字体大小
   * @param {Boolean} hide 是否隐藏log
   */
  constructor({ color, fontSize, hide }) {
    this.color = color || '#333'
    this.fontSize = fontSize || '12px'
    this.hide = hide || true
  }
  /**
   * 打印log信息
   * @param {Object} value 打印信息对象
   */
  log(value) {
    if (!this.hide) {
      return false
    }
    console.log(`%c${value}`, `color:${this.color}; font-size:${this.fontSize}; text-shadow: 0 0 5px rgba(0,0,0,0.2);`)
  }
}

export default Logger
