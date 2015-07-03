
/**
 *	Users View
 */
Ext.define('App.gluwrap.views.vUsers', {
constructor: function() {

    glu.defView('App.glu.Users', {
    	name   : 'vUsers',
    	xtype  : 'grid',
      	title  : 'Users',

      	columns:[
            {
                header:'ID',
                width : 40,
                dataIndex:'id'
            },  	
            {
                //TODO: Localize column headers
                header:'Name',
                dataIndex:'name'
            },
            {
                header:'UserName',
                dataIndex:'username'
            }, 
            {    
                header: 'Email',
                width : 200,
                dataIndex: 'email'
            }, 
            {
                header:'Status',
                dataIndex:'status'
            }
        ],
        dockedItems:[
            {
                xtype           :'pagingtoolbar',
                dock            :'bottom',
                store           :'@{vUsers}',
                page            :'@{vUsersPage}',
                refreshHandler  :'@{loadUsers}',
                displayInfo     :true
            }
            /*,{
                xtype:'toolbar',
                dock:'top',
                items:['requestVerification', 'removeAssets']
            }*/
        ]
    });

}
})