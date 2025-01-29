"use strict";
function ownKeys(a, b) {
  var c = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    b &&
      (d = d.filter(function (b) {
        return Object.getOwnPropertyDescriptor(a, b).enumerable;
      })),
      c.push.apply(c, d);
  }
  return c;
}
function _objectSpread(a) {
  for (var b, c = 1; c < arguments.length; c++)
    (b = null == arguments[c] ? {} : arguments[c]),
      c % 2
        ? ownKeys(Object(b), !0).forEach(function (c) {
            _defineProperty(a, c, b[c]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b))
        : ownKeys(Object(b)).forEach(function (c) {
            Object.defineProperty(a, c, Object.getOwnPropertyDescriptor(b, c));
          });
  return a;
}
function _defineProperty(a, b, c) {
  return (
    b in a
      ? Object.defineProperty(a, b, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (a[b] = c),
    a
  );
}
const defaults = { threshold: 50, passive: !1 };
class Xwiper {
  constructor(a, b = {}) {
    (this.options = _objectSpread(_objectSpread({}, defaults), b)),
      (this.element = null),
      (this.touchStartX = 0),
      (this.touchStartY = 0),
      (this.touchEndX = 0),
      (this.touchEndY = 0),
      (this.onSwipeLeftAgent = null),
      (this.onSwipeRightAgent = null),
      (this.onSwipeUpAgent = null),
      (this.onSwipeDownAgent = null),
      (this.onTapAgent = null),
      (this.onTouchStart = this.onTouchStart.bind(this)),
      (this.onTouchEnd = this.onTouchEnd.bind(this)),
      (this.onSwipeLeft = this.onSwipeLeft.bind(this)),
      (this.onSwipeRight = this.onSwipeRight.bind(this)),
      (this.onSwipeUp = this.onSwipeUp.bind(this)),
      (this.onSwipeDown = this.onSwipeDown.bind(this)),
      (this.onTap = this.onTap.bind(this)),
      (this.destroy = this.destroy.bind(this)),
      (this.handleGesture = this.handleGesture.bind(this));
    let c = !!this.options.passive && { passive: !0 };
    (this.element = a instanceof EventTarget ? a : document.querySelector(a)),
      this.element.addEventListener("touchstart", this.onTouchStart, c),
      this.element.addEventListener("touchend", this.onTouchEnd, c);
  }
  onTouchStart(a) {
    (this.touchStartX = a.changedTouches[0].screenX),
      (this.touchStartY = a.changedTouches[0].screenY);
  }
  onTouchEnd(a) {
    (this.touchEndX = a.changedTouches[0].screenX),
      (this.touchEndY = a.changedTouches[0].screenY),
      this.handleGesture();
  }
  onSwipeLeft(a) {
    this.onSwipeLeftAgent = a;
  }
  onSwipeRight(a) {
    this.onSwipeRightAgent = a;
  }
  onSwipeUp(a) {
    this.onSwipeUpAgent = a;
  }
  onSwipeDown(a) {
    this.onSwipeDownAgent = a;
  }
  onTap(a) {
    this.onTapAgent = a;
  }
  destroy() {
    this.element.removeEventListener("touchstart", this.onTouchStart),
      this.element.removeEventListener("touchend", this.onTouchEnd);
  }
  handleGesture() {
    return this.touchEndX + this.options.threshold <= this.touchStartX
      ? (this.onSwipeLeftAgent && this.onSwipeLeftAgent(), "swiped left")
      : this.touchEndX - this.options.threshold >= this.touchStartX
      ? (this.onSwipeRightAgent && this.onSwipeRightAgent(), "swiped right")
      : this.touchEndY + this.options.threshold <= this.touchStartY
      ? (this.onSwipeUpAgent && this.onSwipeUpAgent(), "swiped up")
      : this.touchEndY - this.options.threshold >= this.touchStartY
      ? (this.onSwipeDownAgent && this.onSwipeDownAgent(), "swiped down")
      : this.touchEndY === this.touchStartY
      ? (this.onTapAgent && this.onTapAgent(), "tap")
      : void 0;
  }
}
export default Xwiper;
