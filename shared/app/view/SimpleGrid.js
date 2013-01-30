// Hack - shouldn't polute global namespace
/**
 * Custom function used for column renderer
 * @param {Object} val
 */
function change(val) {
    if (val > 0) {
        return '<span style="color:green;">' + val + '</span>';
    } else if (val < 0) {
        return '<span style="color:red;">' + val + '</span>';
    }
    return val;
}

/**
 * Custom function used for column renderer
 * @param {Object} val
 */
function pctChange(val) {
    if (val > 0) {
        return '<span style="color:green;">' + val + '%</span>';
    } else if (val < 0) {
        return '<span style="color:red;">' + val + '%</span>';
    }
    return val;
}

Ext.define("Shared.view.SimpleGrid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.simplegrid',
    store: 'SimpleGridStore',
    requires: 'Ext.grid.column.Action',

    multiSelect: true,
    columns: [
        {
            text     : 'Company',
            flex     : 1,
            sortable : false,
            dataIndex: 'company'
        },
        {
            text     : 'Price',
            width    : 75,
            sortable : true,
            renderer : 'usMoney',
            dataIndex: 'price'
        },
        {
            text     : 'Change',
            width    : 75,
            sortable : true,
            renderer : change,
            dataIndex: 'change'
        },
        {
            text     : '% Change',
            width    : 75,
            sortable : true,
            renderer : pctChange,
            dataIndex: 'pctChange'
        },
        {
            text     : 'Last Updated',
            width    : 85,
            sortable : true,
            renderer : Ext.util.Format.dateRenderer('m/d/Y'),
            dataIndex: 'lastChange'
        },
        {
            menuDisabled: true,
            sortable: false,
            xtype: 'actioncolumn',
            width: 50,
            items: [{
                icon: _EXTROOT + '/shared/resources/bootstrap/images/icons/fam/delete.gif',  // Use a URL in the icon config
                tooltip: 'Sell stock',
                handler: function(grid, rowIndex, colIndex) {
                    var store = grid.getStore(),
                        rec = store.getAt(rowIndex);
                    alert("Sell " + rec.get('company'));
                }
            }, {
                getClass: function(v, meta, rec) {          // Or return a class from a function
                    if (rec.get('change') < 0) {
                        this.items[1].tooltip = 'Hold stock';
                        return 'alert-col';
                    } else {
                        this.items[1].tooltip = 'Buy stock';
                        return 'buy-col';
                    }
                },
                handler: function(grid, rowIndex, colIndex) {
                    var store = grid.getStore(),
                        rec = store.getAt(rowIndex);
                    alert((rec.get('change') < 0 ? "Hold " : "Buy ") + rec.get('company'));
                }
            }]
        }
    ],
    title: 'Array Grid',
    viewConfig: {
        stripeRows: true,
        enableTextSelection: true
    }
});