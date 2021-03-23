/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/ITextInput.as
 * org.apache.royale.core.ITextInput
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.ITextInput');
/* Royale Dependency List: */

goog.require('org.apache.royale.core.IUIBase');



/**
 * @interface
 * @extends {org.apache.royale.core.IUIBase}
 */
org.apache.royale.core.ITextInput = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.ITextInput', org.apache.royale.core.ITextInput);
/**  * @type {string}
 */org.apache.royale.core.ITextInput.prototype.text;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.ITextInput.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ITextInput', qName: 'org.apache.royale.core.ITextInput', kind: 'interface' }], interfaces: [org.apache.royale.core.IUIBase] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.ITextInput.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'text': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.ITextInput'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.ITextInput.prototype.ROYALE_COMPILE_FLAGS = 10;
