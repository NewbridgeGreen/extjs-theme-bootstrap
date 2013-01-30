Ext.define('App1.controller.Main', {
    extend: 'Ext.app.Controller',
    models: ["Company"],
    stores: ['SimpleGridStore'],
    views: ["SimpleGrid"]
});