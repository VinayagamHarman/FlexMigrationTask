/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/edit/ElementMark.as
 * org.apache.royale.textLayout.edit.ElementMark
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.edit.ElementMark');
/* Royale Dependency List: org.apache.royale.textLayout.elements.IFlowElement,org.apache.royale.textLayout.elements.IFlowGroupElement,org.apache.royale.textLayout.elements.ITextFlow,XML*/




/**
 * @constructor
 * @param {org.apache.royale.textLayout.elements.IFlowElement} elem
 * @param {number} relativeStartPosition
 */
org.apache.royale.textLayout.edit.ElementMark = function(elem, relativeStartPosition) {
  this._elemStart = relativeStartPosition;
  this._indexChain = [];
  
  
  var /** @type {org.apache.royale.textLayout.elements.IFlowGroupElement} */ p = elem.parent;
  while (p != null) {
    this._indexChain.splice(0, 0, p.getChildIndex(elem));
    elem = p;
    p = p.parent;
  }
  
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.edit.ElementMark', org.apache.royale.textLayout.edit.ElementMark);


/**
 * @export
 * @type {number}
 */
org.apache.royale.textLayout.edit.ElementMark.prototype._elemStart = 0;


/**
 * @export
 * @type {Array}
 */
org.apache.royale.textLayout.edit.ElementMark.prototype._indexChain;


/**
 * @royaleignorecoercion org.apache.royale.textLayout.elements.IFlowGroupElement
 * @export
 * @param {org.apache.royale.textLayout.elements.ITextFlow} textFlow
 * @return {org.apache.royale.textLayout.elements.IFlowElement}
 */
org.apache.royale.textLayout.edit.ElementMark.prototype.findElement = function(textFlow) {
  var /** @type {org.apache.royale.textLayout.elements.IFlowElement} */ element = textFlow;
  var foreachiter0_target = this._indexChain;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var idx = foreachiter0_target[foreachiter0];
  
    element = element.getChildAt(idx);}
  
  
  return element;
};


org.apache.royale.textLayout.edit.ElementMark.prototype.get__elemStart = function() {
  return this._elemStart;
};


Object.defineProperties(org.apache.royale.textLayout.edit.ElementMark.prototype, /** @lends {org.apache.royale.textLayout.edit.ElementMark.prototype} */ {
/**
  * @export
  * @type {number} */
elemStart: {
get: org.apache.royale.textLayout.edit.ElementMark.prototype.get__elemStart}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.edit.ElementMark.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ElementMark', qName: 'org.apache.royale.textLayout.edit.ElementMark', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.edit.ElementMark.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        '_elemStart': { type: 'int', get_set: function (/** org.apache.royale.textLayout.edit.ElementMark */ inst, /** * */ v) {return v !== undefined ? inst._elemStart = v : inst._elemStart;}},
        '_indexChain': { type: 'Array', get_set: function (/** org.apache.royale.textLayout.edit.ElementMark */ inst, /** * */ v) {return v !== undefined ? inst._indexChain = v : inst._indexChain;}}
      };
    },
    accessors: function () {
      return {
        'elemStart': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.edit.ElementMark'}
      };
    },
    methods: function () {
      return {
        'ElementMark': { type: '', declaredBy: 'org.apache.royale.textLayout.edit.ElementMark', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IFlowElement', false ,'int', false ]; }},
        'findElement': { type: 'org.apache.royale.textLayout.elements.IFlowElement', declaredBy: 'org.apache.royale.textLayout.edit.ElementMark', parameters: function () { return [ 'org.apache.royale.textLayout.elements.ITextFlow', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.edit.ElementMark.prototype.ROYALE_COMPILE_FLAGS = 10;
