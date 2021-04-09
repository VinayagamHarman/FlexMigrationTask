/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/elements/ITextFlow.as
 * org.apache.royale.textLayout.elements.ITextFlow
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.elements.ITextFlow');
/* Royale Dependency List: org.apache.royale.events.Event,org.apache.royale.textLayout.compose.IFlowComposer,org.apache.royale.textLayout.edit.ISelectionManager,org.apache.royale.textLayout.elements.IBackgroundManager,org.apache.royale.textLayout.elements.IConfiguration,org.apache.royale.textLayout.elements.IFlowElement,org.apache.royale.textLayout.elements.IFlowGroupElement,org.apache.royale.textLayout.elements.IFormatResolver,org.apache.royale.textLayout.elements.IParagraphElement,org.apache.royale.textLayout.elements.InlineGraphicElement,org.apache.royale.textLayout.factory.ITLFFactory,org.apache.royale.textLayout.formats.ITextLayoutFormat,org.apache.royale.textLayout.formats.TextLayoutFormat,XML*/

goog.require('org.apache.royale.textLayout.elements.IContainerFormattedElement');



/**
 * @interface
 * @extends {org.apache.royale.textLayout.elements.IContainerFormattedElement}
 */
org.apache.royale.textLayout.elements.ITextFlow = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.elements.ITextFlow', org.apache.royale.textLayout.elements.ITextFlow);
/**
 * @export
 * @param {number} damageStart
 * @param {number} damageLen
 * @param {string} damageType
 * @param {boolean=} needNormalize
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.damage = function(damageStart, damageLen, damageType, needNormalize) {
};
/**
 * @export
 * @param {string} changeType
 * @param {Object} elem
 * @param {number} changeStart
 * @param {number} changeLen
 * @param {boolean} needNormalize
 * @param {boolean} bumpGeneration
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.processModelChanged = function(changeType, elem, changeStart, changeLen, needNormalize, bumpGeneration) {
};
/**  * @type {org.apache.royale.textLayout.elements.IFormatResolver}
 */org.apache.royale.textLayout.elements.ITextFlow.prototype.formatResolver;
/**
 * @export
 * @param {Object} elem
 * @return {org.apache.royale.textLayout.formats.TextLayoutFormat}
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.getTextLayoutFormatStyle = function(elem) {
};
/**
 * @export
 * @param {Object} elem
 * @return {org.apache.royale.textLayout.formats.TextLayoutFormat}
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.getExplicitStyle = function(elem) {
};
/**  * @type {org.apache.royale.textLayout.elements.IFlowGroupElement}
 */org.apache.royale.textLayout.elements.ITextFlow.prototype.parentElement;
/**  * @type {number}
 */org.apache.royale.textLayout.elements.ITextFlow.prototype.interactiveObjectCount;
org.apache.royale.textLayout.elements.ITextFlow.prototype.incInteractiveObjectCount = function() {
};
org.apache.royale.textLayout.elements.ITextFlow.prototype.decInteractiveObjectCount = function() {
};
/**  * @type {number}
 */org.apache.royale.textLayout.elements.ITextFlow.prototype.graphicObjectCount;
org.apache.royale.textLayout.elements.ITextFlow.prototype.incGraphicObjectCount = function() {
};
org.apache.royale.textLayout.elements.ITextFlow.prototype.decGraphicObjectCount = function() {
};
/**
 * @export
 * @param {string} type
 * @return {boolean}
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.hasEventListener = function(type) {
};
/**
 * @export
 * @param {org.apache.royale.events.Event} event
 * @return {boolean}
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.dispatchEvent = function(event) {
};
/**
 * @export
 * @return {org.apache.royale.textLayout.elements.IBackgroundManager}
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.getBackgroundManager = function() {
};
/**  * @type {org.apache.royale.textLayout.factory.ITLFFactory}
 */org.apache.royale.textLayout.elements.ITextFlow.prototype.tlfFactory;
/**  * @type {org.apache.royale.textLayout.elements.IBackgroundManager}
 */org.apache.royale.textLayout.elements.ITextFlow.prototype.backgroundManager;
/**  * @type {org.apache.royale.textLayout.edit.ISelectionManager}
 */org.apache.royale.textLayout.elements.ITextFlow.prototype.interactionManager;
/**  * @type {org.apache.royale.textLayout.elements.IConfiguration}
 */org.apache.royale.textLayout.elements.ITextFlow.prototype.configuration;
/**
 * @export
 * @param {string} typeNameValue
 * @return {Array}
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.getElementsByTypeName = function(typeNameValue) {
};
/**
 * @export
 * @param {org.apache.royale.textLayout.elements.IFlowElement} elem
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.appendOneElementForUpdate = function(elem) {
};
/**
 * @export
 * @param {org.apache.royale.textLayout.elements.InlineGraphicElement} elem
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.processAutoSizeImageLoaded = function(elem) {
};
/**
 * @export
 * @param {number} pos
 * @return {org.apache.royale.textLayout.elements.IParagraphElement}
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.findAbsoluteParagraph = function(pos) {
};
/**
 * @export
 * @return {boolean}
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.nestedInTable = function() {
};
/**  * @type {number}
 */org.apache.royale.textLayout.elements.ITextFlow.prototype.generation;
