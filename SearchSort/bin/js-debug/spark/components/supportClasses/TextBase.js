/**
 * Generated by Apache Royale Compiler from spark/components/supportClasses/TextBase.as
 * spark.components.supportClasses.TextBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('spark.components.supportClasses.TextBase');
/* Royale Dependency List: mx.core.mx_internal,mx.events.FlexEvent,org.apache.royale.core.WrappedHTMLElement,org.apache.royale.geom.Rectangle,org.apache.royale.html.util.addElementToWrapper,org.apache.royale.svg.GraphicShape,org.apache.royale.text.engine.ITextLine,org.apache.royale.text.engine.TextLineValidity,org.apache.royale.text.html.TextLine,org.apache.royale.textLayout.compose.TextLineRecycler,org.apache.royale.utils.Language,XML*/

goog.require('mx.core.UIComponent');
goog.require('spark.core.IDisplayText');



/**
 *  Constructor. 
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10
 *  @playerversion AIR 1.5
 *  @productversion Royale 0.9.4
 * @constructor
 * @extends {mx.core.UIComponent}
 * @implements {spark.core.IDisplayText}
 */
spark.components.supportClasses.TextBase = function() {
  
  this.http_$$www_adobe_com$2006$flex$mx$internal__bounds = new org.apache.royale.geom.Rectangle(0, 0, NaN, NaN);
  this.http_$$www_adobe_com$2006$flex$mx$internal__textLines = [];
  spark.components.supportClasses.TextBase.base(this, 'constructor');
};
goog.inherits(spark.components.supportClasses.TextBase, mx.core.UIComponent);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('spark.components.supportClasses.TextBase', spark.components.supportClasses.TextBase);


/**
 * @type {org.apache.royale.geom.Rectangle}
 */
spark.components.supportClasses.TextBase.prototype.http_$$www_adobe_com$2006$flex$mx$internal__bounds;


/**
 * @type {Array}
 */
spark.components.supportClasses.TextBase.prototype.http_$$www_adobe_com$2006$flex$mx$internal__textLines;


/**
 * @type {number}
 */
spark.components.supportClasses.TextBase.prototype.http_$$www_adobe_com$2006$flex$mx$internal___composeWidth;


/**
 * @type {number}
 */
spark.components.supportClasses.TextBase.prototype.http_$$www_adobe_com$2006$flex$mx$internal___composeHeight;


/**
 * @private
 * @type {org.apache.royale.svg.GraphicShape}
 */
spark.components.supportClasses.TextBase.prototype.spark_components_supportClasses_TextBase__backgroundShape;


/**
 * @private
 * @type {boolean}
 */
spark.components.supportClasses.TextBase.prototype.spark_components_supportClasses_TextBase_visibleChanged = false;


/**
 * @private
 * @type {boolean}
 */
spark.components.supportClasses.TextBase.prototype.spark_components_supportClasses_TextBase__isTruncated = false;


/**
 * @private
 * @type {number}
 */
spark.components.supportClasses.TextBase.prototype.spark_components_supportClasses_TextBase__maxDisplayedLines = 0;


/**
 * @protected
 * @type {Text}
 */
spark.components.supportClasses.TextBase.prototype.textNode;


/**
 * @type {string}
 */
spark.components.supportClasses.TextBase.prototype.http_$$www_adobe_com$2006$flex$mx$internal___text = "";


/**
 * @royaleignorecoercion window.Text
 * @protected
 * @override
 */
spark.components.supportClasses.TextBase.prototype.createElement = function() {
  org.apache.royale.html.util.addElementToWrapper(this, 'span');
  this.textNode = org.apache.royale.utils.Language.as(document.createTextNode(this.http_$$www_adobe_com$2006$flex$mx$internal___text), Text);
  this.element.appendChild(this.textNode);
  this.element.style.display = "inline-block";
  return this.element;
};


/**
 *  @asprivate
 * @protected
 * @override
 */
spark.components.supportClasses.TextBase.prototype.updateDisplayList = function(unscaledWidth, unscaledHeight) {
  spark.components.supportClasses.TextBase.superClass_.updateDisplayList.apply(this, [ unscaledWidth, unscaledHeight] );
};


/**
 *  @asprivate
 *  Returns false to indicate no lines were composed.
 * @export
 * @param {number=} width
 * @param {number=} height
 * @return {boolean}
 */
spark.components.supportClasses.TextBase.prototype.http_$$www_adobe_com$2006$flex$mx$internal__composeTextLines = function(width, height) {
  width = typeof width !== 'undefined' ? width : NaN;
  height = typeof height !== 'undefined' ? height : NaN;
  this.http_$$www_adobe_com$2006$flex$mx$internal___composeWidth = width;
  this.http_$$www_adobe_com$2006$flex$mx$internal___composeHeight = height;
  return false;
};


