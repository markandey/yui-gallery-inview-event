function getTop(elm) {
    var y = 0;
    y = elm.offsetTop;
    while (elm != null) {
        y = parseInt(y) + parseInt(elm.offsetTop);
        elm = elm.offsetParent;
    }
    return y;
}
var attachedNode = [];

function getScroll() {
    return window.scrollY + document.documentElement.clientHeight;
}

function fireInView(scroll) {
    var newAttachedNodeList = []
    for (i = 0; i < attachedNode.length; i++) {
        var t = attachedNode[i].top
        if (t < scroll) {
            attachedNode[i].notifier.fire();
        } else {
            newAttachedNodeList.push(attachedNode[i]);
        }
    }
    attachedNode = newAttachedNodeList;
}

Y.on('scroll', function(e) {
    var scroll = getScroll();
    fireInView(scroll);
});


Y.Event.define("inview", {
    on: function(node, sub, notifier) {
        attachedNode.push({
            "node": node,
            "top": getTop(node._node),
            "notifier": notifier
        });
        fireInView(document.documentElement.clientHeight || 1200);
    },
    detach: function(node, sub, notifier) {

    }
});