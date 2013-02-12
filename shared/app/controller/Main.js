Ext.define('Shared.controller.Main', {
    extend: 'Ext.app.Controller',
    models: ["Company"],
    stores: ['SimpleGridStore'],
    views: ["SimpleGrid"]
});