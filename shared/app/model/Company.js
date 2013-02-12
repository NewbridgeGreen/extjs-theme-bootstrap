Ext.define('Shared.model.Company', {
    extend: 'Ext.data.Model',

    fields: [
       { name: 'company' },
       { name: 'price', type: 'float', convert: null, defaultValue: undefined },
       { name: 'change', type: 'float', convert: null, defaultValue: undefined },
       { name: 'pctChange', type: 'float', convert: null, defaultValue: undefined },
       { name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia', defaultValue: undefined }
    ],
    idProperty: 'company'
});