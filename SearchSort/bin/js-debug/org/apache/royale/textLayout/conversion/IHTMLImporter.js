/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/conversion/IHTMLImporter.as
 * org.apache.royale.textLayout.conversion.IHTMLImporter
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.conversion.IHTMLImporter');
/* Royale Dependency List: XML*/

goog.require('org.apache.royale.textLayout.conversion.ITextImporter');



/**
 * @interface
 * @extends {org.apache.royale.textLayout.conversion.ITextImporter}
 */
org.apache.royale.textLayout.conversion.IHTMLImporter = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.conversion.IHTMLImporter', org.apache.royale.textLayout.conversion.IHTMLImporter);
/**  * @type {Function}
 */org.apache.royale.textLayout.conversion.IHTMLImporter.prototype.imageSourceResolveFunction;
/**  * @type {boolean}
 */org.apache.royale.textLayout.conversion.IHTMLImporter.prototype.preserveBodyElement;
/**  * @type {boolean}
 */org.apache.royale.textLayout.conversion.IHTMLImporter.prototype.preserveHTMLElement;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.conversion.IHTMLImporter.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IHTMLImporter', qName: 'org.apache.royale.textLayout.conversion.IHTMLImporter', kind: 'interface' }], interfaces: [org.apache.royale.textLayout.conversion.ITextImporter] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.conversion.IHTMLImporter.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'imageSourceResolveFunction': { type: 'Function', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.conversion.IHTMLImporter'},
        'preserveBodyElement': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.conversion.IHTMLImporter'},
        'preserveHTMLElement': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.conversion.IHTMLImporter'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.conversion.IHTMLImporter.prototype.ROYALE_COMPILE_FLAGS = 10;
