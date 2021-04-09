/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/elements/BackgroundManager.as
 * org.apache.royale.textLayout.elements.BackgroundManager
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.elements.BackgroundManager');
/* Royale Dependency List: org.apache.royale.core.IParentIUIBase,org.apache.royale.core.IUIBase,org.apache.royale.geom.Rectangle,org.apache.royale.graphics.IGraphicShape,org.apache.royale.text.engine.ITextLine,org.apache.royale.textLayout.compose.ITextFlowLine,org.apache.royale.textLayout.container.IContainerController,org.apache.royale.textLayout.elements.IFlowElement,org.apache.royale.textLayout.elements.IFlowLeafElement,org.apache.royale.textLayout.elements.ITextFlow,org.apache.royale.textLayout.formats.ITextLayoutFormat,org.apache.royale.utils.ObjectMap,XML*/

goog.require('org.apache.royale.textLayout.elements.IBackgroundManager');



/**
 * @constructor
 * @implements {org.apache.royale.textLayout.elements.IBackgroundManager}
 */
org.apache.royale.textLayout.elements.BackgroundManager = function() {
  this._lineDict = new org.apache.royale.utils.ObjectMap(true);
  this._blockElementDict = new org.apache.royale.utils.ObjectMap(true);
  this._rectArray = new Array();
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.elements.BackgroundManager', org.apache.royale.textLayout.elements.BackgroundManager);


/**
 * @export
 * @nocollapse
 * @type {org.apache.royale.utils.ObjectMap}
 */
org.apache.royale.textLayout.elements.BackgroundManager.BACKGROUND_MANAGER_CACHE = null;


/**
 * @export
 * @nocollapse
 * @type {string}
 */
org.apache.royale.textLayout.elements.BackgroundManager.TOP_EXCLUDED = "topExcluded";


/**
 * @export
 * @nocollapse
 * @type {string}
 */
org.apache.royale.textLayout.elements.BackgroundManager.BOTTOM_EXCLUDED = "bottomExcluded";


/**
 * @export
 * @nocollapse
 * @type {string}
 */
org.apache.royale.textLayout.elements.BackgroundManager.TOP_AND_BOTTOM_EXCLUDED = "topAndBottomExcluded";


/**
 * @protected
 * @type {org.apache.royale.utils.ObjectMap}
 */
org.apache.royale.textLayout.elements.BackgroundManager.prototype._lineDict;


/**
 * @protected
 * @type {org.apache.royale.utils.ObjectMap}
 */
org.apache.royale.textLayout.elements.BackgroundManager.prototype._blockElementDict;


/**
 * @protected
 * @type {Array}
 */
org.apache.royale.textLayout.elements.BackgroundManager.prototype._rectArray;


/**
 * @export
 */
org.apache.royale.textLayout.elements.BackgroundManager.prototype.clearBlockRecord = function() {
  this._rectArray.splice(0, this._rectArray.length);
};


/**
 * @export
 * @param {org.apache.royale.textLayout.elements.IFlowElement} elem
 * @param {org.apache.royale.geom.Rectangle} r
 * @param {org.apache.royale.textLayout.container.IContainerController=} cc
 * @param {string=} style
 */
org.apache.royale.textLayout.elements.BackgroundManager.prototype.addBlockRect = function(elem, r, cc, style) {
  cc = typeof cc !== 'undefined' ? cc : null;
  style = typeof style !== 'undefined' ? style : null;
  var /** @type {Object} */ rect = {};
  rect.r = r;
  rect.elem = elem;
  rect.cc = cc;
  rect.style = style;
  this._rectArray.unshift(rect);
};


/**
 * @export
 * @param {org.apache.royale.textLayout.elements.IFlowElement} elem
 */
org.apache.royale.textLayout.elements.BackgroundManager.prototype.addBlockElement = function(elem) {
  if (!this._blockElementDict.hasOwnProperty(elem)) {
    var /** @type {org.apache.royale.textLayout.formats.ITextLayoutFormat} */ format = elem.computedFormat;
    var /** @type {Object} */ record = {};
    record.backgroundColor = format.backgroundColor;
    record.backgroundAlpha = format.backgroundAlpha;
    record.borderLeftWidth = format.borderLeftWidth;
    record.borderRightWidth = format.borderRightWidth;
    record.borderTopWidth = format.borderTopWidth;
    record.borderBottomWidth = format.borderBottomWidth;
    record.borderLeftColor = format.borderLeftColor;
    record.borderRightColor = format.borderRightColor;
    record.borderTopColor = format.borderTopColor;
    record.borderBottomColor = format.borderBottomColor;
    this._blockElementDict[elem] = record;
  }
};


/**
 * @export
 * @param {org.apache.royale.text.engine.ITextLine} tl
 * @param {org.apache.royale.textLayout.elements.IFlowLeafElement} fle
 * @param {org.apache.royale.geom.Rectangle} r
 * @param {number} color
 * @param {number} alpha
 */
org.apache.royale.textLayout.elements.BackgroundManager.prototype.addRect = function(tl, fle, r, color, alpha) {
  var /** @type {Array} */ entry = this._lineDict[tl];
  if (entry == null)
    entry = this._lineDict[tl] = new Array();
  var /** @type {Object} */ record = {};
  record.rect = r;
  record.fle = fle;
  record.color = color;
  record.alpha = alpha;
  var /** @type {number} */ fleAbsoluteStart = fle.getAbsoluteStart();
  for (var /** @type {number} */ i = 0; i < entry.length; ++i) {
    var /** @type {Object} */ currRecord = entry[i];
    if (currRecord.hasOwnProperty("fle") && currRecord.fle.getAbsoluteStart() == fleAbsoluteStart) {
      entry[i] = record;
      return;
    }
  }
  entry.push(record);
};


/**
 * @export
 * @param {org.apache.royale.text.engine.ITextLine} tl
 * @param {org.apache.royale.text.engine.ITextLine} numberLine
 */
org.apache.royale.textLayout.elements.BackgroundManager.prototype.addNumberLine = function(tl, numberLine) {
  var /** @type {Array} */ entry = this._lineDict[tl];
  if (entry == null)
    entry = this._lineDict[tl] = new Array();
  entry.push({numberLine:numberLine});
};


/**
 * @export
 * @param {org.apache.royale.textLayout.compose.ITextFlowLine} line
 */
org.apache.royale.textLayout.elements.BackgroundManager.prototype.finalizeLine = function(line) {
  return;
};


/** @asprivate 
 * @export
 * @param {org.apache.royale.text.engine.ITextLine} line
 * @return {*}
 */
org.apache.royale.textLayout.elements.BackgroundManager.prototype.getEntry = function(line) {
  return this._lineDict ? this._lineDict[line] : undefined;
};


/**
 * @export
 * @param {org.apache.royale.textLayout.elements.ITextFlow} textFlow
 * @param {org.apache.royale.graphics.IGraphicShape} bgShape
 * @param {number} constrainWidth
 * @param {number} constrainHeight
 */
org.apache.royale.textLayout.elements.BackgroundManager.prototype.drawAllRects = function(textFlow, bgShape, constrainWidth, constrainHeight) {
};


/**
 * @export
 * @param {org.apache.royale.text.engine.ITextLine} tl
 */
org.apache.royale.textLayout.elements.BackgroundManager.prototype.removeLineFromCache = function(tl) {
  delete this._lineDict[tl];
};


/**
 * @export
 * @param {org.apache.royale.textLayout.container.IContainerController} controller
 */
org.apache.royale.textLayout.elements.BackgroundManager.prototype.onUpdateComplete = function(controller) {
  var /** @type {org.apache.royale.core.IParentIUIBase} */ container = controller.container;
  var /** @type {org.apache.royale.core.IUIBase} */ bgShape;
  if (container && container.numElements) {
    bgShape = controller.getBackgroundShape();
  }
};


/**
 * @export
 * @return {Array}
 */
org.apache.royale.textLayout.elements.BackgroundManager.prototype.getShapeRectArray = function() {
  return this._rectArray;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.elements.BackgroundManager.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'BackgroundManager', qName: 'org.apache.royale.textLayout.elements.BackgroundManager', kind: 'class' }], interfaces: [org.apache.royale.textLayout.elements.IBackgroundManager] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.elements.BackgroundManager.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        '|BACKGROUND_MANAGER_CACHE': { type: 'org.apache.royale.utils.ObjectMap', get_set: function (/** * */ v) {return v !== undefined ? org.apache.royale.textLayout.elements.BackgroundManager.BACKGROUND_MANAGER_CACHE = v : org.apache.royale.textLayout.elements.BackgroundManager.BACKGROUND_MANAGER_CACHE;}},
        '|TOP_EXCLUDED': { type: 'String', get_set: function (/** * */ v) {return v !== undefined ? org.apache.royale.textLayout.elements.BackgroundManager.TOP_EXCLUDED = v : org.apache.royale.textLayout.elements.BackgroundManager.TOP_EXCLUDED;}},
        '|BOTTOM_EXCLUDED': { type: 'String', get_set: function (/** * */ v) {return v !== undefined ? org.apache.royale.textLayout.elements.BackgroundManager.BOTTOM_EXCLUDED = v : org.apache.royale.textLayout.elements.BackgroundManager.BOTTOM_EXCLUDED;}},
        '|TOP_AND_BOTTOM_EXCLUDED': { type: 'String', get_set: function (/** * */ v) {return v !== undefined ? org.apache.royale.textLayout.elements.BackgroundManager.TOP_AND_BOTTOM_EXCLUDED = v : org.apache.royale.textLayout.elements.BackgroundManager.TOP_AND_BOTTOM_EXCLUDED;}}
      };
    },
    methods: function () {
      return {
        'BackgroundManager': { type: '', declaredBy: 'org.apache.royale.textLayout.elements.BackgroundManager'},
        'clearBlockRecord': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.BackgroundManager'},
        'addBlockRect': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.BackgroundManager', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IFlowElement', false ,'org.apache.royale.geom.Rectangle', false ,'org.apache.royale.textLayout.container.IContainerController', true ,'String', true ]; }},
        'addBlockElement': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.BackgroundManager', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IFlowElement', false ]; }},
        'addRect': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.BackgroundManager', parameters: function () { return [ 'org.apache.royale.text.engine.ITextLine', false ,'org.apache.royale.textLayout.elements.IFlowLeafElement', false ,'org.apache.royale.geom.Rectangle', false ,'uint', false ,'Number', false ]; }},
        'addNumberLine': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.BackgroundManager', parameters: function () { return [ 'org.apache.royale.text.engine.ITextLine', false ,'org.apache.royale.text.engine.ITextLine', false ]; }},
        'finalizeLine': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.BackgroundManager', parameters: function () { return [ 'org.apache.royale.textLayout.compose.ITextFlowLine', false ]; }},
        'getEntry': { type: '*', declaredBy: 'org.apache.royale.textLayout.elements.BackgroundManager', parameters: function () { return [ 'org.apache.royale.text.engine.ITextLine', false ]; }},
        'drawAllRects': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.BackgroundManager', parameters: function () { return [ 'org.apache.royale.textLayout.elements.ITextFlow', false ,'org.apache.royale.graphics.IGraphicShape', false ,'Number', false ,'Number', false ]; }},
        'removeLineFromCache': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.BackgroundManager', parameters: function () { return [ 'org.apache.royale.text.engine.ITextLine', false ]; }},
        'onUpdateComplete': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.BackgroundManager', parameters: function () { return [ 'org.apache.royale.textLayout.container.IContainerController', false ]; }},
        'getShapeRectArray': { type: 'Array', declaredBy: 'org.apache.royale.textLayout.elements.BackgroundManager'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.elements.BackgroundManager.prototype.ROYALE_COMPILE_FLAGS = 10;
