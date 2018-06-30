import wepy from 'wepy'

export class moveAblemixin extends wepy.mixin {
  data = {
    movable: {
      x: 0,
      y: 0
    }
  };

  _movableEnd(e, type) {
    const {detail} = e;
    console.log(type);
    let self = this;
    setTimeout(function () {
      self.movable.x = 0;
      self.movable.y = 0;
      self.setData({
        movable: {
          x: 0,
          y: 0
        }
      })
    }, 30);
  }

  methods = {
    onMoveableChange(e) {
      const {x,y} = e.detail;
      this.movable.x = x;
      this.movable.y = y;
    },
    onMoveableEnd(e) {
      this._movableEnd(e, 'end');
    },
    onMoveableCancel(e) {
      this._movableEnd(e, 'cancel');
    }
  };
}
