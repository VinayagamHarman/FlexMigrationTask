/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/edit/ModelEdit.as
 * org.apache.royale.textLayout.edit.ModelEdit
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.edit.ModelEdit');
/* Royale Dependency List: org.apache.royale.textLayout.edit.IMemento,org.apache.royale.textLayout.edit.MementoList,org.apache.royale.textLayout.edit.TextFlowEdit,org.apache.royale.textLayout.edit.mementos.AddElementMemento,org.apache.royale.textLayout.edit.mementos.DeleteTextMemento,org.apache.royale.textLayout.edit.mementos.JoinMemento,org.apache.royale.textLayout.edit.mementos.MoveElementMemento,org.apache.royale.textLayout.edit.mementos.RemoveElementsMemento,org.apache.royale.textLayout.edit.mementos.SplitMemento,org.apache.royale.textLayout.edit.mementos.TextRangeMemento,org.apache.royale.textLayout.elements.ElementHelper,org.apache.royale.textLayout.elements.IFlowElement,org.apache.royale.textLayout.elements.IFlowGroupElement,org.apache.royale.textLayout.elements.IFlowLeafElement,org.apache.royale.textLayout.elements.IListItemElement,org.apache.royale.textLayout.elements.IParagraphElement,org.apache.royale.textLayout.elements.ISpanElement,org.apache.royale.textLayout.elements.ITextFlow,org.apache.royale.utils.Language,XML*/




/**
 * @constructor
 */
org.apache.royale.textLayout.edit.ModelEdit = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.edit.ModelEdit', org.apache.royale.textLayout.edit.ModelEdit);


/**
 * @export
 * @param {org.apache.royale.textLayout.elements.ITextFlow} textFlow
 * @param {org.apache.royale.textLayout.elements.IFlowGroupElement} elemToSplit
 * @param {number} relativePosition
 * @return {org.apache.royale.textLayout.edit.IMemento}
 */
org.apache.royale.textLayout.edit.ModelEdit.splitElement = function(textFlow, elemToSplit, relativePosition) {
  return org.apache.royale.textLayout.edit.mementos.SplitMemento.perform(textFlow, elemToSplit, relativePosition, true);
};


/**
 * @export
 * @param {org.apache.royale.textLayout.elements.ITextFlow} textFlow
 * @param {org.apache.royale.textLayout.elements.IFlowGroupElement} element1
 * @param {org.apache.royale.textLayout.elements.IFlowGroupElement} element2
 * @return {org.apache.royale.textLayout.edit.IMemento}
 */
org.apache.royale.textLayout.edit.ModelEdit.joinElement = function(textFlow, element1, element2) {
  return org.apache.royale.textLayout.edit.mementos.JoinMemento.perform(textFlow, element1, element2, true);
};


/**
 * @export
 * @param {org.apache.royale.textLayout.elements.ITextFlow} textFlow
 * @param {org.apache.royale.textLayout.elements.IFlowElement} elemToAdd
 * @param {org.apache.royale.textLayout.elements.IFlowGroupElement} parent
 * @param {number} index
 * @return {org.apache.royale.textLayout.edit.IMemento}
 */
org.apache.royale.textLayout.edit.ModelEdit.addElement = function(textFlow, elemToAdd, parent, index) {
  
  return org.apache.royale.textLayout.edit.mementos.AddElementMemento.perform(textFlow, elemToAdd, parent, index, true);
};


/**
 * @export
 * @param {org.apache.royale.textLayout.elements.ITextFlow} textFlow
 * @param {org.apache.royale.textLayout.elements.IFlowElement} elemToMove
 * @param {org.apache.royale.textLayout.elements.IFlowGroupElement} parent
 * @param {number} index
 * @return {org.apache.royale.textLayout.edit.IMemento}
 */
org.apache.royale.textLayout.edit.ModelEdit.moveElement = function(textFlow, elemToMove, parent, index) {
  
  return org.apache.royale.textLayout.edit.mementos.MoveElementMemento.perform(textFlow, elemToMove, parent, index, true);
};


/**
 * @export
 * @param {org.apache.royale.textLayout.elements.ITextFlow} textFlow
 * @param {org.apache.royale.textLayout.elements.IFlowGroupElement} elemtToRemoveParent
 * @param {number} startIndex
 * @param {number} numElements
 * @return {org.apache.royale.textLayout.edit.IMemento}
 */