/**
 *  @asprivate
 *  Adds the TextLines created by composeTextLines() to this container.
 * @export
 */
spark.components.supportClasses.TextBase.prototype.http_$$www_adobe_com$2006$flex$mx$internal__addTextLines = function() {
  var /** @type {number} */ n = (this.http_$$www_adobe_com$2006$flex$mx$internal__textLines.length) >> 0;
  if (n == 0)
    return;
  for (var /** @type {number} */ i = (n - 1) >> 0; i >= 0; i--) {
    var /** @type {org.apache.royale.text.engine.ITextLine} */ textLine = this.http_$$www_adobe_com$2006$flex$mx$internal__textLines[i];
    
    this.addElementAt(textLine, 1);
  }
};


/**
 *  @asprivate
 *  Removes the TextLines created by composeTextLines()
 *  from whatever container they were in.
 * 
 *  This does not empty the textLines Array.
 * @export
 */
spark.components.supportClasses.TextBase.prototype.http_$$www_adobe_com$2006$flex$mx$internal__removeTextLines = function() {
  var /** @type {number} */ n = (this.http_$$www_adobe_com$2006$flex$mx$internal__textLines.length) >> 0;
  if (n == 0)
    return;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {org.apache.royale.text.engine.ITextLine} */ textLine = this.http_$$www_adobe_com$2006$flex$mx$internal__textLines[i];
    var /** @type {mx.core.UIComponent} */ parent = org.apache.royale.utils.Language.as(textLine.parent, mx.core.UIComponent);
    if (parent) {
      
      org.apache.royale.utils.Language.as(textLine.parent, mx.core.UIComponent, true).removeElement(textLine);
    }
  }
};


/**
 *  @asprivate
 *  Adds the TextLines to the reuse cache, and clears the textLines array.
 * @export
 * @param {Array=} textLinesVector
 */
spark.components.supportClasses.TextBase.prototype.http_$$www_adobe_com$2006$flex$mx$internal__releaseTextLines = function(textLinesVector) {
  textLinesVector = typeof textLinesVector !== 'undefined' ? textLinesVector : null;
  if (!textLinesVector)
    textLinesVector = this.http_$$www_adobe_com$2006$flex$mx$internal__textLines;
  var /** @type {number} */ n = (textLinesVector.length) >> 0;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {org.apache.royale.text.html.TextLine} */ textLine = org.apache.royale.utils.Language.as(textLinesVector[i], org.apache.royale.text.html.TextLine);
    if (textLine) {
      if (textLine.validity != org.apache.royale.text.engine.TextLineValidity.INVALID && textLine.validity != org.apache.royale.text.engine.TextLineValidity.STATIC) {
        textLine.validity = org.apache.royale.text.engine.TextLineValidity.INVALID;
      }
      textLine.userData = null;
      org.apache.royale.textLayout.compose.TextLineRecycler.addLineForReuse(textLine);
    }
  }
  textLinesVector.length = 0;
};


/**
 *  @asprivate
 *  We clear the width constraint that's used for the text reflow
 *  after the layout pass is complete.
 * @private
 * @param {mx.events.FlexEvent} event
 */
spark.components.supportClasses.TextBase.prototype.spark_components_supportClasses_TextBase_updateCompleteHandler = function(event) {
};


spark.components.supportClasses.TextBase.prototype.set__visible = function(value) {
  spark.components.supportClasses.TextBase.superClass_.set__visible.apply(this, [ value] );
  this.spark_components_supportClasses_TextBase_visibleChanged = true;
  this.invalidateDisplayList();
};


spark.components.supportClasses.TextBase.prototype.get__isTruncated = function() {
  return Boolean(this.spark_components_supportClasses_TextBase__isTruncated);
};


spark.components.supportClasses.TextBase.prototype.get__maxDisplayedLines = function() {
  return this.spark_components_supportClasses_TextBase__maxDisplayedLines;
};


spark.components.supportClasses.TextBase.prototype.set__maxDisplayedLines = function(value) {
  this.spark_components_supportClasses_TextBase__maxDisplayedLines = value;
};


spark.components.supportClasses.TextBase.prototype.get__text = function() {
  
  return this.http_$$www_adobe_com$2006$flex$mx$internal___text;
};


spark.components.supportClasses.TextBase.prototype.set__text = function(value) {
  
  if (this.textNode) {
    this.http_$$www_adobe_com$2006$flex$mx$internal___text = value;
    this.textNode.nodeValue = value;
    this.dispatchEvent('textChange');
  }
  this.invalidateSize();
};


