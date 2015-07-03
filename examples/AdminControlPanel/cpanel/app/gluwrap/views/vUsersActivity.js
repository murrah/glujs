
/**
 *	UsersActivity View. A grid.
 */
Ext.define('App.gluwrap.views.vUsersActivity', {
constructor: function() {

    glu.defView('App.glu.UsersActivity', {
    	name   : 'vUsersActivity',
    	xtype  : 'grid',
      	title  : 'Activity list',

      	columns:[
            {
                //TODO: Localize column headers
                header:'User',
                dataIndex:'username'
            },
            {
                header:'Status',
                dataIndex:'status'
            }/*,{
                header:'Years Matter',
                dataIndex:'yearsMatter',
                sortable:false
            }*/
        ]

    /*    columns:[
            {
                //TODO: Localize column headers
                header:'Name',
                dataIndex:'name'
            },
            {
                header:'Status',
                dataIndex:'status'
            },{
                header:'Years Matter',
                dataIndex:'yearsMatter',
                sortable:false
            }
        ],
        dockedItems:[
            {
                xtype:'pagingtoolbar',
                dock:'bottom',
                store:'@{assetList}',
                page:'@{assetListPage}',
                refreshHandler:'@{refreshAssetList}',
                displayInfo:true
            },
            {
                xtype:'toolbar',
                dock:'top',
                items:['requestVerification', 'removeAssets']
            }
        ]*/

    });

}
})