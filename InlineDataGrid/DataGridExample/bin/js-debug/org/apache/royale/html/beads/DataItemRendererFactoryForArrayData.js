/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/DataItemRendererFactoryForArrayData.as
 * org.apache.royale.html.beads.DataItemRendererFactoryForArrayData
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.DataItemRendererFactoryForArrayData');
/* Royale Dependency List: org.apache.royale.events.Event*/

goog.require('org.apache.royale.html.beads.DataItemRendererFactoryBase');
goog.require('org.apache.royale.core.IBead');
goog.require('org.apache.royale.core.IDataProviderItemRendererMapper');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @constructor
 * @extends {org.apache.royale.html.beads.DataItemRendererFactoryBase}
 * @implements {org.apache.royale.core.IBead}
 * @implements {org.apache.royale.core.IDataProviderItemRendererMapper}
 * @param {Object=} target
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData = function(target) {
  target = typeof target !== 'undefined' ? target : null;
  org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.base(this, 'constructor', target);
};
goog.inherits(org.apache.royale.html.beads.DataItemRendererFactoryForArrayData, org.apache.royale.html.beads.DataItemRendererFactoryBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.DataItemRendererFactoryForArrayData', org.apache.royale.html.beads.DataItemRendererFactoryForArrayData);


/**
 * @private
 * @type {Array}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData_dp;


/**
 *  The org.apache.royale.core.IItemRendererOwnerView that will
 *  parent the item renderers.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 *  @royaleignorecoercion Array
 * @protected
 * @override
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.dataProviderChangeHandler = function(event) {
  this.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData_dp = this.dataProviderModel.dataProvider;
  org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.superClass_.dataProviderChangeHandler.apply(this, [ event] );
};


/**
 * @protected
 * @override
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.getItemAt = function(i) {
  return this.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData_dp[i];
};


org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.get__dataProviderLength = function() {
  return (this.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData_dp.length) >> 0;
};


Object.defineProperties(org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype, /** @lends {org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype} */ {
/**
  * @type {number} */
dataProviderLength: {
get: org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.get__dataProviderLength}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataItemRendererFactoryForArrayData', qName: 'org.apache.royale.html.beads.DataItemRendererFactoryForArrayData', kind: 'class' }], interfaces: [org.apache.royale.core.IBead, org.apache.royale.core.IDataProviderItemRendererMapper] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'DataItemRendererFactoryForArrayData': { type: '', declaredBy: 'org.apache.royale.html.beads.DataItemRendererFactoryForArrayData', parameters: function () { return [ 'Object', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.ROYALE_COMPILE_FLAGS = 10;
