import wepy from "wepy";

/**
 * common page
 */
export default class extends wepy.page {
  /**
   * onload webview options
   *
   * @type {{}}
   */
  Mopt = {};

  /**
   * call this onMount  apply Mopt...
   *
   * @param options
   */
  onLoad(options) {
    this.Mopt = options;
    if (this.onMount) {
      this.onMount();
    }
  }
}
