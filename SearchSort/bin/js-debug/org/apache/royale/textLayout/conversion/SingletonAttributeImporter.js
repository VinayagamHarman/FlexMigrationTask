/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/conversion/SingletonAttributeImporter.as
 * org.apache.royale.textLayout.conversion.SingletonAttributeImporter
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.conversion.SingletonAttributeImporter');
/* Royale Dependency List: XML*/

goog.require('org.apache.royale.textLayout.conversion.IFormatImporter');



/**
 * @constructor
 * @implements {org.apache.royale.textLayout.conversion.IFormatImporter}
 * @param {string} key
 */
org.apache.royale.textLayout.conversion.SingletonAttributeImporter = function(key) {
  this.org_apache_royale_textLayout_conversion_SingletonAttributeImporter__keyToMatch = key;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.conversion.SingletonAttributeImporter', org.apache.royale.textLayout.conversion.SingletonAttributeImporter);


/**
 * @private
 * @type {string}
 */
org.apache.royale.textLayout.conversion.SingletonAttributeImporter.prototype.org_apache_royale_textLayout_conversion_SingletonAttributeImporter__keyToMatch;


/**
 * @private
 * @type {string}
 */
org.apache.royale.textLayout.conversion.SingletonAttributeImporter.prototype.org_apache_royale_textLayout_conversion_SingletonAttributeImporter__rslt = null;


/**
 * @export
 */
org.apache.royale.textLayout.conversion.SingletonAttributeImporter.prototype.reset = function() {
  this.org_apache_royale_textLayout_conversion_SingletonAttributeImporter__rslt = null;
};


/**
 * @export
 * @param {string} key
 * @param {string} val
 * @return {boolean}
 */
org.apache.royale.textLayout.conversion.SingletonAttributeImporter.prototype.importOneFormat = function(key, val) {
  if (key == this.org_apache_royale_textLayout_conversion_SingletonAttributeImporter__keyToMatch) {
    this.org_apache_royale_textLayout_conversion_SingletonAttributeImporter__rslt = val;
    return true;
  }
  return false;
};


org.apache.royale.textLayout.conversion.SingletonAttributeImporter.prototype.get__result = function() {
  return this.org_apache_royale_textLayout_conversion_SingletonAttributeImporter__rslt;
};


Object.defineProperties(org.apache.royale.textLayout.conversion.SingletonAttributeImporter.prototype, /** @lends {org.apache.royale.textLayout.conversion.SingletonAttributeImporter.prototype} */ {
/**
  * @export
  * @type {Object} */
result: {
get: org.apache.royale.textLayout.conversion.SingletonAttributeImporter.prototype.get__result}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.conversion.SingletonAttributeImporter.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SingletonAttributeImporter', qName: 'org.apache.royale.textLayout.conversion.SingletonAttributeImporter', kind: 'class' }], interfaces: [org.apache.royale.textLayout.conversion.IFormatImporter] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.conversion.SingletonAttributeImporter.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'result': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.conversion.SingletonAttributeImporter'}
      };
    },
    methods: function () {
      return {
        'SingletonAttributeImporter': { type: '', declaredBy: 'org.apache.royale.textLayout.conversion.SingletonAttributeImporter', parameters: function () { return [ 'String', false ]; }},
        'reset': { type: 'void', declaredBy: 'org.apache.royale.textLayout.conversion.SingletonAttributeImporter'},
        'importOneFormat': { type: 'Boolean', declaredBy: 'org.apache.royale.textLayout.conversion.SingletonAttributeImporter', parameters: function () { return [ 'String', false ,'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.conversion.SingletonAttributeImporter.prototype.ROYALE_COMPILE_FLAGS = 10;
