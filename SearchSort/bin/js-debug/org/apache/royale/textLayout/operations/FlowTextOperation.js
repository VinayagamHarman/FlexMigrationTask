/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/operations/FlowTextOperation.as
 * org.apache.royale.textLayout.operations.FlowTextOperation
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.operations.FlowTextOperation');
/* Royale Dependency List: org.apache.royale.textLayout.edit.SelectionState,XML*/

goog.require('org.apache.royale.textLayout.operations.FlowOperation');



/** 
 * Creates the FlowTextOperation object.
 * 
 * @asparam operationState Specifies the relevant selection. If relevant to the operation, the 
 * <code>operationState</code> describes the text range to which this operation applies.
 * Otherwise, <code>operationState</code> is used to save the current selection state so that
 * it can be restored when the operation is undone.
 * 
 * @playerversion Flash 10
 * @playerversion AIR 1.5
 * @langversion 3.0 
 * @constructor
 * @extends {org.apache.royale.textLayout.operations.FlowOperation}
 * @param {org.apache.royale.textLayout.edit.SelectionState} operationState
 */
org.apache.royale.textLayout.operations.FlowTextOperation = function(operationState) {
  org.apache.royale.textLayout.operations.FlowTextOperation.base(this, 'constructor', operationState.textFlow);
  this.org_apache_royale_textLayout_operations_FlowTextOperation__absoluteStart = operationState.absoluteStart;
  this.org_apache_royale_textLayout_operations_FlowTextOperation__absoluteEnd = operationState.absoluteEnd;
  this.org_apache_royale_textLayout_operations_FlowTextOperation__originalSelectionState = operationState;
};
goog.inherits(org.apache.royale.textLayout.operations.FlowTextOperation, org.apache.royale.textLayout.operations.FlowOperation);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.operations.FlowTextOperation', org.apache.royale.textLayout.operations.FlowTextOperation);


/**
 * @private
 * @type {org.apache.royale.textLayout.edit.SelectionState}
 */
org.apache.royale.textLayout.operations.FlowTextOperation.prototype.org_apache_royale_textLayout_operations_FlowTextOperation__originalSelectionState;


/**
 * @private
 * @type {number}
 */
org.apache.royale.textLayout.operations.FlowTextOperation.prototype.org_apache_royale_textLayout_operations_FlowTextOperation__absoluteStart = 0;


/**
 * @private
 * @type {number}
 */
org.apache.royale.textLayout.operations.FlowTextOperation.prototype.org_apache_royale_textLayout_operations_FlowTextOperation__absoluteEnd = 0;


/**	
 * @inheritDoc
 * 
 * @playerversion Flash 10
 * @playerversion AIR 1.5
 * @langversion 3.0 
 * @export
 * @override
 */
org.apache.royale.textLayout.operations.FlowTextOperation.prototype.redo = function() {
  this.doOperation();
  return this.org_apache_royale_textLayout_operations_FlowTextOperation__originalSelectionState;
};


org.apache.royale.textLayout.operations.FlowTextOperation.prototype.get__absoluteStart = function() {
  return this.org_apache_royale_textLayout_operations_FlowTextOperation__absoluteStart;
};


org.apache.royale.textLayout.operations.FlowTextOperation.prototype.set__absoluteStart = function(value) {
  this.org_apache_royale_textLayout_operations_FlowTextOperation__absoluteStart = value;
};


org.apache.royale.textLayout.operations.FlowTextOperation.prototype.get__absoluteEnd = function() {
  return this.org_apache_royale_textLayout_operations_FlowTextOperation__absoluteEnd;
};


org.apache.royale.textLayout.operations.FlowTextOperation.prototype.set__absoluteEnd = function(value) {
  this.org_apache_royale_textLayout_operations_FlowTextOperation__absoluteEnd = value;
};


org.apache.royale.textLayout.operations.FlowTextOperation.prototype.get__originalSelectionState = function() {
  return this.org_apache_royale_textLayout_operations_FlowTextOperation__originalSelectionState;
};


org.apache.royale.textLayout.operations.FlowTextOperation.prototype.set__originalSelectionState = function(value) {
  this.org_apache_royale_textLayout_operations_FlowTextOperation__originalSelectionState = value;
};


Object.defineProperties(org.apache.royale.textLayout.operations.FlowTextOperation.prototype, /** @lends {org.apache.royale.textLayout.operations.FlowTextOperation.prototype} */ {
/**
  * @export
  * @type {number} */
absoluteStart: {
get: org.apache.royale.textLayout.operations.FlowTextOperation.prototype.get__absoluteStart,
set: org.apache.royale.textLayout.operations.FlowTextOperation.prototype.set__absoluteStart},
/**
  * @export
  * @type {number} */
absoluteEnd: {
get: org.apache.royale.textLayout.operations.FlowTextOperation.prototype.get__absoluteEnd,
set: org.apache.royale.textLayout.operations.FlowTextOperation.prototype.set__absoluteEnd},
/**
  * @export
  * @type {org.apache.royale.textLayout.edit.SelectionState} */
originalSelectionState: {
get: org.apache.royale.textLayout.operations.FlowTextOperation.prototype.get__originalSelectionState,
set: org.apache.royale.textLayout.operations.FlowTextOperation.prototype.set__originalSelectionState}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.operations.FlowTextOperation.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'FlowTextOperation', qName: 'org.apache.royale.textLayout.operations.FlowTextOperation', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.operations.FlowTextOperation.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'absoluteStart': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.operations.FlowTextOperation'},
        'absoluteEnd': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.operations.FlowTextOperation'},
        'originalSelectionState': { type: 'org.apache.royale.textLayout.edit.SelectionState', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.operations.FlowTextOperation'}
      };
    },
    methods: function () {
      return {
        'FlowTextOperation': { type: '', declaredBy: 'org.apache.royale.textLayout.operations.FlowTextOperation', parameters: function () { return [ 'org.apache.royale.textLayout.edit.SelectionState', false ]; }},
        'redo': { type: 'org.apache.royale.textLayout.edit.SelectionState', declaredBy: 'org.apache.royale.textLayout.operations.FlowTextOperation'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.operations.FlowTextOperation.prototype.ROYALE_COMPILE_FLAGS = 10;
