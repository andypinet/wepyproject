import wepy from "wepy";

export default class extends wepy.page {
  Mopt = {};
  onLoad(options) {
    this.Mopt = options;
    if (this.onMount) {
      this.onMount();
    }
  }
}