Object.defineProperties(spark.components.supportClasses.TextBase.prototype, /** @lends {spark.components.supportClasses.TextBase.prototype} */ {
/**
  * @export
  * @type {boolean} */
visible: {
get: mx.core.UIComponent.prototype.get__visible,
set: spark.components.supportClasses.TextBase.prototype.set__visible},
/**
  * @export
  * @type {boolean} */
isTruncated: {
get: spark.components.supportClasses.TextBase.prototype.get__isTruncated},
/**
  * @export
  * @type {number} */
maxDisplayedLines: {
get: spark.components.supportClasses.TextBase.prototype.get__maxDisplayedLines,
set: spark.components.supportClasses.TextBase.prototype.set__maxDisplayedLines},
/**
  * @export
  * @type {string} */
text: {
get: spark.components.supportClasses.TextBase.prototype.get__text,
set: spark.components.supportClasses.TextBase.prototype.set__text}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
spark.components.supportClasses.TextBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TextBase', qName: 'spark.components.supportClasses.TextBase', kind: 'class' }], interfaces: [spark.core.IDisplayText] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
spark.components.supportClasses.TextBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'http://www.adobe.com/2006/flex/mx/internal::bounds': { type: 'org.apache.royale.geom.Rectangle', get_set: function (/** spark.components.supportClasses.TextBase */ inst, /** * */ v) {return v !== undefined ? inst.http_$$www_adobe_com$2006$flex$mx$internal__bounds = v : inst.http_$$www_adobe_com$2006$flex$mx$internal__bounds;}},
        'http://www.adobe.com/2006/flex/mx/internal::textLines': { type: 'Array', get_set: function (/** spark.components.supportClasses.TextBase */ inst, /** * */ v) {return v !== undefined ? inst.http_$$www_adobe_com$2006$flex$mx$internal__textLines = v : inst.http_$$www_adobe_com$2006$flex$mx$internal__textLines;}},
        'http://www.adobe.com/2006/flex/mx/internal::_composeWidth': { type: 'Number', get_set: function (/** spark.components.supportClasses.TextBase */ inst, /** * */ v) {return v !== undefined ? inst.http_$$www_adobe_com$2006$flex$mx$internal___composeWidth = v : inst.http_$$www_adobe_com$2006$flex$mx$internal___composeWidth;}},
        'http://www.adobe.com/2006/flex/mx/internal::_composeHeight': { type: 'Number', get_set: function (/** spark.components.supportClasses.TextBase */ inst, /** * */ v) {return v !== undefined ? inst.http_$$www_adobe_com$2006$flex$mx$internal___composeHeight = v : inst.http_$$www_adobe_com$2006$flex$mx$internal___composeHeight;}},
        'http://www.adobe.com/2006/flex/mx/internal::_text': { type: 'String', get_set: function (/** spark.components.supportClasses.TextBase */ inst, /** * */ v) {return v !== undefined ? inst.http_$$www_adobe_com$2006$flex$mx$internal___text = v : inst.http_$$www_adobe_com$2006$flex$mx$internal___text;}}
      };
    },
    accessors: function () {
      return {
        'visible': { type: 'Boolean', access: 'writeonly', declaredBy: 'spark.components.supportClasses.TextBase'},
        'isTruncated': { type: 'Boolean', access: 'readonly', declaredBy: 'spark.components.supportClasses.TextBase'},
        'maxDisplayedLines': { type: 'int', access: 'readwrite', declaredBy: 'spark.components.supportClasses.TextBase'},
        'text': { type: 'String', access: 'readwrite', declaredBy: 'spark.components.supportClasses.TextBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'textChange' } ] } ]; }}
      };
    },
    methods: function () {
      return {
        'TextBase': { type: '', declaredBy: 'spark.components.supportClasses.TextBase'},
        'http://www.adobe.com/2006/flex/mx/internal::composeTextLines': { type: 'Boolean', declaredBy: 'spark.components.supportClasses.TextBase', parameters: function () { return [ 'Number', true ,'Number', true ]; }},
        'http://www.adobe.com/2006/flex/mx/internal::addTextLines': { type: 'void', declaredBy: 'spark.components.supportClasses.TextBase'},
        'http://www.adobe.com/2006/flex/mx/internal::removeTextLines': { type: 'void', declaredBy: 'spark.components.supportClasses.TextBase'},
        'http://www.adobe.com/2006/flex/mx/internal::releaseTextLines': { type: 'void', declaredBy: 'spark.components.supportClasses.TextBase', parameters: function () { return [ 'Array', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
spark.components.supportClasses.TextBase.prototype.ROYALE_COMPILE_FLAGS = 10;
