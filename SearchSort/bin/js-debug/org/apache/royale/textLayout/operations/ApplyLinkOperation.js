/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/operations/ApplyLinkOperation.as
 * org.apache.royale.textLayout.operations.ApplyLinkOperation
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.operations.ApplyLinkOperation');
/* Royale Dependency List: org.apache.royale.textLayout.edit.IMemento,org.apache.royale.textLayout.edit.ModelEdit,org.apache.royale.textLayout.edit.SelectionState,org.apache.royale.textLayout.edit.TextFlowEdit,org.apache.royale.textLayout.elements.IFlowLeafElement,org.apache.royale.textLayout.elements.LinkElement,XML*/

goog.require('org.apache.royale.textLayout.operations.FlowTextOperation');



/** 
 * Creates an ApplyLinkOperation object.
 * 
 * @asparam operationState	The text range to which the operation is applied.
 * @asparam href The URI to be associated with the link.  If href is an empty string, 
 * the URI of links in the selection are removed.
 * @asparam target The target of the link.
 * @asparam extendToLinkBoundary Whether to extend the selection to include the entire 
 * text of any existing links overlapped by the selection, and then apply the change.
 * 
 * @playerversion Flash 10
 * @playerversion AIR 1.5
 * @langversion 3.0 
 * @constructor
 * @extends {org.apache.royale.textLayout.operations.FlowTextOperation}
 * @param {org.apache.royale.textLayout.edit.SelectionState} operationState
 * @param {string} href
 * @param {string} target
 * @param {boolean} extendToLinkBoundary
 */
org.apache.royale.textLayout.operations.ApplyLinkOperation = function(operationState, href, target, extendToLinkBoundary) {
  org.apache.royale.textLayout.operations.ApplyLinkOperation.base(this, 'constructor', operationState);
  this.org_apache_royale_textLayout_operations_ApplyLinkOperation__hrefString = href;
  this.org_apache_royale_textLayout_operations_ApplyLinkOperation__target = target;
  this.org_apache_royale_textLayout_operations_ApplyLinkOperation__extendToLinkBoundary = extendToLinkBoundary;
};
goog.inherits(org.apache.royale.textLayout.operations.ApplyLinkOperation, org.apache.royale.textLayout.operations.FlowTextOperation);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.operations.ApplyLinkOperation', org.apache.royale.textLayout.operations.ApplyLinkOperation);


/**
 * @private
 * @type {string}
 */
org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.org_apache_royale_textLayout_operations_ApplyLinkOperation__hrefString;


/**
 * @private
 * @type {string}
 */
org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.org_apache_royale_textLayout_operations_ApplyLinkOperation__target;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.org_apache_royale_textLayout_operations_ApplyLinkOperation__extendToLinkBoundary;


/**
 * @private
 * @type {org.apache.royale.textLayout.edit.IMemento}
 */
org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.org_apache_royale_textLayout_operations_ApplyLinkOperation__memento;


/**
 * @private
 * @type {org.apache.royale.textLayout.elements.LinkElement}
 */
org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.org_apache_royale_textLayout_operations_ApplyLinkOperation__linkElement;


/** @asprivate 
 * @export
 * @override
 */
org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.doOperation = function() {
  var /** @type {org.apache.royale.textLayout.elements.IFlowLeafElement} */ leaf;
  if (this.absoluteStart == this.absoluteEnd)
    return false;
  if (this.org_apache_royale_textLayout_operations_ApplyLinkOperation__extendToLinkBoundary) {
    leaf = this.textFlow.findLeaf(this.absoluteStart);
    var /** @type {org.apache.royale.textLayout.elements.LinkElement} */ link = leaf.getParentByType("LinkElement");
    if (link) {
      this.absoluteStart = link.getAbsoluteStart();
    }
    leaf = this.textFlow.findLeaf((this.absoluteEnd - 1) >> 0);
    link = leaf.getParentByType("LinkElement");
    if (link) {
      this.absoluteEnd = (link.getAbsoluteStart() + link.textLength) >> 0;
    }
  }
  this.org_apache_royale_textLayout_operations_ApplyLinkOperation__memento = org.apache.royale.textLayout.edit.ModelEdit.saveCurrentState(this.textFlow, this.absoluteStart, this.absoluteEnd);
  if (this.org_apache_royale_textLayout_operations_ApplyLinkOperation__hrefString && this.org_apache_royale_textLayout_operations_ApplyLinkOperation__hrefString != "") {
    var /** @type {boolean} */ madeLink = org.apache.royale.textLayout.edit.TextFlowEdit.makeLink(this.textFlow, this.absoluteStart, this.absoluteEnd, this.org_apache_royale_textLayout_operations_ApplyLinkOperation__hrefString, this.org_apache_royale_textLayout_operations_ApplyLinkOperation__target);
    if (!madeLink) {
      this.org_apache_royale_textLayout_operations_ApplyLinkOperation__memento = null;
      return false;
    } else {
      leaf = this.textFlow.findLeaf(this.absoluteStart);
      this.org_apache_royale_textLayout_operations_ApplyLinkOperation__linkElement = leaf.getParentByType("LinkElement");
    }
  } else {
    org.apache.royale.textLayout.edit.TextFlowEdit.removeLink(this.textFlow, this.absoluteStart, this.absoluteEnd);
  }
  return true;
};


