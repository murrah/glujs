
Ext.define('App.gluwrap.backend.backend', {
constructor: function() {

	(function() {
		(glu.ns('App.glu.backend')).createMockBackend = function(auto, recordNum) {

			var users, 
				backend;
							// To NOT use fake data, pass an empty array, or an array of config objects to use.
							// To use fake data pass a number for the number of fake records
			
			users = glu.test.createTable(App.glu.models.usersFieldCfg,20);

		/* Add data manually like so:	
			users.create({
			  id: '7777',
			  username: 'aardvark',
			  status: 'active'
			});
		*/
			backend = glu.test.createBackend({
			  defaultRoot: '/json/',
			  fallbackToAjax: auto,
			  autoRespond: auto,
			  routes: {
						'users': {
						  url: 'users',
						  handle: function(req) {
								return users.list(req.params);
						  }
						},
						'user': {
						  url: 'users/:id',
						  handle: function(req) {
								return users.get(req.params.id);
						  }
						}
					}

		/*	  	{
						'removeAssets': {
						  url: 'assets/action/remove',
						  handle: function(req) {
							return assets.remove(req.params.ids);
						  }
						},
						'requestVerification': {
						  url: 'assets/action/requestVerification',
						  handle: function(req) {
							return assets.update(req.params.ids, {
							  status: 'verifying'
							});
						  }
						},
						'assetSave': {
						  url: 'assets/:id/action/save',
						  handle: function(req) {
							return assets.replace(req.params.id, req.jsonData);
						  }
						},
						'assets': {
						  url: 'assets',
						  handle: function(req) {
							return assets.list(req.params);
						  }
						},
						'asset': {
						  url: 'assets/:id',
						  handle: function(req) {
							return assets.get(req.params.id);
						  }
						}
			  	}*/
			});

			backend.capture();
			
			return {
			  backend: backend,
			  users: users
			};
		};

	}).call(this);

}
});
