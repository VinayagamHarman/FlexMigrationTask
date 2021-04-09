/**
 * Generated by Apache Royale Compiler from org/apache/royale/text/engine/ITextLine.as
 * org.apache.royale.text.engine.ITextLine
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.text.engine.ITextLine');
/* Royale Dependency List: org.apache.royale.core.IUIBase,org.apache.royale.geom.Rectangle,org.apache.royale.text.engine.ITextBlock*/

goog.require('org.apache.royale.core.IParentIUIBase');



/**
 * @interface
 * @extends {org.apache.royale.core.IParentIUIBase}
 */
org.apache.royale.text.engine.ITextLine = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.text.engine.ITextLine', org.apache.royale.text.engine.ITextLine);
/**  * @type {number}
 */org.apache.royale.text.engine.ITextLine.prototype.ascent;
/**  * @type {number}
 */org.apache.royale.text.engine.ITextLine.prototype.atomCount;
/**  * @type {string}
 */org.apache.royale.text.engine.ITextLine.prototype.blendMode;
/**  * @type {boolean}
 */org.apache.royale.text.engine.ITextLine.prototype.cacheAsBitmap;
/**  * @type {number}
 */org.apache.royale.text.engine.ITextLine.prototype.descent;
/**  * @type {boolean}
 */org.apache.royale.text.engine.ITextLine.prototype.doubleClickEnabled;
/**  * @type {boolean}
 */org.apache.royale.text.engine.ITextLine.prototype.hasGraphicElement;
/**  * @type {boolean}
 */org.apache.royale.text.engine.ITextLine.prototype.hasTabs;
/**  * @type {org.apache.royale.text.engine.ITextLine}
 */org.apache.royale.text.engine.ITextLine.prototype.nextLine;
/**  * @type {org.apache.royale.text.engine.ITextLine}
 */org.apache.royale.text.engine.ITextLine.prototype.previousLine;
/**  * @type {number}
 */org.apache.royale.text.engine.ITextLine.prototype.rawTextLength;
/**  * @type {number}
 */org.apache.royale.text.engine.ITextLine.prototype.specifiedWidth;
/**  * @type {org.apache.royale.text.engine.ITextBlock}
 */org.apache.royale.text.engine.ITextLine.prototype.textBlock;
/**  * @type {number}
 */org.apache.royale.text.engine.ITextLine.prototype.textBlockBeginIndex;
/**  * @type {number}
 */org.apache.royale.text.engine.ITextLine.prototype.textHeight;
/**  * @type {number}
 */org.apache.royale.text.engine.ITextLine.prototype.textWidth;
/**  * @type {number}
 */org.apache.royale.text.engine.ITextLine.prototype.totalAscent;
/**  * @type {number}
 */org.apache.royale.text.engine.ITextLine.prototype.totalDescent;
/**  * @type {number}
 */org.apache.royale.text.engine.ITextLine.prototype.totalHeight;
/**  * @type {number}
 */org.apache.royale.text.engine.ITextLine.prototype.unjustifiedTextWidth;
/**  * @type {*}
 */org.apache.royale.text.engine.ITextLine.prototype.userData;
/**  * @type {string}
 */org.apache.royale.text.engine.ITextLine.prototype.validity;
/**  * @type {org.apache.royale.text.engine.ITextLine}
 */org.apache.royale.text.engine.ITextLine.prototype.numberLine;
/**
 * @export
 * @return {string}
 */
org.apache.royale.text.engine.ITextLine.prototype.dump = function() {
};
/**
 * @export
 * @param {number} atomIndex
 * @return {number}
 */
org.apache.royale.text.engine.ITextLine.prototype.getAtomBidiLevel = function(atomIndex) {
};
/**
 * @export
 * @param {number} atomIndex
 * @return {org.apache.royale.geom.Rectangle}
 */
org.apache.royale.text.engine.ITextLine.prototype.getAtomBounds = function(atomIndex) {
};
/**
 * @export
 * @param {number} atomIndex
 * @return {number}
 */
org.apache.royale.text.engine.ITextLine.prototype.getAtomCenter = function(atomIndex) {
};
/**
 * @export
 * @param {number} atomIndex
 * @return {org.apache.royale.core.IUIBase}
 */
org.apache.royale.text.engine.ITextLine.prototype.getAtomGraphic = function(atomIndex) {
};
/**
 * @export
 * @param {number} charIndex
 * @return {number}
 */
org.apache.royale.text.engine.ITextLine.prototype.getAtomIndexAtCharIndex = function(charIndex) {
};
/**
 * @export
 * @param {number} stageX
 * @param {number} stageY
 * @return {number}
 */
org.apache.royale.text.engine.ITextLine.prototype.getAtomIndexAtPoint = function(stageX, stageY) {
};
/**
 * @export
 * @param {number} atomIndex
 * @return {number}
 */
