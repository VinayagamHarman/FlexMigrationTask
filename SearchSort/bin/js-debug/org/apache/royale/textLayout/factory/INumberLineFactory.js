/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/factory/INumberLineFactory.as
 * org.apache.royale.textLayout.factory.INumberLineFactory
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.factory.INumberLineFactory');
/* Royale Dependency List: org.apache.royale.geom.Rectangle,org.apache.royale.textLayout.compose.ISWFContext,org.apache.royale.textLayout.elements.IBackgroundManager,org.apache.royale.textLayout.formats.ITextLayoutFormat,XML*/

goog.require('org.apache.royale.textLayout.factory.IStringTextLineFactory');



/**
 * @interface
 * @extends {org.apache.royale.textLayout.factory.IStringTextLineFactory}
 */
org.apache.royale.textLayout.factory.INumberLineFactory = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.factory.INumberLineFactory', org.apache.royale.textLayout.factory.INumberLineFactory);
/**  * @type {org.apache.royale.geom.Rectangle}
 */org.apache.royale.textLayout.factory.INumberLineFactory.prototype.compositionBounds;
/**  * @type {org.apache.royale.textLayout.compose.ISWFContext}
 */org.apache.royale.textLayout.factory.INumberLineFactory.prototype.swfContext;
/**  * @type {string}
 */org.apache.royale.textLayout.factory.INumberLineFactory.prototype.listStylePosition;
/**  * @type {org.apache.royale.textLayout.formats.ITextLayoutFormat}
 */org.apache.royale.textLayout.factory.INumberLineFactory.prototype.paragraphFormat;
/**  * @type {org.apache.royale.textLayout.formats.ITextLayoutFormat}
 */org.apache.royale.textLayout.factory.INumberLineFactory.prototype.textFlowFormat;
/**  * @type {org.apache.royale.textLayout.formats.ITextLayoutFormat}
 */org.apache.royale.textLayout.factory.INumberLineFactory.prototype.markerFormat;
/**  * @type {string}
 */org.apache.royale.textLayout.factory.INumberLineFactory.prototype.text;
/**
 * @export
 * @param {Function} arg
 */
org.apache.royale.textLayout.factory.INumberLineFactory.prototype.createTextLines = function(arg) {
};
org.apache.royale.textLayout.factory.INumberLineFactory.prototype.clearBackgroundManager = function() {
};
/**  * @type {org.apache.royale.textLayout.elements.IBackgroundManager}
 */org.apache.royale.textLayout.factory.INumberLineFactory.prototype.backgroundManager;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.factory.INumberLineFactory.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'INumberLineFactory', qName: 'org.apache.royale.textLayout.factory.INumberLineFactory', kind: 'interface' }], interfaces: [org.apache.royale.textLayout.factory.IStringTextLineFactory] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.factory.INumberLineFactory.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'compositionBounds': { type: 'org.apache.royale.geom.Rectangle', access: 'writeonly', declaredBy: 'org.apache.royale.textLayout.factory.INumberLineFactory'},
        'swfContext': { type: 'org.apache.royale.textLayout.compose.ISWFContext', access: 'writeonly', declaredBy: 'org.apache.royale.textLayout.factory.INumberLineFactory'},
        'listStylePosition': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.factory.INumberLineFactory'},
        'paragraphFormat': { type: 'org.apache.royale.textLayout.formats.ITextLayoutFormat', access: 'writeonly', declaredBy: 'org.apache.royale.textLayout.factory.INumberLineFactory'},
        'textFlowFormat': { type: 'org.apache.royale.textLayout.formats.ITextLayoutFormat', access: 'writeonly', declaredBy: 'org.apache.royale.textLayout.factory.INumberLineFactory'},
        'markerFormat': { type: 'org.apache.royale.textLayout.formats.ITextLayoutFormat', access: 'writeonly', declaredBy: 'org.apache.royale.textLayout.factory.INumberLineFactory'},
        'text': { type: 'String', access: 'writeonly', declaredBy: 'org.apache.royale.textLayout.factory.INumberLineFactory'},
        'backgroundManager': { type: 'org.apache.royale.textLayout.elements.IBackgroundManager', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.factory.INumberLineFactory'}
      };
    },
    methods: function () {
      return {
        'createTextLines': { type: 'void', declaredBy: 'org.apache.royale.textLayout.factory.INumberLineFactory', parameters: function () { return [ 'Function', false ]; }},
        'clearBackgroundManager': { type: 'void', declaredBy: 'org.apache.royale.textLayout.factory.INumberLineFactory'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.factory.INumberLineFactory.prototype.ROYALE_COMPILE_FLAGS = 10;
