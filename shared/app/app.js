Ext.application({
    controllers: ["Main"],

    name: 'Shared',

    launch: function () {
        Ext.create('Ext.container.Container', {
            renderTo: 'main',
            layout: {
                type: 'vbox'
            },

            items: [{
                xtype: 'simplegrid',
                height: 350,
                width: 600
            }]
        });
    }
});
