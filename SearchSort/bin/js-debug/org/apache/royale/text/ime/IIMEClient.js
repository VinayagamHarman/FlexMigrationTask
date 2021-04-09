/**
 * Generated by Apache Royale Compiler from org/apache/royale/text/ime/IIMEClient.as
 * org.apache.royale.text.ime.IIMEClient
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.text.ime.IIMEClient');
/* Royale Dependency List: org.apache.royale.geom.Rectangle,org.apache.royale.text.ime.CompositionAttributeRange*/




/**
 * @interface
 */
org.apache.royale.text.ime.IIMEClient = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.text.ime.IIMEClient', org.apache.royale.text.ime.IIMEClient);
/**
 * Callback for updating the contents of the inline editing session.
 * This gets called whenever the text being edited with the IME has changed
 * and its contents are used by the client to redraw the entire inline edit session.
 * 
 * @playerversion Flash 10.1
 * @langversion 3.0
 * 
 * @asparam text  contains the text of the inline edit session from the IME
 * @asparam attributes  contains an array of composition clauses with adornment info 
 * @asparam relativeSelectionStart  start of the inline session relative to the start of the text object
 * @asparam relativeSelectionEnd  end of the inline session relative to the start of the text object
 * @export
 * @param {string} text
 * @param {Array.<CompositionAttributeRange>} attributes
 * @param {number} compositionStartIndex
 * @param {number} compositionEndIndex
 */
org.apache.royale.text.ime.IIMEClient.prototype.updateComposition = function(text, attributes, compositionStartIndex, compositionEndIndex) {
};
/**
 * Use this callback to end the inline editing session and confirm the text.
 * 
 * @playerversion Flash 10.1
 * @langversion 3.0
 * 
 * @asparam text  the final state of the text in the inline session (the text that got confirmed).
 * @asparam preserveSelection  when true, you should not reset the current selection to the end of the confirmed text.
 * @export
 * @param {string=} text
 * @param {boolean=} preserveSelection
 */
org.apache.royale.text.ime.IIMEClient.prototype.confirmComposition = function(text, preserveSelection) {
};
/**
 * This callback is used by the IME to query the bounding box of the text being edited with the IME client.
 * Use this method to place the candidate window and set the mouse cursor in the IME client when the mouse is over the 
 * text field or other component that supports IME.
 * 
 * @playerversion Flash 10.1
 * @langversion 3.0
 * 
 * @asparam startIndex an integer that specifies the starting location of the range of text for which you need to measure the bounding box.
 * @asparam endIndex Optional; an integer that specifies the ending location of the range of text for which you need to measure the bounding box.
 *
 * @asreturn  the bounding box of the specified range of text, or <code>null</code> if either or both of the indexes are invalid.
 * The same value should be returned independant of whether <code>startIndex</code> is greater or less than <code>endIndex</code>.
 * @export
 * @param {number} startIndex
 * @param {number} endIndex
 * @return {org.apache.royale.geom.Rectangle}
 */
org.apache.royale.text.ime.IIMEClient.prototype.getTextBounds = function(startIndex, endIndex) {
};
/**  * @type {number}
 */org.apache.royale.text.ime.IIMEClient.prototype.compositionStartIndex;
/**  * @type {number}
 */org.apache.royale.text.ime.IIMEClient.prototype.compositionEndIndex;
/**  * @type {boolean}
 */org.apache.royale.text.ime.IIMEClient.prototype.verticalTextLayout;
/**  * @type {number}
 */org.apache.royale.text.ime.IIMEClient.prototype.selectionAnchorIndex;
/**  * @type {number}
 */org.apache.royale.text.ime.IIMEClient.prototype.selectionActiveIndex;
/** 
 * Sets the range of selected text in the component.
 * If either of the arguments is out of bounds the selection should not be changed.
 * 
 * @asparam anchorIndex The zero-based index value of the character at the anchor end of the selection
 * @asparam activeIndex The zero-based index value of the character at the active end of the selection.
 * 
 * @playerversion Flash 10.1
 * @langversion 3.0
 * @export
 * @param {number} anchorIndex
 * @param {number} activeIndex
 */
org.apache.royale.text.ime.IIMEClient.prototype.selectRange = function(anchorIndex, activeIndex) {
};
/** 
 * Gets the specified range of text from the component.  This method is called during IME reconversion.
 * 
 * @asparam startIndex an integer that specifies the starting location of the range of text to be retrieved.
 * @asparam endIndex an integer that specifies the ending location of the range of text to be retrieved.
 * 
 * @asreturn The requested text, or <code>null</code> if no text is available in the requested range
 * or if either or both of the indexes are invalid.  The same value should be returned 
 * independant of whether <code>startIndex</code> is greater or less than <code>endIndex</code>.
 * 
 * @playerversion Flash 10.1
 * @langversion 3.0
 * @export
 * @param {number} startIndex
 * @param {number} endIndex
 * @return {string}
 */
org.apache.royale.text.ime.IIMEClient.prototype.getTextInRange = function(startIndex, endIndex) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.text.ime.IIMEClient.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IIMEClient', qName: 'org.apache.royale.text.ime.IIMEClient', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.text.ime.IIMEClient.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'compositionStartIndex': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.text.ime.IIMEClient'},
        'compositionEndIndex': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.text.ime.IIMEClient'},
        'verticalTextLayout': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.text.ime.IIMEClient'},
        'selectionAnchorIndex': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.text.ime.IIMEClient'},
        'selectionActiveIndex': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.text.ime.IIMEClient'}
      };
    },
    methods: function () {
      return {
        'updateComposition': { type: 'void', declaredBy: 'org.apache.royale.text.ime.IIMEClient', parameters: function () { return [ 'String', false ,'Vector.<org.apache.royale.text.ime.CompositionAttributeRange>', false ,'int', false ,'int', false ]; }},
        'confirmComposition': { type: 'void', declaredBy: 'org.apache.royale.text.ime.IIMEClient', parameters: function () { return [ 'String', true ,'Boolean', true ]; }},
        'getTextBounds': { type: 'org.apache.royale.geom.Rectangle', declaredBy: 'org.apache.royale.text.ime.IIMEClient', parameters: function () { return [ 'int', false ,'int', false ]; }},
        'selectRange': { type: 'void', declaredBy: 'org.apache.royale.text.ime.IIMEClient', parameters: function () { return [ 'int', false ,'int', false ]; }},
        'getTextInRange': { type: 'String', declaredBy: 'org.apache.royale.text.ime.IIMEClient', parameters: function () { return [ 'int', false ,'int', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.text.ime.IIMEClient.prototype.ROYALE_COMPILE_FLAGS = 10;