org.apache.royale.textLayout.edit.ModelEdit.removeElements = function(textFlow, elemtToRemoveParent, startIndex, numElements) {
  return org.apache.royale.textLayout.edit.mementos.RemoveElementsMemento.perform(textFlow, elemtToRemoveParent, startIndex, numElements, true);
};


/**
 * @export
 * @param {org.apache.royale.textLayout.elements.ITextFlow} textFlow
 * @param {number} absoluteStart
 * @param {number} absoluteEnd
 * @param {boolean} createMemento
 * @return {org.apache.royale.textLayout.edit.IMemento}
 */
org.apache.royale.textLayout.edit.ModelEdit.deleteText = function(textFlow, absoluteStart, absoluteEnd, createMemento) {
  var /** @type {org.apache.royale.textLayout.edit.MementoList} */ memento;
  var /** @type {org.apache.royale.textLayout.elements.IParagraphElement} */ mergePara;
  if (absoluteEnd == textFlow.textLength - 1) {
    var /** @type {org.apache.royale.textLayout.elements.IFlowElement} */ lastElement = textFlow.getChildAt((textFlow.numChildren - 1) >> 0);
    if (absoluteStart <= lastElement.getAbsoluteStart())
      absoluteEnd = textFlow.textLength;
  }
  var /** @type {org.apache.royale.textLayout.elements.IParagraphElement} */ newLastParagraph;
  if (absoluteEnd >= textFlow.textLength) {
    var /** @type {org.apache.royale.textLayout.elements.IFlowLeafElement} */ lastSpan = textFlow.getLastLeaf();
    var /** @type {org.apache.royale.textLayout.elements.IParagraphElement} */ lastParagraph = lastSpan.getParagraph();
    newLastParagraph = org.apache.royale.textLayout.elements.ElementHelper.getParagraph();
    var /** @type {org.apache.royale.textLayout.elements.ISpanElement} */ newLastSpan = org.apache.royale.textLayout.elements.ElementHelper.getSpan();
    newLastParagraph.replaceChildren(0, 0, newLastSpan);
    newLastParagraph.format = lastParagraph.format;
    newLastSpan.format = lastSpan.format;
    absoluteEnd = textFlow.textLength;
  }
  if (createMemento) {
    memento = new org.apache.royale.textLayout.edit.MementoList(textFlow);
    if (newLastParagraph)
      memento.push(org.apache.royale.textLayout.edit.ModelEdit.addElement(textFlow, newLastParagraph, textFlow, textFlow.numChildren));
    var /** @type {org.apache.royale.textLayout.edit.mementos.DeleteTextMemento} */ deleteTextMemento = new org.apache.royale.textLayout.edit.mementos.DeleteTextMemento(textFlow, absoluteStart, absoluteEnd);
    memento.push(deleteTextMemento);
    mergePara = org.apache.royale.textLayout.edit.TextFlowEdit.deleteRange(textFlow, absoluteStart, absoluteEnd);
    memento.push(org.apache.royale.textLayout.edit.TextFlowEdit.joinNextParagraph(mergePara, false));
    org.apache.royale.textLayout.edit.ModelEdit.checkNormalize(textFlow, deleteTextMemento.commonRoot, memento);
  } else {
    if (newLastParagraph)
      textFlow.replaceChildren(textFlow.numChildren, textFlow.numChildren, newLastParagraph);
    mergePara = org.apache.royale.textLayout.edit.TextFlowEdit.deleteRange(textFlow, absoluteStart, absoluteEnd);
    org.apache.royale.textLayout.edit.TextFlowEdit.joinNextParagraph(mergePara, false);
  }
  if (textFlow.interactionManager)
    textFlow.interactionManager.notifyInsertOrDelete(absoluteStart, (-(absoluteEnd - absoluteStart)) >> 0);
  return memento;
};


/**
 * @royaleignorecoercion org.apache.royale.textLayout.elements.IFlowGroupElement
 * @private
 * @param {org.apache.royale.textLayout.elements.ITextFlow} textFlow
 * @param {Object} commonRoot
 * @param {org.apache.royale.textLayout.edit.MementoList} mementoList
 */