org.apache.royale.text.engine.ITextLine.prototype.getAtomTextBlockBeginIndex = function(atomIndex) {
};
/**
 * @export
 * @param {number} atomIndex
 * @return {number}
 */
org.apache.royale.text.engine.ITextLine.prototype.getAtomTextBlockEndIndex = function(atomIndex) {
};
/**
 * @export
 * @param {number} atomIndex
 * @return {string}
 */
org.apache.royale.text.engine.ITextLine.prototype.getAtomTextRotation = function(atomIndex) {
};
/**
 * @export
 * @param {number} atomIndex
 * @return {boolean}
 */
org.apache.royale.text.engine.ITextLine.prototype.getAtomWordBoundaryOnLeft = function(atomIndex) {
};
/**
 * @export
 * @param {string} baseline
 * @return {number}
 */
org.apache.royale.text.engine.ITextLine.prototype.getBaselinePosition = function(baseline) {
};
/**
 * @export
 * @return {number}
 */
org.apache.royale.text.engine.ITextLine.prototype.getAdornmentOffsetBase = function() {
};
/**
 * @export
 * @param {Object} ref
 * @return {org.apache.royale.geom.Rectangle}
 */
org.apache.royale.text.engine.ITextLine.prototype.getBounds = function(ref) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.text.engine.ITextLine.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ITextLine', qName: 'org.apache.royale.text.engine.ITextLine', kind: 'interface' }], interfaces: [org.apache.royale.core.IParentIUIBase] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.text.engine.ITextLine.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'ascent': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'atomCount': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'blendMode': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'cacheAsBitmap': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'descent': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'doubleClickEnabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'hasGraphicElement': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'hasTabs': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'nextLine': { type: 'org.apache.royale.text.engine.ITextLine', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'previousLine': { type: 'org.apache.royale.text.engine.ITextLine', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'rawTextLength': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'specifiedWidth': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'textBlock': { type: 'org.apache.royale.text.engine.ITextBlock', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'textBlockBeginIndex': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'textHeight': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'textWidth': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'totalAscent': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'totalDescent': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'totalHeight': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'unjustifiedTextWidth': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'userData': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'validity': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'numberLine': { type: 'org.apache.royale.text.engine.ITextLine', access: 'readwrite', declaredBy: 'org.apache.royale.text.engine.ITextLine'}
      };
    },
    methods: function () {
      return {
        'dump': { type: 'String', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'getAtomBidiLevel': { type: 'int', declaredBy: 'org.apache.royale.text.engine.ITextLine', parameters: function () { return [ 'int', false ]; }},
        'getAtomBounds': { type: 'org.apache.royale.geom.Rectangle', declaredBy: 'org.apache.royale.text.engine.ITextLine', parameters: function () { return [ 'int', false ]; }},
        'getAtomCenter': { type: 'Number', declaredBy: 'org.apache.royale.text.engine.ITextLine', parameters: function () { return [ 'int', false ]; }},
        'getAtomGraphic': { type: 'org.apache.royale.core.IUIBase', declaredBy: 'org.apache.royale.text.engine.ITextLine', parameters: function () { return [ 'int', false ]; }},
        'getAtomIndexAtCharIndex': { type: 'int', declaredBy: 'org.apache.royale.text.engine.ITextLine', parameters: function () { return [ 'int', false ]; }},
        'getAtomIndexAtPoint': { type: 'int', declaredBy: 'org.apache.royale.text.engine.ITextLine', parameters: function () { return [ 'Number', false ,'Number', false ]; }},
        'getAtomTextBlockBeginIndex': { type: 'int', declaredBy: 'org.apache.royale.text.engine.ITextLine', parameters: function () { return [ 'int', false ]; }},
        'getAtomTextBlockEndIndex': { type: 'int', declaredBy: 'org.apache.royale.text.engine.ITextLine', parameters: function () { return [ 'int', false ]; }},
        'getAtomTextRotation': { type: 'String', declaredBy: 'org.apache.royale.text.engine.ITextLine', parameters: function () { return [ 'int', false ]; }},
        'getAtomWordBoundaryOnLeft': { type: 'Boolean', declaredBy: 'org.apache.royale.text.engine.ITextLine', parameters: function () { return [ 'int', false ]; }},
        'getBaselinePosition': { type: 'Number', declaredBy: 'org.apache.royale.text.engine.ITextLine', parameters: function () { return [ 'String', false ]; }},
        'getAdornmentOffsetBase': { type: 'Number', declaredBy: 'org.apache.royale.text.engine.ITextLine'},
        'getBounds': { type: 'org.apache.royale.geom.Rectangle', declaredBy: 'org.apache.royale.text.engine.ITextLine', parameters: function () { return [ 'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.text.engine.ITextLine.prototype.ROYALE_COMPILE_FLAGS = 10;
