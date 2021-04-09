/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/elements/SpanElement.as
 * org.apache.royale.textLayout.elements.SpanElement
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.elements.SpanElement');
/* Royale Dependency List: org.apache.royale.text.engine.GroupElement,org.apache.royale.text.engine.TextElement,org.apache.royale.textLayout.container.IContainerController,org.apache.royale.textLayout.elements.ElementConstants,org.apache.royale.textLayout.elements.ElementHelper,org.apache.royale.textLayout.elements.GlobalSettings,org.apache.royale.textLayout.elements.IFlowElement,org.apache.royale.textLayout.elements.IFlowLeafElement,org.apache.royale.textLayout.elements.IParagraphElement,org.apache.royale.textLayout.events.ModelChange,org.apache.royale.textLayout.formats.FormatValue,org.apache.royale.textLayout.formats.ITextLayoutFormat,org.apache.royale.textLayout.formats.TextLayoutFormat,org.apache.royale.textLayout.formats.WhiteSpaceCollapse,org.apache.royale.textLayout.utils.CharacterUtil,org.apache.royale.utils.Language,XML*/

goog.require('org.apache.royale.textLayout.elements.FlowLeafElement');
goog.require('org.apache.royale.textLayout.elements.ISpanElement');



/** Constructor - creates a SpanElement object to hold a run of text in a paragraph.
 *
 * @playerversion Flash 10
 * @playerversion AIR 1.5
 * @langversion 3.0
 * @constructor
 * @extends {org.apache.royale.textLayout.elements.FlowLeafElement}
 * @implements {org.apache.royale.textLayout.elements.ISpanElement}
 */
org.apache.royale.textLayout.elements.SpanElement = function() {
  org.apache.royale.textLayout.elements.SpanElement.base(this, 'constructor');
};
goog.inherits(org.apache.royale.textLayout.elements.SpanElement, org.apache.royale.textLayout.elements.FlowLeafElement);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.elements.SpanElement', org.apache.royale.textLayout.elements.SpanElement);


/** @asprivate 
 * @export
 * @override
 */
org.apache.royale.textLayout.elements.SpanElement.prototype.createContentElement = function() {
  if (this._blockElement && this._blockElement.textBlock)
    return;
  this.calculateComputedFormat();
  this._blockElement = new org.apache.royale.text.engine.TextElement(this._text, null);
  
  
  org.apache.royale.textLayout.elements.SpanElement.superClass_.createContentElement.apply(this);
};


/** @asprivate 
 * @export
 * @override
 */
org.apache.royale.textLayout.elements.SpanElement.prototype.shallowCopy = function(startPos, endPos) {
  startPos = typeof startPos !== 'undefined' ? startPos : 0;
  endPos = typeof endPos !== 'undefined' ? endPos : -1;
  if (endPos == -1)
    endPos = this.textLength;
  var /** @type {org.apache.royale.textLayout.elements.SpanElement} */ retFlow = org.apache.royale.textLayout.elements.SpanElement.superClass_.shallowCopy.apply(this, [ startPos, endPos] );
  var /** @type {number} */ startSpan = 0;
  var /** @type {number} */ endSpan = (startSpan + this.textLength) >> 0;
  var /** @type {number} */ leafElStartPos = startSpan >= startPos ? startSpan : startPos;
  var /** @type {number} */ leafElEndPos = endSpan < endPos ? endSpan : endPos;
  if (leafElEndPos == this.textLength && this.hasParagraphTerminator)
    --leafElEndPos;
  if (leafElStartPos > leafElEndPos)
    throw RangeError(org.apache.royale.textLayout.elements.GlobalSettings["resourceStringFunction"]("badShallowCopyRange"));
  if (((leafElStartPos != endSpan) && org.apache.royale.textLayout.utils.CharacterUtil.isLowSurrogate((this._text.charCodeAt(leafElStartPos)) >> 0)) || ((leafElEndPos != 0) && org.apache.royale.textLayout.utils.CharacterUtil.isHighSurrogate((this._text.charCodeAt(leafElEndPos - 1)) >> 0)))
    throw RangeError(org.apache.royale.textLayout.elements.GlobalSettings["resourceStringFunction"]("badSurrogatePairCopy"));
  if (leafElStartPos != leafElEndPos)
    retFlow.replaceText(0, retFlow.textLength, this._text.substring(leafElStartPos, leafElEndPos));
  return retFlow;
};


