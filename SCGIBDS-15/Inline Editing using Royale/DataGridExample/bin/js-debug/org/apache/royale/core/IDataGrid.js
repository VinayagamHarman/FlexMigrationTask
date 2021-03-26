/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IDataGrid.as
 * org.apache.royale.core.IDataGrid
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IDataGrid');
/* Royale Dependency List: */

goog.require('org.apache.royale.core.IContainer');
goog.require('org.apache.royale.core.IParentIUIBase');
goog.require('org.apache.royale.core.IStrandWithPresentationModel');



/**
 * @interface
 * @extends {org.apache.royale.core.IParentIUIBase}
 * @extends {org.apache.royale.core.IContainer}
 * @extends {org.apache.royale.core.IStrandWithPresentationModel}
 */
org.apache.royale.core.IDataGrid = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IDataGrid', org.apache.royale.core.IDataGrid);
/**  * @type {Object}
 */org.apache.royale.core.IDataGrid.prototype.model;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IDataGrid.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IDataGrid', qName: 'org.apache.royale.core.IDataGrid', kind: 'interface' }], interfaces: [org.apache.royale.core.IParentIUIBase, org.apache.royale.core.IContainer, org.apache.royale.core.IStrandWithPresentationModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IDataGrid.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'model': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.core.IDataGrid'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.IDataGrid.prototype.ROYALE_COMPILE_FLAGS = 10;
