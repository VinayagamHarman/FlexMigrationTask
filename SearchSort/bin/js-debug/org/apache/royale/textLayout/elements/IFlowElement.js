/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/elements/IFlowElement.as
 * org.apache.royale.textLayout.elements.IFlowElement
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.elements.IFlowElement');
/* Royale Dependency List: org.apache.royale.events.IEventDispatcher,org.apache.royale.textLayout.elements.IContainerFormattedElement,org.apache.royale.textLayout.elements.IFlowGroupElement,org.apache.royale.textLayout.elements.IParagraphElement,org.apache.royale.textLayout.elements.ITableCellElement,org.apache.royale.textLayout.elements.ITextFlow,XML*/

goog.require('org.apache.royale.textLayout.formats.ITextLayoutFormat');



/**
 * @interface
 * @extends {org.apache.royale.textLayout.formats.ITextLayoutFormat}
 */
org.apache.royale.textLayout.elements.IFlowElement = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.elements.IFlowElement', org.apache.royale.textLayout.elements.IFlowElement);
/**
 * @export
 * @param {number=} relativeStart
 * @param {number=} relativeEnd
 * @param {string=} paragraphSeparator
 * @return {string}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getText = function(relativeStart, relativeEnd, paragraphSeparator) {
};
/**
 * @export
 * @return {org.apache.royale.textLayout.elements.IContainerFormattedElement}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getAncestorWithContainer = function() {
};
/**
 * @export
 * @param {string} styleName
 * @return {*}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getPrivateStyle = function(styleName) {
};
/**
 * @export
 * @param {boolean=} notifyModelChanged
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.formatChanged = function(notifyModelChanged) {
};
/**
 * @export
 * @param {string} styleProp
 * @param {*} newValue
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.setStyle = function(styleProp, newValue) {
};
/**
 * @export
 * @return {number}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getEffectivePaddingLeft = function() {
};
/**
 * @export
 * @return {number}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getEffectivePaddingRight = function() {
};
/**
 * @export
 * @return {number}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getEffectivePaddingTop = function() {
};
/**
 * @export
 * @return {number}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getEffectivePaddingBottom = function() {
};
/**
 * @export
 * @return {number}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getEffectiveBorderLeftWidth = function() {
};
/**
 * @export
 * @return {number}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getEffectiveBorderRightWidth = function() {
};
/**
 * @export
 * @return {number}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getEffectiveBorderTopWidth = function() {
};
/**
 * @export
 * @return {number}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getEffectiveBorderBottomWidth = function() {
};
/**
 * @export
 * @return {number}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getEffectiveMarginLeft = function() {
};
/**
 * @export
 * @return {number}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getEffectiveMarginRight = function() {
};
/**
 * @export
 * @return {number}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getEffectiveMarginTop = function() {
};
/**
 * @export
 * @return {number}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getEffectiveMarginBottom = function() {
};
/**
 * @export
 * @return {number}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getAbsoluteStart = function() {
};
/**
 * @export
 * @param {org.apache.royale.textLayout.elements.IFlowElement} ancestorElement
 * @return {number}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getElementRelativeStart = function(ancestorElement) {
};
/**
 * @export
 * @return {org.apache.royale.textLayout.elements.ITextFlow}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getTextFlow = function() {
};
/**
 * @export
 * @return {org.apache.royale.textLayout.elements.IParagraphElement}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getParagraph = function() {
};
/**
 * @export
 * @return {org.apache.royale.textLayout.elements.ITableCellElement}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getParentCellElement = function() {
};
/**
 * @export
 * @param {string} elementType
 * @return {org.apache.royale.textLayout.elements.IFlowElement}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getParentByType = function(elementType) {
};
/**
 * @export
 * @return {org.apache.royale.textLayout.elements.IFlowElement}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getPreviousSibling = function() {
};
/**
 * @export
 * @return {org.apache.royale.textLayout.elements.IFlowElement}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getNextSibling = function() {
};
/**
 * @export
 * @param {number} relativePosition
 * @return {string}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getCharAtPosition = function(relativePosition) {
};
/**
 * @export
 * @param {number} relativePosition
 * @return {number}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getCharCodeAtPosition = function(relativePosition) {
};
/**  * @type {string}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.className;
/**  * @type {Object}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.userStyles;
/**  * @type {Object}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.coreStyles;
/**  * @type {Object}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.styles;
/**  * @type {boolean}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.bindableElement;
/**  * @type {org.apache.royale.textLayout.elements.IFlowGroupElement}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.parent;
/**  * @type {number}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.textLength;
/**  * @type {number}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.parentRelativeStart;
/**  * @type {number}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.parentRelativeEnd;
/**  * @type {string}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.id;
/**  * @type {string}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.typeName;
/**  * @type {string}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.defaultTypeName;
/**  * @type {boolean}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.impliedElement;
/**  * @type {org.apache.royale.textLayout.formats.ITextLayoutFormat}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.formatForCascade;
/**  * @type {org.apache.royale.textLayout.formats.ITextLayoutFormat}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.computedFormat;
/**
 * @export
 * @param {string} styleProp
 * @return {*}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getUserStyleWorker = function(styleProp) {
};
/**
 * @export
 * @param {string} changeType
 * @param {org.apache.royale.textLayout.elements.IFlowElement} element
 * @param {number} changeStart
 * @param {number} changeLen
 * @param {boolean=} needNormalize
 * @param {boolean=} bumpGeneration
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.modelChanged = function(changeType, element, changeStart, changeLen, needNormalize, bumpGeneration) {
};
/**  * @type {Object}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.tracking;
/**
 * @export
 * @param {number} i
 * @return {org.apache.royale.textLayout.elements.IFlowElement}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.splitAtPosition = function(i) {
};
/**  * @type {org.apache.royale.textLayout.formats.ITextLayoutFormat}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.format;
/**
 * @export
 * @return {boolean}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.hasActiveEventMirror = function() {
};
/**
 * @export
 * @param {number=} relativeStart
 * @param {number=} relativeEnd
 * @return {org.apache.royale.textLayout.elements.IFlowElement}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.deepCopy = function(relativeStart, relativeEnd) {
};
/**
 * @export
 * @param {number=} relativeStart
 * @param {number=} relativeEnd
 * @return {org.apache.royale.textLayout.elements.IFlowElement}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.shallowCopy = function(relativeStart, relativeEnd) {
};
/**
 * @export
 * @param {number} normalizeStart
 * @param {number} normalizeEnd
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.normalizeRange = function(normalizeStart, normalizeEnd) {
};
/**
 * @export
 * @param {org.apache.royale.textLayout.elements.IFlowElement} sibling
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.quickCloneTextLayoutFormat = function(sibling) {
};
/**
 * @export
 * @param {Function} func
 * @return {boolean}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.applyFunctionToElements = function(func) {
};
org.apache.royale.textLayout.elements.IFlowElement.prototype.removed = function() {
};
/**
 * @export
 * @param {org.apache.royale.textLayout.elements.IFlowGroupElement} newParent
 * @param {number} newStart
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.setParentAndRelativeStart = function(newParent, newStart) {
};
/**
 * @export
 * @param {org.apache.royale.textLayout.elements.IFlowGroupElement} newParent
 * @param {number} newStart
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.setParentAndRelativeStartOnly = function(newParent, newStart) {
};
/**
 * @export
 * @param {number} newStart
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.setParentRelativeStart = function(newStart) {
};
/**
 * @export
 * @param {string} collapse
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.applyWhiteSpaceCollapse = function(collapse) {
};
/**
 * @export
 * @param {org.apache.royale.textLayout.elements.ITextFlow} tf
 * @param {string} changeType
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.appendElementsForDelayedUpdate = function(tf, changeType) {
};
/**
 * @export
 * @param {number} len
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.updateRange = function(len) {
};
org.apache.royale.textLayout.elements.IFlowElement.prototype.releaseContentElement = function() {
};
org.apache.royale.textLayout.elements.IFlowElement.prototype.createContentElement = function() {
};
/**
 * @export
 * @param {number} startIdx
 * @param {number} len
 * @param {boolean} updateLines
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.updateLengths = function(startIdx, len, updateLines) {
};
/**
 * @export
 * @param {Object} styles
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.setStylesInternal = function(styles) {
};
/**
 * @export
 * @return {boolean}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.mergeToPreviousIfPossible = function() {
};
/**  * @type {*}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.backgroundAlpha;
/**  * @type {*}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.backgroundColor;
/**
 * @export
 * @return {org.apache.royale.events.IEventDispatcher}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.getEventMirror = function() {
};
/**  * @type {*}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.listMarkerFormat;
/**
 * @export
 * @return {org.apache.royale.textLayout.formats.ITextLayoutFormat}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.calculateComputedFormat = function() {
};
/**  * @type {*}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.fontSize;
/**  * @type {*}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.xScale;
/**  * @type {*}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.yScale;
/**  * @type {*}
 */org.apache.royale.textLayout.elements.IFlowElement.prototype.columnWidth;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IFlowElement', qName: 'org.apache.royale.textLayout.elements.IFlowElement', kind: 'interface' }], interfaces: [org.apache.royale.textLayout.formats.ITextLayoutFormat] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'className': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'userStyles': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'coreStyles': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'styles': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'bindableElement': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'parent': { type: 'org.apache.royale.textLayout.elements.IFlowGroupElement', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'textLength': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'parentRelativeStart': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'parentRelativeEnd': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'id': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'typeName': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'defaultTypeName': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'impliedElement': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'formatForCascade': { type: 'org.apache.royale.textLayout.formats.ITextLayoutFormat', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'computedFormat': { type: 'org.apache.royale.textLayout.formats.ITextLayoutFormat', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'tracking': { type: 'Object', access: 'writeonly', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'format': { type: 'org.apache.royale.textLayout.formats.ITextLayoutFormat', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'backgroundAlpha': { type: '*', access: 'writeonly', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'backgroundColor': { type: '*', access: 'writeonly', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'listMarkerFormat': { type: '*', access: 'writeonly', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'fontSize': { type: '*', access: 'writeonly', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'xScale': { type: '*', access: 'writeonly', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'yScale': { type: '*', access: 'writeonly', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'columnWidth': { type: '*', access: 'writeonly', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'}
      };
    },
    methods: function () {
      return {
        'getText': { type: 'String', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'int', true ,'int', true ,'String', true ]; }},
        'getAncestorWithContainer': { type: 'org.apache.royale.textLayout.elements.IContainerFormattedElement', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getPrivateStyle': { type: '*', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'String', false ]; }},
        'formatChanged': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'Boolean', true ]; }},
        'setStyle': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'String', false ,'*', false ]; }},
        'getEffectivePaddingLeft': { type: 'Number', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getEffectivePaddingRight': { type: 'Number', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getEffectivePaddingTop': { type: 'Number', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getEffectivePaddingBottom': { type: 'Number', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getEffectiveBorderLeftWidth': { type: 'Number', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getEffectiveBorderRightWidth': { type: 'Number', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getEffectiveBorderTopWidth': { type: 'Number', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getEffectiveBorderBottomWidth': { type: 'Number', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getEffectiveMarginLeft': { type: 'Number', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getEffectiveMarginRight': { type: 'Number', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getEffectiveMarginTop': { type: 'Number', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getEffectiveMarginBottom': { type: 'Number', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getAbsoluteStart': { type: 'int', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getElementRelativeStart': { type: 'int', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IFlowElement', false ]; }},
        'getTextFlow': { type: 'org.apache.royale.textLayout.elements.ITextFlow', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getParagraph': { type: 'org.apache.royale.textLayout.elements.IParagraphElement', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getParentCellElement': { type: 'org.apache.royale.textLayout.elements.ITableCellElement', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getParentByType': { type: 'org.apache.royale.textLayout.elements.IFlowElement', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'String', false ]; }},
        'getPreviousSibling': { type: 'org.apache.royale.textLayout.elements.IFlowElement', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getNextSibling': { type: 'org.apache.royale.textLayout.elements.IFlowElement', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getCharAtPosition': { type: 'String', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'int', false ]; }},
        'getCharCodeAtPosition': { type: 'int', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'int', false ]; }},
        'getUserStyleWorker': { type: '*', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'String', false ]; }},
        'modelChanged': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'String', false ,'org.apache.royale.textLayout.elements.IFlowElement', false ,'int', false ,'int', false ,'Boolean', true ,'Boolean', true ]; }},
        'splitAtPosition': { type: 'org.apache.royale.textLayout.elements.IFlowElement', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'int', false ]; }},
        'hasActiveEventMirror': { type: 'Boolean', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'deepCopy': { type: 'org.apache.royale.textLayout.elements.IFlowElement', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'int', true ,'int', true ]; }},
        'shallowCopy': { type: 'org.apache.royale.textLayout.elements.IFlowElement', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'int', true ,'int', true ]; }},
        'normalizeRange': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'uint', false ,'uint', false ]; }},
        'quickCloneTextLayoutFormat': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IFlowElement', false ]; }},
        'applyFunctionToElements': { type: 'Boolean', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'Function', false ]; }},
        'removed': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'setParentAndRelativeStart': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IFlowGroupElement', false ,'int', false ]; }},
        'setParentAndRelativeStartOnly': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IFlowGroupElement', false ,'int', false ]; }},
        'setParentRelativeStart': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'int', false ]; }},
        'applyWhiteSpaceCollapse': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'String', false ]; }},
        'appendElementsForDelayedUpdate': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'org.apache.royale.textLayout.elements.ITextFlow', false ,'String', false ]; }},
        'updateRange': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'int', false ]; }},
        'releaseContentElement': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'createContentElement': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'updateLengths': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'int', false ,'int', false ,'Boolean', false ]; }},
        'setStylesInternal': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement', parameters: function () { return [ 'Object', false ]; }},
        'mergeToPreviousIfPossible': { type: 'Boolean', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'getEventMirror': { type: 'org.apache.royale.events.IEventDispatcher', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'},
        'calculateComputedFormat': { type: 'org.apache.royale.textLayout.formats.ITextLayoutFormat', declaredBy: 'org.apache.royale.textLayout.elements.IFlowElement'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.elements.IFlowElement.prototype.ROYALE_COMPILE_FLAGS = 10;