/** @asprivate 
 * @export
 * @override
 */
org.apache.royale.textLayout.elements.SpanElement.prototype.getText = function(relativeStart, relativeEnd, paragraphSeparator) {
  relativeStart = typeof relativeStart !== 'undefined' ? relativeStart : 0;
  relativeEnd = typeof relativeEnd !== 'undefined' ? relativeEnd : -1;
  paragraphSeparator = typeof paragraphSeparator !== 'undefined' ? paragraphSeparator : "\n";
  if (relativeEnd == -1)
    relativeEnd = this.textLength;
  if (this.textLength && relativeEnd == this.textLength && this.hasParagraphTerminator)
    --relativeEnd;
  return this._text ? this._text.substring(relativeStart, relativeEnd) : "";
};


/**
 * @private
 * @const
 * @type {RegExp}
 */
org.apache.royale.textLayout.elements.SpanElement._dblSpacePattern = /[\u0020]{2,}/g;


/**
 * @private
 * @const
 * @type {RegExp}
 */
org.apache.royale.textLayout.elements.SpanElement._newLineTabPattern = /[\u0009\u000a\u000d]/g;


/**
 * @private
 * @const
 * @type {RegExp}
 */
org.apache.royale.textLayout.elements.SpanElement._tabPlaceholderPattern = new RegExp("\\" + "uE000", "g");


/**
 * @private
 * @const
 * @type {RegExp}
 */
org.apache.royale.textLayout.elements.SpanElement.anyPrintChar = /[^\u0009\u000a\u000d\u0020]/g;


/** @asprivate 
 * @export
 * @override
 */
org.apache.royale.textLayout.elements.SpanElement.prototype.applyWhiteSpaceCollapse = function(collapse) {
  var /** @type {org.apache.royale.textLayout.formats.ITextLayoutFormat} */ ffc = this.formatForCascade;
  var /** @type {*} */ wsc = ffc ? ffc.whiteSpaceCollapse : undefined;
  if (wsc !== undefined && wsc != org.apache.royale.textLayout.formats.FormatValue.INHERIT)
    collapse = org.apache.royale.utils.Language.string(wsc);
  var /** @type {string} */ origTxt = this.text;
  var /** @type {string} */ tempTxt = origTxt;
  if (!collapse || collapse == org.apache.royale.textLayout.formats.WhiteSpaceCollapse.COLLAPSE) {
    if (this.impliedElement && this.parent != null) {
      if (tempTxt.search(org.apache.royale.textLayout.elements.SpanElement.anyPrintChar) == -1) {
        this.parent.removeChild(this);
        return;
      }
    }
    tempTxt = tempTxt.replace(org.apache.royale.textLayout.elements.SpanElement._newLineTabPattern, " ");
    tempTxt = tempTxt.replace(org.apache.royale.textLayout.elements.SpanElement._dblSpacePattern, " ");
  }
  tempTxt = tempTxt.replace(org.apache.royale.textLayout.elements.SpanElement._tabPlaceholderPattern, '\t');
  if (tempTxt != origTxt)
    this.replaceText(0, this.textLength, tempTxt);
  org.apache.royale.textLayout.elements.SpanElement.superClass_.applyWhiteSpaceCollapse.apply(this, [ collapse] );
};


