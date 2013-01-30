Ext.application({
    controllers: ["Main"],

    name: 'App2',

    launch: function () {
        Ext.create('Ext.container.Container', {
            renderTo: 'main',
            layout: {
                type: 'vbox'
            },

            items: [{
                xtype: 'simplechart',
                width: 800,
                height: 600
            }]
        });
    }
});