/**
 * @export
 * @param {number} num
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.setGeneration = function(num) {
};
org.apache.royale.textLayout.elements.ITextFlow.prototype.normalize = function() {
};
/**
 * @export
 * @param {number} pos
 * @return {org.apache.royale.textLayout.elements.IFlowGroupElement}
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.findAbsoluteFlowGroupElement = function(pos) {
};
/**  * @type {org.apache.royale.textLayout.compose.IFlowComposer}
 */org.apache.royale.textLayout.elements.ITextFlow.prototype.flowComposer;
/**
 * @export
 * @param {string} type
 * @param {Function} listener
 * @param {boolean=} useCapture
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.addEventListener = function(type, listener, useCapture) {
};
/**
 * @export
 * @param {string} type
 * @param {Function} listener
 * @param {boolean=} useCapture
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.removeEventListener = function(type, listener, useCapture) {
};
org.apache.royale.textLayout.elements.ITextFlow.prototype.invalidateAllFormats = function() {
};
org.apache.royale.textLayout.elements.ITextFlow.prototype.clearBackgroundManager = function() {
};
/**
 * @export
 * @return {boolean}
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.mustUseComposer = function() {
};
/**
 * @export
 * @param {org.apache.royale.textLayout.compose.IFlowComposer} newComposer
 * @param {boolean} okToUnloadGraphics
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.changeFlowComposer = function(newComposer, okToUnloadGraphics) {
};
/**  * @type {org.apache.royale.textLayout.formats.ITextLayoutFormat}
 */org.apache.royale.textLayout.elements.ITextFlow.prototype.hostFormat;
/**
 * @export
 * @param {boolean} okToUnloadGraphics
 * @return {boolean}
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.applyUpdateElements = function(okToUnloadGraphics) {
};
org.apache.royale.textLayout.elements.ITextFlow.prototype.unloadGraphics = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ITextFlow', qName: 'org.apache.royale.textLayout.elements.ITextFlow', kind: 'interface' }], interfaces: [org.apache.royale.textLayout.elements.IContainerFormattedElement] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'formatResolver': { type: 'org.apache.royale.textLayout.elements.IFormatResolver', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'parentElement': { type: 'org.apache.royale.textLayout.elements.IFlowGroupElement', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'interactiveObjectCount': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'graphicObjectCount': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'tlfFactory': { type: 'org.apache.royale.textLayout.factory.ITLFFactory', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'backgroundManager': { type: 'org.apache.royale.textLayout.elements.IBackgroundManager', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'interactionManager': { type: 'org.apache.royale.textLayout.edit.ISelectionManager', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'configuration': { type: 'org.apache.royale.textLayout.elements.IConfiguration', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'generation': { type: 'uint', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'flowComposer': { type: 'org.apache.royale.textLayout.compose.IFlowComposer', access: 'writeonly', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'hostFormat': { type: 'org.apache.royale.textLayout.formats.ITextLayoutFormat', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'}
      };
    },
    methods: function () {
      return {
        'damage': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow', parameters: function () { return [ 'int', false ,'int', false ,'String', false ,'Boolean', true ]; }},
        'processModelChanged': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow', parameters: function () { return [ 'String', false ,'Object', false ,'int', false ,'int', false ,'Boolean', false ,'Boolean', false ]; }},
        'getTextLayoutFormatStyle': { type: 'org.apache.royale.textLayout.formats.TextLayoutFormat', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow', parameters: function () { return [ 'Object', false ]; }},
        'getExplicitStyle': { type: 'org.apache.royale.textLayout.formats.TextLayoutFormat', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow', parameters: function () { return [ 'Object', false ]; }},
        'incInteractiveObjectCount': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'decInteractiveObjectCount': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'incGraphicObjectCount': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'decGraphicObjectCount': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'hasEventListener': { type: 'Boolean', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow', parameters: function () { return [ 'String', false ]; }},
        'dispatchEvent': { type: 'Boolean', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow', parameters: function () { return [ 'org.apache.royale.events.Event', false ]; }},
        'getBackgroundManager': { type: 'org.apache.royale.textLayout.elements.IBackgroundManager', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'getElementsByTypeName': { type: 'Array', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow', parameters: function () { return [ 'String', false ]; }},
        'appendOneElementForUpdate': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IFlowElement', false ]; }},
        'processAutoSizeImageLoaded': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow', parameters: function () { return [ 'org.apache.royale.textLayout.elements.InlineGraphicElement', false ]; }},
        'findAbsoluteParagraph': { type: 'org.apache.royale.textLayout.elements.IParagraphElement', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow', parameters: function () { return [ 'int', false ]; }},
        'nestedInTable': { type: 'Boolean', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'setGeneration': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow', parameters: function () { return [ 'uint', false ]; }},
        'normalize': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'findAbsoluteFlowGroupElement': { type: 'org.apache.royale.textLayout.elements.IFlowGroupElement', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow', parameters: function () { return [ 'int', false ]; }},
        'addEventListener': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow', parameters: function () { return [ 'String', false ,'Function', false ,'Boolean', true ]; }},
        'removeEventListener': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow', parameters: function () { return [ 'String', false ,'Function', false ,'Boolean', true ]; }},
        'invalidateAllFormats': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'clearBackgroundManager': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'mustUseComposer': { type: 'Boolean', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'},
        'changeFlowComposer': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow', parameters: function () { return [ 'org.apache.royale.textLayout.compose.IFlowComposer', false ,'Boolean', false ]; }},
        'applyUpdateElements': { type: 'Boolean', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow', parameters: function () { return [ 'Boolean', false ]; }},
        'unloadGraphics': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.ITextFlow'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.elements.ITextFlow.prototype.ROYALE_COMPILE_FLAGS = 10;