/** 
 * Updates the text in text span based on the specified start and end positions. To insert text, set the end position
 * equal to the start position. To append text to the existing text in the span, set the start position and the
 * end position equal to the length of the existing text.
 *
 * <p>The replaced text includes the start character and up to but not including the end character.</p>
 * 
 *  @asparam relativeStartPosition The index position of the beginning of the text to be replaced, 
 *   relative to the start of the span. The first character in the span is at position 0.
 *  @asparam relativeEndPosition The index one position after the last character of the text to be replaced, 
 *   relative to the start of the span. Set this value equal to <code>relativeStartPos</code>
 *   for an insert. 
 *  @asparam textValue The replacement text or the text to add, as the case may be.
 * 
 *  @throws RangeError The <code>relativeStartPosition</code> or <code>relativeEndPosition</code> specified is out of 
 * range or a surrogate pair is being split as a result of the replace.
 *
 * @playerversion Flash 10
 * @playerversion AIR 1.5
 * @langversion 3.0
 *
 * @export
 * @param {number} relativeStartPosition
 * @param {number} relativeEndPosition
 * @param {string} textValue
 */
org.apache.royale.textLayout.elements.SpanElement.prototype.replaceText = function(relativeStartPosition, relativeEndPosition, textValue) {
  if (relativeStartPosition < 0 || relativeEndPosition > this.textLength || relativeEndPosition < relativeStartPosition)
    throw RangeError(org.apache.royale.textLayout.elements.GlobalSettings["resourceStringFunction"]("invalidReplaceTextPositions"));
  if ((relativeStartPosition != 0 && relativeStartPosition != this.textLength && org.apache.royale.textLayout.utils.CharacterUtil.isLowSurrogate((this._text.charCodeAt(relativeStartPosition)) >> 0)) || (relativeEndPosition != 0 && relativeEndPosition != this.textLength && org.apache.royale.textLayout.utils.CharacterUtil.isHighSurrogate((this._text.charCodeAt(relativeEndPosition - 1)) >> 0)))
    throw RangeError(org.apache.royale.textLayout.elements.GlobalSettings["resourceStringFunction"]("invalidSurrogatePairSplit"));
  if (this.hasParagraphTerminator) {
    
    if (relativeStartPosition == this.textLength)
      relativeStartPosition--;
    if (relativeEndPosition == this.textLength)
      relativeEndPosition--;
  }
  if (relativeEndPosition != relativeStartPosition)
    this.modelChanged(org.apache.royale.textLayout.events.ModelChange.TEXT_DELETED, this, relativeStartPosition, (relativeEndPosition - relativeStartPosition) >> 0);
  this.org_apache_royale_textLayout_elements_SpanElement_replaceTextInternal(relativeStartPosition, relativeEndPosition, textValue);
  if (textValue && textValue.length)
    this.modelChanged(org.apache.royale.textLayout.events.ModelChange.TEXT_INSERTED, this, relativeStartPosition, (textValue.length) >> 0);
};


/**
 * @private
 * @param {number} startPos
 * @param {number} endPos
 * @param {string} textValue
 */
org.apache.royale.textLayout.elements.SpanElement.prototype.org_apache_royale_textLayout_elements_SpanElement_replaceTextInternal = function(startPos, endPos, textValue) {
  var /** @type {number} */ textValueLength = (textValue == null ? 0 : textValue.length) >> 0;
  var /** @type {number} */ deleteTotal = (endPos - startPos) >> 0;
  var /** @type {number} */ deltaChars = (textValueLength - deleteTotal) >> 0;
  if (this._blockElement) {
    this._blockElement.replaceText(startPos, endPos, textValue);
    this._text = this._blockElement.rawText;
    
  } else if (this._text) {
    if (textValue)
      this._text = this._text.slice(0, startPos) + textValue + this._text.slice(endPos, this._text.length);
    else
      this._text = this._text.slice(0, startPos) + this._text.slice(endPos, this._text.length);
  }
  else
    this._text = textValue;
  if (deltaChars != 0) {
    this.updateLengths((this.getAbsoluteStart() + startPos) >> 0, deltaChars, true);
    this.deleteContainerText(endPos, deleteTotal);
    if (textValueLength != 0) {
      var /** @type {org.apache.royale.textLayout.container.IContainerController} */ enclosingContainer = this.getEnclosingController(startPos);
      if (enclosingContainer)
        enclosingContainer.setTextLength((enclosingContainer.textLength + textValueLength) >> 0);
    }
  }
  
};


/** @asprivate 
 * @export
 */
