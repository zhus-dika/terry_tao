var parallax = (function(){
    var mountains = document.querySelector('.bg_mountains')
    var bridge = document.querySelector('.bg_bridge')
    var background = document.querySelector('.bg_bg')
    var userBlock = document.querySelector('.whoami')
    return {
        move: function(block, winScroll, strafeAmount) {
            var strafe = winScroll / -strafeAmount + '%'
            let transformString = 'translate3d(0,' + strafe + ', 0)'
            console.log(transformString)
            var style = block.style
            style.transform = transformString;
            style.webkitTransform = transformString;
        },
        init: function(wScroll) {
            this.move(mountains, wScroll, 45)
            console.log(wScroll)
            this.move(background, wScroll, 35)
            this.move(userBlock, wScroll, 25)
            this.move(bridge, wScroll, 20)
        }
    }
}())
window.onscroll = function() {
    var wScroll = window.pageYOffset
    parallax.init(wScroll)
}