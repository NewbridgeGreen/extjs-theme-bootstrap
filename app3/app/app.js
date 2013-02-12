Ext.application({
    controllers: ["Main"],

    name: 'App3',

    launch: function () {
        Ext.create('Ext.container.Container', {
            renderTo: 'main',
            layout: {
                type: 'vbox'
            },

            items: [{
                xtype: 'simplepath',
                width: 200,
                height: 200
            }]
        });
    }
});