/** @asprivate 
 * @export
 * @override
 */
org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.undo = function() {
  if (this.org_apache_royale_textLayout_operations_ApplyLinkOperation__memento)
    this.org_apache_royale_textLayout_operations_ApplyLinkOperation__memento.undo();
  return this.originalSelectionState;
};


/** @asprivate 
 * @export
 * @override
 */
org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.redo = function() {
  if (this.absoluteStart != this.absoluteEnd && this.org_apache_royale_textLayout_operations_ApplyLinkOperation__memento) {
    if (this.org_apache_royale_textLayout_operations_ApplyLinkOperation__hrefString != "") {
      org.apache.royale.textLayout.edit.TextFlowEdit.makeLink(this.textFlow, this.absoluteStart, this.absoluteEnd, this.org_apache_royale_textLayout_operations_ApplyLinkOperation__hrefString, this.org_apache_royale_textLayout_operations_ApplyLinkOperation__target);
    } else {
      org.apache.royale.textLayout.edit.TextFlowEdit.removeLink(this.textFlow, this.absoluteStart, this.absoluteEnd);
    }
  }
  return this.originalSelectionState;
};


org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.get__href = function() {
  return this.org_apache_royale_textLayout_operations_ApplyLinkOperation__hrefString;
};


org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.set__href = function(value) {
  this.org_apache_royale_textLayout_operations_ApplyLinkOperation__hrefString = value;
};


org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.get__target = function() {
  return this.org_apache_royale_textLayout_operations_ApplyLinkOperation__target;
};


org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.set__target = function(value) {
  this.org_apache_royale_textLayout_operations_ApplyLinkOperation__target = value;
};


org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.get__extendToLinkBoundary = function() {
  return this.org_apache_royale_textLayout_operations_ApplyLinkOperation__extendToLinkBoundary;
};


org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.set__extendToLinkBoundary = function(value) {
  this.org_apache_royale_textLayout_operations_ApplyLinkOperation__extendToLinkBoundary = value;
};


org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.get__newLinkElement = function() {
  return this.org_apache_royale_textLayout_operations_ApplyLinkOperation__linkElement;
};


Object.defineProperties(org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype, /** @lends {org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype} */ {
/**
  * @export
  * @type {string} */
href: {
get: org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.get__href,
set: org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.set__href},
/**
  * @export
  * @type {string} */
target: {
get: org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.get__target,
set: org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.set__target},
/**
  * @export
  * @type {boolean} */
extendToLinkBoundary: {
get: org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.get__extendToLinkBoundary,
set: org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.set__extendToLinkBoundary},
/**
  * @export
  * @type {org.apache.royale.textLayout.elements.LinkElement} */
newLinkElement: {
get: org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.get__newLinkElement}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ApplyLinkOperation', qName: 'org.apache.royale.textLayout.operations.ApplyLinkOperation', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'href': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.operations.ApplyLinkOperation'},
        'target': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.operations.ApplyLinkOperation'},
        'extendToLinkBoundary': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.operations.ApplyLinkOperation'},
        'newLinkElement': { type: 'org.apache.royale.textLayout.elements.LinkElement', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.operations.ApplyLinkOperation'}
      };
    },
    methods: function () {
      return {
        'ApplyLinkOperation': { type: '', declaredBy: 'org.apache.royale.textLayout.operations.ApplyLinkOperation', parameters: function () { return [ 'org.apache.royale.textLayout.edit.SelectionState', false ,'String', false ,'String', false ,'Boolean', false ]; }},
        'doOperation': { type: 'Boolean', declaredBy: 'org.apache.royale.textLayout.operations.ApplyLinkOperation'},
        'undo': { type: 'org.apache.royale.textLayout.edit.SelectionState', declaredBy: 'org.apache.royale.textLayout.operations.ApplyLinkOperation'},
        'redo': { type: 'org.apache.royale.textLayout.edit.SelectionState', declaredBy: 'org.apache.royale.textLayout.operations.ApplyLinkOperation'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.operations.ApplyLinkOperation.prototype.ROYALE_COMPILE_FLAGS = 10;
