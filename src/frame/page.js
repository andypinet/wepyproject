import wepy from "wepy";

export default class extends wepy.page {
  /**
   * onload webview options
   *
   * @type {{}}
   */
  Mopt = {};
  onLoad(options) {
    this.Mopt = options;
    if (this.onMount) {
      this.onMount();
    }
  }
}
