/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/elements/ConfigurationHelper.as
 * org.apache.royale.textLayout.elements.ConfigurationHelper
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.elements.ConfigurationHelper');
/* Royale Dependency List: org.apache.royale.textLayout.elements.Configuration,org.apache.royale.textLayout.elements.IConfiguration,XML*/




/**
 * @constructor
 */
org.apache.royale.textLayout.elements.ConfigurationHelper = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.elements.ConfigurationHelper', org.apache.royale.textLayout.elements.ConfigurationHelper);


/**
 * @private
 * @type {org.apache.royale.textLayout.elements.IConfiguration}
 */
org.apache.royale.textLayout.elements.ConfigurationHelper._defaultConfiguration;


org.apache.royale.textLayout.elements.ConfigurationHelper.get__defaultConfiguration = function() {
  if (!org.apache.royale.textLayout.elements.ConfigurationHelper._defaultConfiguration)
    org.apache.royale.textLayout.elements.ConfigurationHelper._defaultConfiguration = new org.apache.royale.textLayout.elements.Configuration();
  return org.apache.royale.textLayout.elements.ConfigurationHelper._defaultConfiguration;
};


Object.defineProperties(org.apache.royale.textLayout.elements.ConfigurationHelper, /** @lends {org.apache.royale.textLayout.elements.ConfigurationHelper} */ {
/**
  * @export
  * @type {org.apache.royale.textLayout.elements.IConfiguration} */
defaultConfiguration: {
get: org.apache.royale.textLayout.elements.ConfigurationHelper.get__defaultConfiguration}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.elements.ConfigurationHelper.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ConfigurationHelper', qName: 'org.apache.royale.textLayout.elements.ConfigurationHelper', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.elements.ConfigurationHelper.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        '|defaultConfiguration': { type: 'org.apache.royale.textLayout.elements.IConfiguration', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.ConfigurationHelper'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.elements.ConfigurationHelper.prototype.ROYALE_COMPILE_FLAGS = 10;
