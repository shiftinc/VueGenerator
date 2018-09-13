(function() {

var vars = this._var$;
var App = this._app$;
var Utils = vars.Utils;

var strPojo = String({});

var appRootId = 'app--root';
vars.compLoader.manager(appRootId, function(err, compOptions) {
	var Comp, comp;
	if (err) {
		var strErr = String(err);
		if (strErr === strPojo) {
			strErr = JSON.stringify(err);
		}
		Comp = Vue.extend({
			template: '<div class="'+appRootId+'--component-error"><pre>'
				+ Utils.htmlEntitiesEncode(strErr)
				+ '</pre></div>'
		});
		comp = new Comp();
		comp.$mount('#mount');
		App.$rootError = comp;
		return;
	}
	compOptions.store = App.store;
	Comp = Vue.component(appRootId, compOptions);
	//vars.compLoader.vueLazyLoad.register(appRootId, Comp); não é necessário
	comp = new Comp();
	comp.$mount('#mount');
	App.$root = comp;
});

// App.store.dispatch('loadGetLogin');
// App.store.commit('setScreen', 1);

})();
