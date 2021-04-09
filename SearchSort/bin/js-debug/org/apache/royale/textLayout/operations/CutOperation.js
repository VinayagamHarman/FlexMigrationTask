/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/operations/CutOperation.as
 * org.apache.royale.textLayout.operations.CutOperation
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.operations.CutOperation');
/* Royale Dependency List: org.apache.royale.textLayout.edit.SelectionState,org.apache.royale.textLayout.edit.TextScrap,org.apache.royale.textLayout.operations.DeleteTextOperation,XML*/

goog.require('org.apache.royale.textLayout.operations.FlowTextOperation');



/** 
 * Creates a CutOperation object.
 * 
 * @asparam operationState The range of text to be cut.
 * @asparam scrapToCut A copy of the deleted text.
 * 
 * @playerversion Flash 10
 * @playerversion AIR 1.5
 * @langversion 3.0 
 * @constructor
 * @extends {org.apache.royale.textLayout.operations.FlowTextOperation}
 * @param {org.apache.royale.textLayout.edit.SelectionState} operationState
 * @param {org.apache.royale.textLayout.edit.TextScrap} scrapToCut
 */
org.apache.royale.textLayout.operations.CutOperation = function(operationState, scrapToCut) {
  org.apache.royale.textLayout.operations.CutOperation.base(this, 'constructor', operationState);
  if (this.absoluteStart < this.absoluteEnd)
    this.org_apache_royale_textLayout_operations_CutOperation__tScrap = scrapToCut;
};
goog.inherits(org.apache.royale.textLayout.operations.CutOperation, org.apache.royale.textLayout.operations.FlowTextOperation);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.operations.CutOperation', org.apache.royale.textLayout.operations.CutOperation);


/**
 * @private
 * @type {org.apache.royale.textLayout.edit.TextScrap}
 */
org.apache.royale.textLayout.operations.CutOperation.prototype.org_apache_royale_textLayout_operations_CutOperation__tScrap;


/**
 * @private
 * @type {org.apache.royale.textLayout.operations.DeleteTextOperation}
 */
org.apache.royale.textLayout.operations.CutOperation.prototype.org_apache_royale_textLayout_operations_CutOperation__deleteTextOperation;


/** @asprivate 
 * @export
 * @override
 */
org.apache.royale.textLayout.operations.CutOperation.prototype.doOperation = function() {
  this.org_apache_royale_textLayout_operations_CutOperation__deleteTextOperation = new org.apache.royale.textLayout.operations.DeleteTextOperation(this.originalSelectionState);
  return this.org_apache_royale_textLayout_operations_CutOperation__deleteTextOperation.doOperation();
};


/** @asprivate 
 * @export
 * @override
 */
org.apache.royale.textLayout.operations.CutOperation.prototype.undo = function() {
  return this.org_apache_royale_textLayout_operations_CutOperation__deleteTextOperation.undo();
};


/** @asprivate 
 * @export
 * @override
 */
org.apache.royale.textLayout.operations.CutOperation.prototype.redo = function() {
  return this.org_apache_royale_textLayout_operations_CutOperation__deleteTextOperation.redo();
};


org.apache.royale.textLayout.operations.CutOperation.prototype.get__scrapToCut = function() {
  return this.org_apache_royale_textLayout_operations_CutOperation__tScrap;
};


org.apache.royale.textLayout.operations.CutOperation.prototype.set__scrapToCut = function(val) {
  this.org_apache_royale_textLayout_operations_CutOperation__tScrap = val;
};


Object.defineProperties(org.apache.royale.textLayout.operations.CutOperation.prototype, /** @lends {org.apache.royale.textLayout.operations.CutOperation.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.textLayout.edit.TextScrap} */
scrapToCut: {
get: org.apache.royale.textLayout.operations.CutOperation.prototype.get__scrapToCut,
set: org.apache.royale.textLayout.operations.CutOperation.prototype.set__scrapToCut}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.operations.CutOperation.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'CutOperation', qName: 'org.apache.royale.textLayout.operations.CutOperation', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.operations.CutOperation.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'scrapToCut': { type: 'org.apache.royale.textLayout.edit.TextScrap', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.operations.CutOperation'}
      };
    },
    methods: function () {
      return {
        'CutOperation': { type: '', declaredBy: 'org.apache.royale.textLayout.operations.CutOperation', parameters: function () { return [ 'org.apache.royale.textLayout.edit.SelectionState', false ,'org.apache.royale.textLayout.edit.TextScrap', false ]; }},
        'doOperation': { type: 'Boolean', declaredBy: 'org.apache.royale.textLayout.operations.CutOperation'},
        'undo': { type: 'org.apache.royale.textLayout.edit.SelectionState', declaredBy: 'org.apache.royale.textLayout.operations.CutOperation'},
        'redo': { type: 'org.apache.royale.textLayout.edit.SelectionState', declaredBy: 'org.apache.royale.textLayout.operations.CutOperation'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.operations.CutOperation.prototype.ROYALE_COMPILE_FLAGS = 10;
