/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IDataProviderModel.as
 * org.apache.royale.core.IDataProviderModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IDataProviderModel');
/* Royale Dependency List: */

goog.require('org.apache.royale.core.IBeadModel');
goog.require('org.apache.royale.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.royale.events.IEventDispatcher}
 * @extends {org.apache.royale.core.IBeadModel}
 */
org.apache.royale.core.IDataProviderModel = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IDataProviderModel', org.apache.royale.core.IDataProviderModel);
/**  * @type {Object}
 */org.apache.royale.core.IDataProviderModel.prototype.dataProvider;
/**  * @type {string}
 */org.apache.royale.core.IDataProviderModel.prototype.labelField;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IDataProviderModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IDataProviderModel', qName: 'org.apache.royale.core.IDataProviderModel', kind: 'interface' }], interfaces: [org.apache.royale.events.IEventDispatcher, org.apache.royale.core.IBeadModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IDataProviderModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'dataProvider': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.core.IDataProviderModel'},
        'labelField': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.IDataProviderModel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.IDataProviderModel.prototype.ROYALE_COMPILE_FLAGS = 10;
