/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IListWithPresentationModel.as
 * org.apache.royale.core.IListWithPresentationModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IListWithPresentationModel');
/* Royale Dependency List: org.apache.royale.core.IBead*/

goog.require('org.apache.royale.core.IList');



/**
 * @interface
 * @extends {org.apache.royale.core.IList}
 */
org.apache.royale.core.IListWithPresentationModel = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IListWithPresentationModel', org.apache.royale.core.IListWithPresentationModel);
/**  * @type {org.apache.royale.core.IBead}
 */org.apache.royale.core.IListWithPresentationModel.prototype.presentationModel;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IListWithPresentationModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IListWithPresentationModel', qName: 'org.apache.royale.core.IListWithPresentationModel', kind: 'interface' }], interfaces: [org.apache.royale.core.IList] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IListWithPresentationModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'presentationModel': { type: 'org.apache.royale.core.IBead', access: 'readonly', declaredBy: 'org.apache.royale.core.IListWithPresentationModel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.IListWithPresentationModel.prototype.ROYALE_COMPILE_FLAGS = 10;