org.apache.royale.textLayout.elements.SpanElement.prototype.addParaTerminator = function() {
  
  if (this._text && this._text.substr(-1) == org.apache.royale.textLayout.elements.ElementConstants.kParagraphTerminator)
    return;
  this.org_apache_royale_textLayout_elements_SpanElement_replaceTextInternal(this.textLength, this.textLength, org.apache.royale.textLayout.elements.ElementConstants.kParagraphTerminator);
  
  this.modelChanged(org.apache.royale.textLayout.events.ModelChange.TEXT_INSERTED, this, (this.textLength - 1) >> 0, 1);
};


/** @asprivate 
 * @export
 */
org.apache.royale.textLayout.elements.SpanElement.prototype.removeParaTerminator = function() {
  
  if (!this._text || this._text.substr(-1) != org.apache.royale.textLayout.elements.ElementConstants.kParagraphTerminator)
    return;
  this.org_apache_royale_textLayout_elements_SpanElement_replaceTextInternal((this.textLength - 1) >> 0, this.textLength, "");
  this.modelChanged(org.apache.royale.textLayout.events.ModelChange.TEXT_DELETED, this, (this.textLength > 0 ? this.textLength - 1 : 0) >> 0, 1);
};


/** 
 * Splits this SpanElement object at the specified position and returns a new SpanElement object for the content
 * that follows the specified position. 
 *
 * <p>This method throws an error if you attempt to split a surrogate pair. In Unicode UTF-16, a surrogate pair is a pair of 
 * 16-bit code units (a high code unit and a low code unit) that represent one of the abstract Unicode characters 
 * that cannot be represented in a single 16-bit word. The 16-bit high code unit is in the range of D800 to DBFF. The
 * 16-bit low code unit is in the range of DC00 to DFFF.</p>
 * 
 * @asparam relativePosition - relative position in the span to create the split
 * @asreturn - the newly created span. 
 * @throws RangeError <code>relativePosition</code> is less than 0 or greater than textLength or a surrogate pair is being split.
 *
 * @playerversion Flash 10
 * @playerversion AIR 1.5
 * @langversion 3.0
 * 
 * @asprivate
 * @export
 * @override
 */
org.apache.royale.textLayout.elements.SpanElement.prototype.splitAtPosition = function(relativePosition) {
  if (relativePosition < 0 || relativePosition > this.textLength)
    throw RangeError(org.apache.royale.textLayout.elements.GlobalSettings["resourceStringFunction"]("invalidSplitAtPosition"));
  if ((relativePosition < this.textLength) && org.apache.royale.textLayout.utils.CharacterUtil.isLowSurrogate((String(this.text).charCodeAt(relativePosition)) >> 0))
    throw RangeError(org.apache.royale.textLayout.elements.GlobalSettings["resourceStringFunction"]("invalidSurrogatePairSplit"));
  var /** @type {org.apache.royale.textLayout.elements.ISpanElement} */ newSpan = new org.apache.royale.textLayout.elements.SpanElement();
  newSpan.id = this.id;
  newSpan.typeName = this.typeName;
  if (this.parent) {
    var /** @type {org.apache.royale.text.engine.TextElement} */ newBlockElement;
    var /** @type {number} */ newSpanLength = (this.textLength - relativePosition) >> 0;
    if (this._blockElement) {
      var /** @type {org.apache.royale.text.engine.GroupElement} */ group = this.parent.createContentAsGroup(this.getElementRelativeStart(this.parent));
      var /** @type {number} */ elementIndex = group.getElementIndex(this._blockElement);
      
      
      group.splitTextElement(elementIndex, relativePosition);
      
      this._blockElement = group.getElementAt(elementIndex);
      this._text = this._blockElement.rawText;
      
      newBlockElement = group.getElementAt((elementIndex + 1) >> 0);
      
    } else if (relativePosition < this.textLength) {
      newSpan.text = this._text.substr(relativePosition);
      this._text = this._text.substring(0, relativePosition);
    }
    this.modelChanged(org.apache.royale.textLayout.events.ModelChange.TEXT_DELETED, this, relativePosition, newSpanLength);
    newSpan.quickInitializeForSplit(this, newSpanLength, newBlockElement);
    this.setTextLength(relativePosition);
    this.parent.addChildAfterInternal(this, newSpan);
    var /** @type {org.apache.royale.textLayout.elements.IParagraphElement} */ p = this.getParagraph();
    p.updateTerminatorSpan(this, newSpan);
    this.parent.modelChanged(org.apache.royale.textLayout.events.ModelChange.ELEMENT_ADDED, newSpan, newSpan.parentRelativeStart, newSpan.textLength);
  } else {
    newSpan.format = this.format;
    if (relativePosition < this.textLength) {
      newSpan.text = String(this.text).substr(relativePosition);
      this.replaceText(relativePosition, this.textLength, null);
    }
  }
  return newSpan;
};


