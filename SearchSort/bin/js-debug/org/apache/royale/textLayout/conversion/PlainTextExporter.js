/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/conversion/PlainTextExporter.as
 * org.apache.royale.textLayout.conversion.PlainTextExporter
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.conversion.PlainTextExporter');
/* Royale Dependency List: org.apache.royale.textLayout.conversion.ConversionConstants,org.apache.royale.textLayout.conversion.ConversionType,org.apache.royale.textLayout.elements.IFlowLeafElement,org.apache.royale.textLayout.elements.IParagraphElement,org.apache.royale.textLayout.elements.ITextFlow,XML*/

goog.require('org.apache.royale.textLayout.conversion.ConverterBase');
goog.require('org.apache.royale.textLayout.conversion.IPlainTextExporter');



/**
 * Constructor 
 * @playerversion Flash 10
 * @playerversion AIR 1.5
 * @langversion 3.0
 * @constructor
 * @extends {org.apache.royale.textLayout.conversion.ConverterBase}
 * @implements {org.apache.royale.textLayout.conversion.IPlainTextExporter}
 */
org.apache.royale.textLayout.conversion.PlainTextExporter = function() {
  org.apache.royale.textLayout.conversion.PlainTextExporter.base(this, 'constructor');
  this.org_apache_royale_textLayout_conversion_PlainTextExporter__stripDiscretionaryHyphens = true;
  this.org_apache_royale_textLayout_conversion_PlainTextExporter__paragraphSeparator = "\n";
};
goog.inherits(org.apache.royale.textLayout.conversion.PlainTextExporter, org.apache.royale.textLayout.conversion.ConverterBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.conversion.PlainTextExporter', org.apache.royale.textLayout.conversion.PlainTextExporter);


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.textLayout.conversion.PlainTextExporter.prototype.org_apache_royale_textLayout_conversion_PlainTextExporter__stripDiscretionaryHyphens;


/**
 * @private
 * @type {string}
 */
org.apache.royale.textLayout.conversion.PlainTextExporter.prototype.org_apache_royale_textLayout_conversion_PlainTextExporter__paragraphSeparator;


org.apache.royale.textLayout.conversion.PlainTextExporter.get___discretionaryHyphen = function() {
  var value = String.fromCharCode(0x00AD);
  Object.defineProperty(org.apache.royale.textLayout.conversion.PlainTextExporter, '_discretionaryHyphen', { value: value, writable: true });
  return value;
};
org.apache.royale.textLayout.conversion.PlainTextExporter.set___discretionaryHyphen = function(value) {
  Object.defineProperty(org.apache.royale.textLayout.conversion.PlainTextExporter, '_discretionaryHyphen', { value: value, writable: true });
};
/**
 * @private
 * @type {string}
 */
org.apache.royale.textLayout.conversion.PlainTextExporter._discretionaryHyphen;

Object.defineProperties(org.apache.royale.textLayout.conversion.PlainTextExporter, /** @lends {org.apache.royale.textLayout.conversion.PlainTextExporter} */ {
/**
 * @private
 * @type {string}
 */
_discretionaryHyphen: {
  get: org.apache.royale.textLayout.conversion.PlainTextExporter.get___discretionaryHyphen,
  set: org.apache.royale.textLayout.conversion.PlainTextExporter.set___discretionaryHyphen,
  configurable: true}});


/** @copy ITextExporter#export()
 * @export
 * @param {org.apache.royale.textLayout.elements.ITextFlow} source
 * @param {string} conversionType
 * @return {Object}
 */
org.apache.royale.textLayout.conversion.PlainTextExporter.prototype.export = function(source, conversionType) {
  this.clear();
  if (conversionType == org.apache.royale.textLayout.conversion.ConversionType.STRING_TYPE)
    return this.exportToString(source);
  return null;
};


/** Export text content as a string
 * @asparam source	the text to export
 * @asreturn String	the exported content
 * 
 * @asprivate
 * @protected
 * @param {org.apache.royale.textLayout.elements.ITextFlow} source
 * @return {string}
 */
org.apache.royale.textLayout.conversion.PlainTextExporter.prototype.exportToString = function(source) {
  var /** @type {string} */ rslt = "";
  var /** @type {org.apache.royale.textLayout.elements.IFlowLeafElement} */ leaf = source.getFirstLeaf();
  while (leaf) {
    var /** @type {org.apache.royale.textLayout.elements.IParagraphElement} */ p = leaf.getParagraph();
    while (true) {
      var /** @type {string} */ curString = leaf.text;
      if (this.org_apache_royale_textLayout_conversion_PlainTextExporter__stripDiscretionaryHyphens) {
        var /** @type {Array} */ temparray = curString.split(org.apache.royale.textLayout.conversion.PlainTextExporter._discretionaryHyphen);
        curString = temparray.join("");
      }
      rslt += curString;
      var /** @type {org.apache.royale.textLayout.elements.IFlowLeafElement} */ nextLeaf = leaf.getNextLeaf(p);
      if (!nextLeaf)
        break;
      leaf = nextLeaf;
    }
    leaf = leaf.getNextLeaf();
    if (leaf)
      rslt += this.org_apache_royale_textLayout_conversion_PlainTextExporter__paragraphSeparator;
  }
  if (this.useClipboardAnnotations) {
    var /** @type {org.apache.royale.textLayout.elements.IParagraphElement} */ lastPara = source.getLastLeaf().getParagraph();
    if (lastPara.getStyle(org.apache.royale.textLayout.conversion.ConversionConstants.MERGE_TO_NEXT_ON_PASTE) != "true")
      rslt += this.org_apache_royale_textLayout_conversion_PlainTextExporter__paragraphSeparator;
  }
  return rslt;
};


org.apache.royale.textLayout.conversion.PlainTextExporter.prototype.get__stripDiscretionaryHyphens = function() {
  return this.org_apache_royale_textLayout_conversion_PlainTextExporter__stripDiscretionaryHyphens;
};


org.apache.royale.textLayout.conversion.PlainTextExporter.prototype.set__stripDiscretionaryHyphens = function(value) {
  this.org_apache_royale_textLayout_conversion_PlainTextExporter__stripDiscretionaryHyphens = value;
};


org.apache.royale.textLayout.conversion.PlainTextExporter.prototype.get__paragraphSeparator = function() {
  return this.org_apache_royale_textLayout_conversion_PlainTextExporter__paragraphSeparator;
};


org.apache.royale.textLayout.conversion.PlainTextExporter.prototype.set__paragraphSeparator = function(value) {
  this.org_apache_royale_textLayout_conversion_PlainTextExporter__paragraphSeparator = value;
};


Object.defineProperties(org.apache.royale.textLayout.conversion.PlainTextExporter.prototype, /** @lends {org.apache.royale.textLayout.conversion.PlainTextExporter.prototype} */ {
/**
  * @export
  * @type {boolean} */
stripDiscretionaryHyphens: {
get: org.apache.royale.textLayout.conversion.PlainTextExporter.prototype.get__stripDiscretionaryHyphens,
set: org.apache.royale.textLayout.conversion.PlainTextExporter.prototype.set__stripDiscretionaryHyphens},
/**
  * @export
  * @type {string} */
paragraphSeparator: {
get: org.apache.royale.textLayout.conversion.PlainTextExporter.prototype.get__paragraphSeparator,
set: org.apache.royale.textLayout.conversion.PlainTextExporter.prototype.set__paragraphSeparator}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.conversion.PlainTextExporter.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'PlainTextExporter', qName: 'org.apache.royale.textLayout.conversion.PlainTextExporter', kind: 'class' }], interfaces: [org.apache.royale.textLayout.conversion.IPlainTextExporter] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.conversion.PlainTextExporter.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'stripDiscretionaryHyphens': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.conversion.PlainTextExporter'},
        'paragraphSeparator': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.conversion.PlainTextExporter'}
      };
    },
    methods: function () {
      return {
        'PlainTextExporter': { type: '', declaredBy: 'org.apache.royale.textLayout.conversion.PlainTextExporter'},
        'export': { type: 'Object', declaredBy: 'org.apache.royale.textLayout.conversion.PlainTextExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.ITextFlow', false ,'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.conversion.PlainTextExporter.prototype.ROYALE_COMPILE_FLAGS = 10;
