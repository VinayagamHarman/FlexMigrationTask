/**
 * Generated by Apache Royale Compiler from spark/core/IEditableText.as
 * spark.core.IEditableText
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('spark.core.IEditableText');
/* Royale Dependency List: XML*/

goog.require('spark.core.IDisplayText');



/**
 * @interface
 * @extends {spark.core.IDisplayText}
 */
spark.core.IEditableText = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('spark.core.IEditableText', spark.core.IEditableText);
/**  * @type {boolean}
 */spark.core.IEditableText.prototype.displayAsPassword;
/**  * @type {boolean}
 */spark.core.IEditableText.prototype.editable;
/**  * @type {boolean}
 */spark.core.IEditableText.prototype.enabled;
/**  * @type {boolean}
 */spark.core.IEditableText.prototype.focusEnabled;
/**  * @type {number}
 */spark.core.IEditableText.prototype.horizontalScrollPosition;
/**  * @type {string}
 */spark.core.IEditableText.prototype.lineBreak;
/**  * @type {number}
 */spark.core.IEditableText.prototype.maxChars;
/**  * @type {boolean}
 */spark.core.IEditableText.prototype.multiline;
/**  * @type {string}
 */spark.core.IEditableText.prototype.restrict;
/**  * @type {boolean}
 */spark.core.IEditableText.prototype.selectable;
/**  * @type {number}
 */spark.core.IEditableText.prototype.selectionActivePosition;
/**  * @type {number}
 */spark.core.IEditableText.prototype.selectionAnchorPosition;
/**  * @type {number}
 */spark.core.IEditableText.prototype.tabIndex;
/**  * @type {number}
 */spark.core.IEditableText.prototype.verticalScrollPosition;
/**
 *  Scroll so the specified range is in view.
 *  
 *  @asparam anchorPosition The anchor position of the selection range.
 *  @asparam activePosition The active position of the selection range.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.1
 *  @playerversion AIR 2.0
 *  @productversion Flex 4.5
 * @export
 * @param {number} anchorPosition
 * @param {number} activePosition
 */
spark.core.IEditableText.prototype.scrollToRange = function(anchorPosition, activePosition) {
};
/**
 *  Inserts the specified text into the text component
 *  as if you had typed it.
 *
 *  <p>If a range was selected, the new text replaces the selected text.
 *  If there was an insertion point, the new text is inserted there.</p>
 *
 *  <p>An insertion point is then set after the new text.
 *  If necessary, the text will scroll to ensure
 *  that the insertion point is visible.</p>
 *
 *  @asparam text The text to be inserted.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.1
 *  @playerversion AIR 2.0
 *  @productversion Flex 4.5
 * @export
 * @param {string} text
 */
spark.core.IEditableText.prototype.insertText = function(text) {
};
/**
 *  Appends the specified text to the end of the text component,
 *  as if you had clicked at the end and typed.
 *
 *  <p>An insertion point is then set after the new text.
 *  If necessary, the text will scroll to ensure
 *  that the insertion point is visible.</p>
 *
 *  @asparam text The text to be appended.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.1
 *  @playerversion AIR 2.0
 *  @productversion Flex 4.5
 * @export
 * @param {string} text
 */
spark.core.IEditableText.prototype.appendText = function(text) {
};
/**
 *  Selects a specified range of characters.
 *
 *  <p>If either position is negative, it will deselect the text range.</p>
 *
 *  @asparam anchorPosition The character position specifying the end
 *  of the selection that stays fixed when the selection is extended.
 *
 *  @asparam activePosition The character position specifying the end
 *  of the selection that moves when the selection is extended.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.1
 *  @playerversion AIR 2.0
 *  @productversion Flex 4.5
 * @export
 * @param {number} anchorIndex
 * @param {number} activeIndex
 */
spark.core.IEditableText.prototype.selectRange = function(anchorIndex, activeIndex) {
};
spark.core.IEditableText.prototype.selectAll = function() {
};
spark.core.IEditableText.prototype.setFocus = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
spark.core.IEditableText.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IEditableText', qName: 'spark.core.IEditableText', kind: 'interface' }], interfaces: [spark.core.IDisplayText] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
spark.core.IEditableText.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'displayAsPassword': { type: 'Boolean', access: 'readwrite', declaredBy: 'spark.core.IEditableText'},
        'editable': { type: 'Boolean', access: 'readwrite', declaredBy: 'spark.core.IEditableText'},
        'enabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'spark.core.IEditableText'},
        'focusEnabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'spark.core.IEditableText'},
        'horizontalScrollPosition': { type: 'Number', access: 'readwrite', declaredBy: 'spark.core.IEditableText'},
        'lineBreak': { type: 'String', access: 'readwrite', declaredBy: 'spark.core.IEditableText'},
        'maxChars': { type: 'int', access: 'readwrite', declaredBy: 'spark.core.IEditableText'},
        'multiline': { type: 'Boolean', access: 'readwrite', declaredBy: 'spark.core.IEditableText'},
        'restrict': { type: 'String', access: 'readwrite', declaredBy: 'spark.core.IEditableText'},
        'selectable': { type: 'Boolean', access: 'readwrite', declaredBy: 'spark.core.IEditableText'},
        'selectionActivePosition': { type: 'int', access: 'readonly', declaredBy: 'spark.core.IEditableText'},
        'selectionAnchorPosition': { type: 'int', access: 'readonly', declaredBy: 'spark.core.IEditableText'},
        'tabIndex': { type: 'int', access: 'readwrite', declaredBy: 'spark.core.IEditableText'},
        'verticalScrollPosition': { type: 'Number', access: 'readwrite', declaredBy: 'spark.core.IEditableText'}
      };
    },
    methods: function () {
      return {
        'scrollToRange': { type: 'void', declaredBy: 'spark.core.IEditableText', parameters: function () { return [ 'int', false ,'int', false ]; }},
        'insertText': { type: 'void', declaredBy: 'spark.core.IEditableText', parameters: function () { return [ 'String', false ]; }},
        'appendText': { type: 'void', declaredBy: 'spark.core.IEditableText', parameters: function () { return [ 'String', false ]; }},
        'selectRange': { type: 'void', declaredBy: 'spark.core.IEditableText', parameters: function () { return [ 'int', false ,'int', false ]; }},
        'selectAll': { type: 'void', declaredBy: 'spark.core.IEditableText'},
        'setFocus': { type: 'void', declaredBy: 'spark.core.IEditableText'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
spark.core.IEditableText.prototype.ROYALE_COMPILE_FLAGS = 10;