org.apache.royale.textLayout.edit.ModelEdit.checkNormalize = function(textFlow, commonRoot, mementoList) {
  if (org.apache.royale.utils.Language.is(commonRoot, org.apache.royale.textLayout.elements.IListItemElement) && commonRoot.normalizeNeedsInitialParagraph()) {
    var /** @type {org.apache.royale.textLayout.elements.IParagraphElement} */ paragraph = org.apache.royale.textLayout.elements.ElementHelper.getParagraph();
    paragraph.replaceChildren(0, 0, org.apache.royale.textLayout.elements.ElementHelper.getSpan());
    mementoList.push(org.apache.royale.textLayout.edit.ModelEdit.addElement(textFlow, paragraph, commonRoot, 0));
  }
  for (var /** @type {number} */ index = 0; index < commonRoot.numChildren; ++index) {
    var /** @type {Object} */ child = commonRoot.getChildAt(index);
    if (child)
      org.apache.royale.textLayout.edit.ModelEdit.checkNormalize(textFlow, child, mementoList);
  }
};


/**
 * @export
 * @param {org.apache.royale.textLayout.elements.ITextFlow} textFlow
 * @param {number} absoluteStart
 * @param {number} absoluteEnd
 * @return {org.apache.royale.textLayout.edit.IMemento}
 */
org.apache.royale.textLayout.edit.ModelEdit.saveCurrentState = function(textFlow, absoluteStart, absoluteEnd) {
  return new org.apache.royale.textLayout.edit.mementos.TextRangeMemento(textFlow, absoluteStart, absoluteEnd);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.edit.ModelEdit.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ModelEdit', qName: 'org.apache.royale.textLayout.edit.ModelEdit', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.edit.ModelEdit.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|splitElement': { type: 'org.apache.royale.textLayout.edit.IMemento', declaredBy: 'org.apache.royale.textLayout.edit.ModelEdit', parameters: function () { return [ 'org.apache.royale.textLayout.elements.ITextFlow', false ,'org.apache.royale.textLayout.elements.IFlowGroupElement', false ,'int', false ]; }},
        '|joinElement': { type: 'org.apache.royale.textLayout.edit.IMemento', declaredBy: 'org.apache.royale.textLayout.edit.ModelEdit', parameters: function () { return [ 'org.apache.royale.textLayout.elements.ITextFlow', false ,'org.apache.royale.textLayout.elements.IFlowGroupElement', false ,'org.apache.royale.textLayout.elements.IFlowGroupElement', false ]; }},
        '|addElement': { type: 'org.apache.royale.textLayout.edit.IMemento', declaredBy: 'org.apache.royale.textLayout.edit.ModelEdit', parameters: function () { return [ 'org.apache.royale.textLayout.elements.ITextFlow', false ,'org.apache.royale.textLayout.elements.IFlowElement', false ,'org.apache.royale.textLayout.elements.IFlowGroupElement', false ,'int', false ]; }},
        '|moveElement': { type: 'org.apache.royale.textLayout.edit.IMemento', declaredBy: 'org.apache.royale.textLayout.edit.ModelEdit', parameters: function () { return [ 'org.apache.royale.textLayout.elements.ITextFlow', false ,'org.apache.royale.textLayout.elements.IFlowElement', false ,'org.apache.royale.textLayout.elements.IFlowGroupElement', false ,'int', false ]; }},
        '|removeElements': { type: 'org.apache.royale.textLayout.edit.IMemento', declaredBy: 'org.apache.royale.textLayout.edit.ModelEdit', parameters: function () { return [ 'org.apache.royale.textLayout.elements.ITextFlow', false ,'org.apache.royale.textLayout.elements.IFlowGroupElement', false ,'int', false ,'int', false ]; }},
        '|deleteText': { type: 'org.apache.royale.textLayout.edit.IMemento', declaredBy: 'org.apache.royale.textLayout.edit.ModelEdit', parameters: function () { return [ 'org.apache.royale.textLayout.elements.ITextFlow', false ,'int', false ,'int', false ,'Boolean', false ]; }},
        '|saveCurrentState': { type: 'org.apache.royale.textLayout.edit.IMemento', declaredBy: 'org.apache.royale.textLayout.edit.ModelEdit', parameters: function () { return [ 'org.apache.royale.textLayout.elements.ITextFlow', false ,'int', false ,'int', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.edit.ModelEdit.prototype.ROYALE_COMPILE_FLAGS = 10;