/** @asprivate 
 * @export
 * @override
 */
org.apache.royale.textLayout.elements.SpanElement.prototype.normalizeRange = function(normalizeStart, normalizeEnd) {
  if (this.textLength == 1 && !this.bindableElement) {
    var /** @type {org.apache.royale.textLayout.elements.IParagraphElement} */ p = this.getParagraph();
    if (p && p.getLastLeaf() == this) {
      var /** @type {org.apache.royale.textLayout.elements.IFlowLeafElement} */ prevLeaf = this.getPreviousLeaf(p);
      if (prevLeaf) {
        if (!org.apache.royale.textLayout.formats.TextLayoutFormat.isEqual(this.format, prevLeaf.format))
          this.format = prevLeaf.format;
      }
    }
  }
  org.apache.royale.textLayout.elements.SpanElement.superClass_.normalizeRange.apply(this, [ normalizeStart, normalizeEnd] );
};


/** @asprivate 
 * @export
 * @override
 */
org.apache.royale.textLayout.elements.SpanElement.prototype.mergeToPreviousIfPossible = function() {
  if (this.parent && !this.bindableElement) {
    var /** @type {number} */ myidx = this.parent.getChildIndex(this);
    if (myidx != 0) {
      var /** @type {org.apache.royale.textLayout.elements.SpanElement} */ sib = this.parent.getChildAt((myidx - 1) >> 0);
      if (sib.className == "TableElement")
        return false;
      if (!sib && this.textLength == 1 && this.hasParagraphTerminator) {
        var /** @type {org.apache.royale.textLayout.elements.IParagraphElement} */ p = this.getParagraph();
        if (p) {
          var /** @type {org.apache.royale.textLayout.elements.IFlowLeafElement} */ prevLeaf = this.getPreviousLeaf(p);
          if (prevLeaf) {
            this.parent.removeChildAt((myidx) >>> 0);
            return true;
          }
        }
      }
      if (!org.apache.royale.utils.Language.is(sib, org.apache.royale.textLayout.elements.SpanElement))
        return false;
      if (this.hasActiveEventMirror())
        return false;
      var /** @type {boolean} */ thisIsSimpleTerminator = this.textLength == 1 && this.hasParagraphTerminator;
      if (sib.hasActiveEventMirror() && !thisIsSimpleTerminator)
        return false;
      if (thisIsSimpleTerminator || this.equalStylesForMerge(sib)) {
        
        
        var /** @type {number} */ siblingInsertPosition = sib.textLength;
        sib.replaceText(siblingInsertPosition, siblingInsertPosition, this.text);
        this.parent.removeChildAt((myidx) >>> 0);
        return true;
      }
    }
  }
  return false;
};


org.apache.royale.textLayout.elements.SpanElement.prototype.get__className = function() {
  return "SpanElement";
};


org.apache.royale.textLayout.elements.SpanElement.prototype.get__abstract = function() {
  return false;
};


org.apache.royale.textLayout.elements.SpanElement.prototype.get__defaultTypeName = function() {
  return "span";
};


org.apache.royale.textLayout.elements.SpanElement.prototype.get__text = function() {
  if (this.textLength == 0)
    return "";
  return this.hasParagraphTerminator ? this._text.substr(0, this.textLength - 1) : this._text;
};


