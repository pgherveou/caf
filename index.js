
module.exports = window.cancelAnimationFrame
	|| window.cancelRequestAnimationFrame
	|| window.webkitCancelAnimationFrame
	|| window.webkitCancelRequestAnimationFrame
	|| window.mozCancelAnimationFrame
	|| window.mozCancelRequestAnimationFrame
	|| window.oCancelRequestAnimationFrame
	|| window.oCancelAnimationFrame
	|| window.msCancelRequestAnimationFrame
	|| window.msCancelAnimationFrame
	|| clearTimeout;