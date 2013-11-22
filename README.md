YUI Gallery inview event

Fires when an elements scrolls into the view , this is a YUI module

<pre><code>YUI().use('gallery-inview-event',function (Y) {
            Y.one('#mynode').on('inview',function(){
                Y.one('#mynode').setContent('this node is now in view');
            });
});</code></pre