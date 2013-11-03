YUI.add('module-tests', function(Y) {

	var suite = new Y.Test.Suite('gallery-inview-event');

	suite.add(new Y.Test.Case({
		name: 'basic sanity',
		'setUp': function() {
			var that = this;
			var input = '<div id="test-inview-div"><div style="height:9000px;">bing box</div><div id="mynode">small box</div></div>';
			Y.one('body').append(Y.Node.create(input));
			Y.one("#mynode").on('inview', function() {
				Y.one("#mynode").setContent('yes i am in view');
				that.inviewfired = true;
			})
			console.log('setup executed');
		},
		'test fire': function() {
			var that = this;
			//Y.one('body').simulate('scroll',10000);
			this.wait(function() {
				Y.Assert.areEqual(that.inviewfired,true);
			}, 1000);
		},
		'tearDown': function() {
			console.log('teardown.....');
			//Y.one('#test-inview-div').remove();
		},
	}));

	Y.Test.Runner.add(suite);


}, '', {
	requires: ['test', 'gallery-inview-event', 'node-event-simulate']
});