org.apache.royale.textLayout.elements.SpanElement.prototype.set__text = function(textValue) {
  this.replaceText(0, this.textLength, textValue);
};


org.apache.royale.textLayout.elements.SpanElement.prototype.get__mxmlChildren = function() {
  return [this.text];
};


org.apache.royale.textLayout.elements.SpanElement.prototype.set__mxmlChildren = function(array) {
  var /** @type {string} */ str = org.apache.royale.textLayout.elements.ElementHelper.getSpanText(array);
  this.replaceText(0, this.textLength, str);
};


org.apache.royale.textLayout.elements.SpanElement.prototype.get__hasParagraphTerminator = function() {
  var /** @type {org.apache.royale.textLayout.elements.IParagraphElement} */ p = this.getParagraph();
  return !!((p && p.getLastLeaf() == this));
};


Object.defineProperties(org.apache.royale.textLayout.elements.SpanElement.prototype, /** @lends {org.apache.royale.textLayout.elements.SpanElement.prototype} */ {
/**
  * @export
  * @type {string} */
className: {
get: org.apache.royale.textLayout.elements.SpanElement.prototype.get__className},
/**
  * @type {boolean} */
abstract: {
get: org.apache.royale.textLayout.elements.SpanElement.prototype.get__abstract},
/**
  * @export
  * @type {string} */
defaultTypeName: {
get: org.apache.royale.textLayout.elements.SpanElement.prototype.get__defaultTypeName},
/**
  * @export
  * @type {string} */
text: {
get: org.apache.royale.textLayout.elements.SpanElement.prototype.get__text,
set: org.apache.royale.textLayout.elements.SpanElement.prototype.set__text},
/**
  * @export
  * @type {Array} */
mxmlChildren: {
get: org.apache.royale.textLayout.elements.SpanElement.prototype.get__mxmlChildren,
set: org.apache.royale.textLayout.elements.SpanElement.prototype.set__mxmlChildren},
/**
  * @export
  * @type {boolean} */
hasParagraphTerminator: {
get: org.apache.royale.textLayout.elements.SpanElement.prototype.get__hasParagraphTerminator}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.elements.SpanElement.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SpanElement', qName: 'org.apache.royale.textLayout.elements.SpanElement', kind: 'class' }], interfaces: [org.apache.royale.textLayout.elements.ISpanElement] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.elements.SpanElement.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'className': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.SpanElement'},
        'defaultTypeName': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.SpanElement'},
        'text': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.SpanElement'},
        'mxmlChildren': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.SpanElement'},
        'hasParagraphTerminator': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.SpanElement'}
      };
    },
    methods: function () {
      return {
        'SpanElement': { type: '', declaredBy: 'org.apache.royale.textLayout.elements.SpanElement'},
        'createContentElement': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.SpanElement'},
        'shallowCopy': { type: 'org.apache.royale.textLayout.elements.IFlowElement', declaredBy: 'org.apache.royale.textLayout.elements.SpanElement', parameters: function () { return [ 'int', true ,'int', true ]; }},
        'getText': { type: 'String', declaredBy: 'org.apache.royale.textLayout.elements.SpanElement', parameters: function () { return [ 'int', true ,'int', true ,'String', true ]; }},
        'applyWhiteSpaceCollapse': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.SpanElement', parameters: function () { return [ 'String', false ]; }},
        'replaceText': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.SpanElement', parameters: function () { return [ 'int', false ,'int', false ,'String', false ]; }},
        'addParaTerminator': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.SpanElement'},
        'removeParaTerminator': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.SpanElement'},
        'splitAtPosition': { type: 'org.apache.royale.textLayout.elements.IFlowElement', declaredBy: 'org.apache.royale.textLayout.elements.SpanElement', parameters: function () { return [ 'int', false ]; }},
        'normalizeRange': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.SpanElement', parameters: function () { return [ 'uint', false ,'uint', false ]; }},
        'mergeToPreviousIfPossible': { type: 'Boolean', declaredBy: 'org.apache.royale.textLayout.elements.SpanElement'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.elements.SpanElement.prototype.ROYALE_COMPILE_FLAGS = 10;
