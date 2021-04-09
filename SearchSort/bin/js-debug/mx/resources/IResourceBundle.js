/**
 * Generated by Apache Royale Compiler from mx/resources/IResourceBundle.as
 * mx.resources.IResourceBundle
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.resources.IResourceBundle');
/* Royale Dependency List: XML*/



/**
 * @interface
 */
mx.resources.IResourceBundle = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.resources.IResourceBundle', mx.resources.IResourceBundle);
/**  * @type {string}
 */mx.resources.IResourceBundle.prototype.bundleName;
/**  * @type {Object}
 */mx.resources.IResourceBundle.prototype.content;
/**  * @type {string}
 */mx.resources.IResourceBundle.prototype.locale;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.resources.IResourceBundle.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IResourceBundle', qName: 'mx.resources.IResourceBundle', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.resources.IResourceBundle.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'bundleName': { type: 'String', access: 'readonly', declaredBy: 'mx.resources.IResourceBundle'},
        'content': { type: 'Object', access: 'readonly', declaredBy: 'mx.resources.IResourceBundle'},
        'locale': { type: 'String', access: 'readonly', declaredBy: 'mx.resources.IResourceBundle'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.resources.IResourceBundle.prototype.ROYALE_COMPILE_FLAGS = 26;
