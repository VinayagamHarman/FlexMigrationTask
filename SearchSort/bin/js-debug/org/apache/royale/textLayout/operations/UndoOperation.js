/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/operations/UndoOperation.as
 * org.apache.royale.textLayout.operations.UndoOperation
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.operations.UndoOperation');
/* Royale Dependency List: XML*/

goog.require('org.apache.royale.textLayout.operations.FlowOperation');



/** 
 * Creates an UndoOperation object.
 * 
 * @asparam op	The operation to undo.
 * 
 * @playerversion Flash 10
 * @playerversion AIR 1.5
 * @langversion 3.0 
 * @constructor
 * @extends {org.apache.royale.textLayout.operations.FlowOperation}
 * @param {org.apache.royale.textLayout.operations.FlowOperation} op
 */
org.apache.royale.textLayout.operations.UndoOperation = function(op) {
  org.apache.royale.textLayout.operations.UndoOperation.base(this, 'constructor', null);
  this.org_apache_royale_textLayout_operations_UndoOperation__operation = op;
};
goog.inherits(org.apache.royale.textLayout.operations.UndoOperation, org.apache.royale.textLayout.operations.FlowOperation);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.operations.UndoOperation', org.apache.royale.textLayout.operations.UndoOperation);


/**
 * @private
 * @type {org.apache.royale.textLayout.operations.FlowOperation}
 */
org.apache.royale.textLayout.operations.UndoOperation.prototype.org_apache_royale_textLayout_operations_UndoOperation__operation;


org.apache.royale.textLayout.operations.UndoOperation.prototype.get__operation = function() {
  return this.org_apache_royale_textLayout_operations_UndoOperation__operation;
};


org.apache.royale.textLayout.operations.UndoOperation.prototype.set__operation = function(value) {
  this.org_apache_royale_textLayout_operations_UndoOperation__operation = value;
};


Object.defineProperties(org.apache.royale.textLayout.operations.UndoOperation.prototype, /** @lends {org.apache.royale.textLayout.operations.UndoOperation.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.textLayout.operations.FlowOperation} */
operation: {
get: org.apache.royale.textLayout.operations.UndoOperation.prototype.get__operation,
set: org.apache.royale.textLayout.operations.UndoOperation.prototype.set__operation}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.operations.UndoOperation.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'UndoOperation', qName: 'org.apache.royale.textLayout.operations.UndoOperation', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.operations.UndoOperation.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'operation': { type: 'org.apache.royale.textLayout.operations.FlowOperation', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.operations.UndoOperation'}
      };
    },
    methods: function () {
      return {
        'UndoOperation': { type: '', declaredBy: 'org.apache.royale.textLayout.operations.UndoOperation', parameters: function () { return [ 'org.apache.royale.textLayout.operations.FlowOperation', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.operations.UndoOperation.prototype.ROYALE_COMPILE_FLAGS = 10;
