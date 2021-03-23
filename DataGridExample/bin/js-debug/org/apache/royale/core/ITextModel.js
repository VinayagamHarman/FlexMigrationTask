/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/ITextModel.as
 * org.apache.royale.core.ITextModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.ITextModel');
/* Royale Dependency List: */

goog.require('org.apache.royale.core.IBeadModel');



/**
 * @interface
 * @extends {org.apache.royale.core.IBeadModel}
 */
org.apache.royale.core.ITextModel = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.ITextModel', org.apache.royale.core.ITextModel);
/**  * @type {string}
 */org.apache.royale.core.ITextModel.prototype.text;
/**  * @type {string}
 */org.apache.royale.core.ITextModel.prototype.html;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.ITextModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ITextModel', qName: 'org.apache.royale.core.ITextModel', kind: 'interface' }], interfaces: [org.apache.royale.core.IBeadModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.ITextModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'text': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.ITextModel'},
        'html': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.ITextModel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.ITextModel.prototype.ROYALE_COMPILE_FLAGS = 10;
