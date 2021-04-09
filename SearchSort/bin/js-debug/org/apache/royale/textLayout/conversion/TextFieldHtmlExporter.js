/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/conversion/TextFieldHtmlExporter.as
 * org.apache.royale.textLayout.conversion.TextFieldHtmlExporter
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.conversion.TextFieldHtmlExporter');
/* Royale Dependency List: XML,XMLList,org.apache.royale.reflection.getQualifiedClassName,org.apache.royale.text.engine.Kerning,org.apache.royale.text.engine.TabAlignment,org.apache.royale.textLayout.conversion.BaseTextLayoutExporter,org.apache.royale.textLayout.conversion.ConversionType,org.apache.royale.textLayout.conversion.FlowElementInfo,org.apache.royale.textLayout.conversion.ImportExportConfiguration,org.apache.royale.textLayout.elements.BreakElement,org.apache.royale.textLayout.elements.DivElement,org.apache.royale.textLayout.elements.FlowGroupElement,org.apache.royale.textLayout.elements.IFlowElement,org.apache.royale.textLayout.elements.IFlowGroupElement,org.apache.royale.textLayout.elements.IFlowLeafElement,org.apache.royale.textLayout.elements.IListElement,org.apache.royale.textLayout.elements.IParagraphElement,org.apache.royale.textLayout.elements.ITextFlow,org.apache.royale.textLayout.elements.InlineGraphicElement,org.apache.royale.textLayout.elements.LinkElement,org.apache.royale.textLayout.elements.ListElement,org.apache.royale.textLayout.elements.ListItemElement,org.apache.royale.textLayout.elements.SpanElement,org.apache.royale.textLayout.elements.SubParagraphGroupElement,org.apache.royale.textLayout.elements.SubParagraphGroupElementBase,org.apache.royale.textLayout.elements.TCYElement,org.apache.royale.textLayout.elements.TabElement,org.apache.royale.textLayout.formats.Direction,org.apache.royale.textLayout.formats.Float,org.apache.royale.textLayout.formats.FormatValue,org.apache.royale.textLayout.formats.ITextLayoutFormat,org.apache.royale.textLayout.formats.LeadingModel,org.apache.royale.textLayout.formats.TabStopFormat,org.apache.royale.textLayout.formats.TextAlign,org.apache.royale.textLayout.formats.TextDecoration,org.apache.royale.textLayout.formats.TextLayoutFormat,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.textLayout.conversion.ConverterBase');
goog.require('org.apache.royale.textLayout.conversion.ITextExporter');



/**
 * @constructor
 * @extends {org.apache.royale.textLayout.conversion.ConverterBase}
 * @implements {org.apache.royale.textLayout.conversion.ITextExporter}
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter = function() {
  org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.base(this, 'constructor');
  if (!org.apache.royale.textLayout.conversion.TextFieldHtmlExporter._config) {
    org.apache.royale.textLayout.conversion.TextFieldHtmlExporter._config = new org.apache.royale.textLayout.conversion.ImportExportConfiguration();
    org.apache.royale.textLayout.conversion.TextFieldHtmlExporter._config.addIEInfo(null, org.apache.royale.textLayout.elements.DivElement, null, org.apache.royale.utils.Language.closure(this.exportDiv, this, 'exportDiv'));
    org.apache.royale.textLayout.conversion.TextFieldHtmlExporter._config.addIEInfo(null, org.apache.royale.textLayout.elements.IParagraphElement, null, org.apache.royale.utils.Language.closure(this.exportParagraph, this, 'exportParagraph'));
    org.apache.royale.textLayout.conversion.TextFieldHtmlExporter._config.addIEInfo(null, org.apache.royale.textLayout.elements.LinkElement, null, org.apache.royale.utils.Language.closure(this.exportLink, this, 'exportLink'));
    org.apache.royale.textLayout.conversion.TextFieldHtmlExporter._config.addIEInfo(null, org.apache.royale.textLayout.elements.TCYElement, null, org.apache.royale.utils.Language.closure(this.exportTCY, this, 'exportTCY'));
    org.apache.royale.textLayout.conversion.TextFieldHtmlExporter._config.addIEInfo(null, org.apache.royale.textLayout.elements.SubParagraphGroupElement, null, org.apache.royale.utils.Language.closure(this.exportSPGE, this, 'exportSPGE'));
    org.apache.royale.textLayout.conversion.TextFieldHtmlExporter._config.addIEInfo(null, org.apache.royale.textLayout.elements.SpanElement, null, org.apache.royale.utils.Language.closure(this.exportSpan, this, 'exportSpan'));
    org.apache.royale.textLayout.conversion.TextFieldHtmlExporter._config.addIEInfo(null, org.apache.royale.textLayout.elements.InlineGraphicElement, null, org.apache.royale.utils.Language.closure(this.exportImage, this, 'exportImage'));
    org.apache.royale.textLayout.conversion.TextFieldHtmlExporter._config.addIEInfo(null, org.apache.royale.textLayout.elements.TabElement, null, org.apache.royale.utils.Language.closure(this.exportTab, this, 'exportTab'));
    org.apache.royale.textLayout.conversion.TextFieldHtmlExporter._config.addIEInfo(null, org.apache.royale.textLayout.elements.BreakElement, null, org.apache.royale.utils.Language.closure(this.exportBreak, this, 'exportBreak'));
    org.apache.royale.textLayout.conversion.TextFieldHtmlExporter._config.addIEInfo(null, org.apache.royale.textLayout.elements.ListElement, null, org.apache.royale.utils.Language.closure(this.exportList, this, 'exportList'));
    org.apache.royale.textLayout.conversion.TextFieldHtmlExporter._config.addIEInfo(null, org.apache.royale.textLayout.elements.ListItemElement, null, org.apache.royale.utils.Language.closure(this.exportListItem, this, 'exportListItem'));
  }
};
goog.inherits(org.apache.royale.textLayout.conversion.TextFieldHtmlExporter, org.apache.royale.textLayout.conversion.ConverterBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', org.apache.royale.textLayout.conversion.TextFieldHtmlExporter);


/**
 * @export
 * @nocollapse
 * @type {org.apache.royale.textLayout.conversion.ImportExportConfiguration}
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter._config;


/** @copy ITextExporter#export()
 * @export
 * @param {org.apache.royale.textLayout.elements.ITextFlow} source
 * @param {string} conversionType
 * @return {Object}
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.export = function(source, conversionType) {
  var /** @type {XML} */ result = this.exportToXML(source);
  return conversionType == org.apache.royale.textLayout.conversion.ConversionType.STRING_TYPE ? org.apache.royale.textLayout.conversion.BaseTextLayoutExporter.convertXMLToString(result) : result;
};


/** Export text content of a TextFlow into HTML format.
 * @asparam source	the text to export
 * @asreturn XML	the exported content
 * @asprivate
 * @export
 * @param {org.apache.royale.textLayout.elements.ITextFlow} textFlow
 * @return {XML}
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportToXML = function(textFlow) {
  var /** @type {XML} */ html = new XML( '<HTML/>');
  if (textFlow.numChildren != 0) {
    if (textFlow.getChildAt(0).typeName != "BODY") {
      var /** @type {XML} */ body = new XML( '<BODY/>');
      html.appendChild(body);
      this.exportChildren(textFlow, body);
    }
    else
      this.exportChildren(textFlow, html);
  }
  return html;
};


/** create the XMl tag for an element. @asprivate 
 * @export
 * @param {org.apache.royale.textLayout.elements.IFlowElement} elem
 * @param {string} defaultTag
 * @return {XML}
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.makeTaggedTypeName = function(elem, defaultTag) {
  if (elem.typeName == elem.defaultTypeName)
    return new XML( '<' + defaultTag + '/>');
  return new XML( '<' + elem.typeName.toUpperCase() + '/>');
};


/** export styleName and id @asprivate 
 * @export
 * @param {org.apache.royale.textLayout.elements.IFlowElement} elem
 * @param {XML} xml
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.exportStyling = function(elem, xml) {
  if (elem.id != null)
    xml.setAttribute('id', elem.id);
};


/** export FlowGroupElement children into parentXML. @asprivate 
 * @export
 * @param {org.apache.royale.textLayout.elements.IFlowGroupElement} elem
 * @param {XML} parentXML
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportChildren = function(elem, parentXML) {
  for (var /** @type {number} */ idx = 0; idx < elem.numChildren; idx++) {
    var /** @type {org.apache.royale.textLayout.elements.IFlowElement} */ child = elem.getChildAt(idx);
    this.exportElement(child, parentXML);
  }
};


/** Export a List @asprivate 
 * @export
 * @param {org.apache.royale.textLayout.elements.IListElement} list
 * @param {XML} parentXML
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportList = function(list, parentXML) {
  var /** @type {XML} */ xml;
  if (list.isNumberedList())
    xml = new XML( '<OL/>');
  else
    xml = new XML( '<UL/>');
  org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.exportStyling(list, xml);
  this.exportChildren(list, xml);
  if (list.typeName != list.defaultTypeName) {
    var /** @type {XML} */ typeNameXML = new XML( '<' + list.typeName + '/>');
    typeNameXML.appendChild(xml);
    parentXML.appendChild(typeNameXML);
  }
  else
    parentXML.appendChild(xml);
};


/** Export a ListItem @asprivate 
 * @export
 * @param {org.apache.royale.textLayout.elements.ListItemElement} li
 * @param {XML} parentXML
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportListItem = function(li, parentXML) {
  var /** @type {XML} */ xml = new XML( '<LI/>');
  org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.exportStyling(li, xml);
  this.exportChildren(li, xml);
  var /** @type {XMLList} */ children = xml.children();
  if (children.length() == 1) {
    var /** @type {XML} */ child = children[0];
    if (child.name().localName == "P") {
      var /** @type {XMLList} */ paraChildren = child.children();
      if (paraChildren.length() == 1) {
        xml = new XML( '<LI/>');
        xml.appendChild(paraChildren[0]);
      }
    }
  }
  parentXML.appendChild(xml);
};


/** Export a DIV element 
 * @export
 * @param {org.apache.royale.textLayout.elements.DivElement} div
 * @param {XML} parentXML
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportDiv = function(div, parentXML) {
  var /** @type {XML} */ xml = org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.makeTaggedTypeName(div, "DIV");
  org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.exportStyling(div, xml);
  this.exportChildren(div, xml);
  parentXML.appendChild(xml);
};


/** Export a paragraph
 * @asprivate
 * @export
 * @param {org.apache.royale.textLayout.elements.IParagraphElement} para
 * @param {XML} parentXML
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportParagraph = function(para, parentXML) {
  var /** @type {XML} */ xml = org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.makeTaggedTypeName(para, "P");
  org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.exportStyling(para, xml);
  var /** @type {XML} */ fontXML = this.exportFont(para.computedFormat);
  
  this.exportSubParagraphChildren(para, fontXML);
  org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.nest(xml, fontXML);
  parentXML.appendChild(this.exportParagraphFormat(xml, para));
};


/** Export a link
 * @asprivate
 * @export
 * @param {org.apache.royale.textLayout.elements.LinkElement} link
 * @param {XML} parentXML
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportLink = function(link, parentXML) {
  var /** @type {XML} */ xml = new XML( '<A/>');
  if (link.href)
    xml.setAttribute('HREF', link.href);
  if (link.target)
    xml.setAttribute('TARGET', link.target); else {
    xml.setAttribute('TARGET', "_blank");
  }
  this.exportSubParagraphElement(link, xml, parentXML);
};


/** Export a tcy element
 * @asprivate
 * @export
 * @param {org.apache.royale.textLayout.elements.TCYElement} tcy
 * @param {XML} parentXML
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportTCY = function(tcy, parentXML) {
  var /** @type {XML} */ xml = new XML( '<TCY/>');
  this.exportSubParagraphElement(tcy, xml, parentXML);
};


/** Export a SubParagraphGroupElement
 * @asprivate
 * @export
 * @param {org.apache.royale.textLayout.elements.SubParagraphGroupElement} spge
 * @param {XML} parentXML
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportSPGE = function(spge, parentXML) {
  var /** @type {XML} */ xml = spge.typeName != spge.defaultTypeName ? new XML( '<' + spge.typeName + '/> ') : new XML( '<SPAN/>');
  this.exportSubParagraphElement(spge, xml, parentXML, false);
};


/**
 * @export
 * @param {org.apache.royale.textLayout.elements.SubParagraphGroupElementBase} elem
 * @param {XML} xml
 * @param {XML} parentXML
 * @param {boolean=} checkTypeName
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportSubParagraphElement = function(elem, xml, parentXML, checkTypeName) {
  checkTypeName = typeof checkTypeName !== 'undefined' ? checkTypeName : true;
  org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.exportStyling(elem, xml);
  this.exportSubParagraphChildren(elem, xml);
  var /** @type {org.apache.royale.textLayout.formats.ITextLayoutFormat} */ format = elem.computedFormat;
  var /** @type {org.apache.royale.textLayout.formats.ITextLayoutFormat} */ ifDifferentFromFormat = elem.parent.computedFormat;
  var /** @type {XML} */ font = this.exportFont(format, ifDifferentFromFormat);
  var /** @type {XML} */ childXML = font ? org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.nest(font, xml) : xml;
  if (checkTypeName && elem.typeName != elem.defaultTypeName) {
    var /** @type {XML} */ typeNameXML = new XML( '<' + elem.typeName + '/>');
    typeNameXML.appendChild(childXML);
    parentXML.appendChild(typeNameXML);
  }
  else
    parentXML.appendChild(childXML);
};


/**
 * @export
 * @nocollapse
 * @const
 * @type {RegExp}
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.brRegEx = /\u2028/;


/** Gets the xml element used to represent a character in the export format
 * @asprivate
 * @export
 * @param {string} ch
 * @return {XML}
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.getSpanTextReplacementXML = function(ch) {
  
  return new XML( '<BR/>');
};


/** Export a span
 * @asprivate
 * @export
 * @param {org.apache.royale.textLayout.elements.SpanElement} span
 * @param {XML} parentXML
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportSpan = function(span, parentXML) {
  var /** @type {XML} */ xml = org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.makeTaggedTypeName(span, "SPAN");
  org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.exportStyling(span, xml);
  org.apache.royale.textLayout.conversion.BaseTextLayoutExporter.exportSpanText(xml, span, org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.brRegEx, org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.getSpanTextReplacementXML);
  if (span.id == null && span.styleName == null && span.typeName == span.defaultTypeName) {
    var /** @type {Object} */ children = xml.children();
    if (children.length() == 1 && children[0].nodeKind() == "text")
      children = xml.text()[0];
    parentXML.appendChild(this.exportSpanFormat(children, span));
  }
  else
    parentXML.appendChild(this.exportSpanFormat(xml, span));
};


/** Export an inline graphic
 * @asprivate
 * @export
 * @param {org.apache.royale.textLayout.elements.InlineGraphicElement} image
 * @param {XML} parentXML
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportImage = function(image, parentXML) {
  var /** @type {XML} */ xml = new XML( '<IMG/>');
  org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.exportStyling(image, xml);
  if (image.source)
    xml.setAttribute('SRC', image.source);
  if (image.width !== undefined && image.width != org.apache.royale.textLayout.formats.FormatValue.AUTO)
    xml.setAttribute('WIDTH', image.width);
  if (image.height !== undefined && image.height != org.apache.royale.textLayout.formats.FormatValue.AUTO)
    xml.setAttribute('HEIGHT', image.height);
  if (image.computedFloat != org.apache.royale.textLayout.formats.Float.NONE)
    xml.setAttribute('ALIGN', image.float);
  if (image.typeName != image.defaultTypeName) {
    var /** @type {XML} */ typeNameXML = new XML( '<' + image.typeName + '/>');
    typeNameXML.appendChild(xml);
    parentXML.appendChild(typeNameXML);
  }
  else
    parentXML.appendChild(xml);
};


/** Export a break
 * Is this ever called: BreakElements are either merged with adjacent spans or become spans? 
 * @asprivate
 * @export
 * @param {org.apache.royale.textLayout.elements.BreakElement} breakElement
 * @param {XML} parentXML
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportBreak = function(breakElement, parentXML) {
  parentXML.appendChild(new XML( '<BR/>'));
};


/** Export a tab
 * Is this ever called: TabElements are either merged with adjacent spans or become spans? 
 * @asprivate
 * @export
 * @param {org.apache.royale.textLayout.elements.TabElement} tabElement
 * @param {XML} parentXML
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportTab = function(tabElement, parentXML) {
  this.exportSpan(tabElement, parentXML);
};


/** @asprivate 
 * @export
 * @param {XML} textFormatXML
 * @param {string} attrName
 * @param {*} attrVal
 * @return {XML}
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportTextFormatAttribute = function(textFormatXML, attrName, attrVal) {
  if (!textFormatXML)
    textFormatXML = new XML( '<TEXTFORMAT/>');
  return textFormatXML;
};


/** Exports the paragraph-level format for a paragraph  
 * @asparam xml xml to decorate with attributes or add nest in formatting elements
 * @para the paragraph
 * @asreturn XML	the outermost XML element after exporting 
 * @asprivate
 * @export
 * @param {XML} xml
 * @param {org.apache.royale.textLayout.elements.IParagraphElement} para
 * @return {XML}
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportParagraphFormat = function(xml, para) {
  var /** @type {org.apache.royale.textLayout.formats.ITextLayoutFormat} */ paraFormat = para.computedFormat;
  var /** @type {string} */ textAlignment;
  switch (paraFormat.textAlign) {
    case org.apache.royale.textLayout.formats.TextAlign.START:
      textAlignment = (paraFormat.direction == org.apache.royale.textLayout.formats.Direction.LTR) ? org.apache.royale.textLayout.formats.TextAlign.LEFT : org.apache.royale.textLayout.formats.TextAlign.RIGHT;
      break;
    case org.apache.royale.textLayout.formats.TextAlign.END:
      textAlignment = (paraFormat.direction == org.apache.royale.textLayout.formats.Direction.LTR) ? org.apache.royale.textLayout.formats.TextAlign.RIGHT : org.apache.royale.textLayout.formats.TextAlign.LEFT;
      break;
    default:
      textAlignment = org.apache.royale.utils.Language.string(paraFormat.textAlign);
  }
  xml.setAttribute('ALIGN', textAlignment);
  var /** @type {XML} */ textFormat;
  if (paraFormat.paragraphStartIndent != 0)
    textFormat = this.exportTextFormatAttribute(textFormat, paraFormat.direction == org.apache.royale.textLayout.formats.Direction.LTR ? "LEFTMARGIN" : "RIGHTMARGIN", paraFormat.paragraphStartIndent);
  if (paraFormat.paragraphEndIndent != 0)
    textFormat = this.exportTextFormatAttribute(textFormat, paraFormat.direction == org.apache.royale.textLayout.formats.Direction.LTR ? "RIGHTMARGIN" : "LEFTMARGIN", paraFormat.paragraphEndIndent);
  if (paraFormat.textIndent != 0)
    textFormat = this.exportTextFormatAttribute(textFormat, "INDENT", paraFormat.textIndent);
  if (paraFormat.leadingModel == org.apache.royale.textLayout.formats.LeadingModel.APPROXIMATE_TEXT_FIELD) {
    var /** @type {org.apache.royale.textLayout.elements.IFlowLeafElement} */ firstLeaf = para.getFirstLeaf();
    if (firstLeaf) {
      var /** @type {number} */ lineHeight = org.apache.royale.textLayout.formats.TextLayoutFormat["lineHeightProperty"].computeActualPropertyValue(firstLeaf.computedFormat.lineHeight, firstLeaf.getEffectiveFontSize());
      if (lineHeight != 0)
        textFormat = this.exportTextFormatAttribute(textFormat, "LEADING", lineHeight);
    }
  }
  var /** @type {Array} */ tabStops = paraFormat.tabStops;
  if (tabStops) {
    var /** @type {string} */ tabStopsString = "";
    var foreachiter0_target = tabStops;
    for (var foreachiter0 in foreachiter0_target) 
    {
    var tabStop = foreachiter0_target[foreachiter0];
    {
      if (tabStop.alignment != org.apache.royale.text.engine.TabAlignment.START)
        break;
      if (tabStopsString.length)
        tabStopsString += ", ";
      tabStopsString += org.apache.royale.utils.Language.string(tabStop.position);
    }}
    
    if (tabStopsString.length)
      textFormat = this.exportTextFormatAttribute(textFormat, "TABSTOPS", tabStopsString);
  }
  return textFormat ? org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.nest(textFormat, xml) : xml;
};


/** Exports the character-level format for a span  
 * @asparam xml xml/xmlList to nest in formatting elements
 * @span the span
 * @asreturn XML	the outermost XML element after exporting 
 * @asprivate
 * @export
 * @param {Object} xml
 * @param {org.apache.royale.textLayout.elements.SpanElement} span
 * @return {Object}
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportSpanFormat = function(xml, span) {
  var /** @type {org.apache.royale.textLayout.formats.ITextLayoutFormat} */ format = span.computedFormat;
  var /** @type {Object} */ outerElement = xml;
  if (format.textDecoration.toString() == org.apache.royale.textLayout.formats.TextDecoration.UNDERLINE)
    outerElement = org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.nest(new XML( '<U/>'), outerElement);
  var /** @type {org.apache.royale.textLayout.elements.IFlowElement} */ exportedParent = span.getParentByType("LinkElement");
  if (!exportedParent)
    exportedParent = span.getParagraph();
  var /** @type {XML} */ font = this.exportFont(format, exportedParent.computedFormat);
  if (font)
    outerElement = org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.nest(font, outerElement);
  return outerElement;
};


/** @asprivate 
 * @export
 * @param {XML} fontXML
 * @param {string} attrName
 * @param {*} attrVal
 * @return {XML}
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportFontAttribute = function(fontXML, attrName, attrVal) {
  if (!fontXML)
    fontXML = new XML( '<FONT/>');
  return fontXML;
};


/**  
 * Exports certain character level formats as a <FONT/> with appropriate attributes
 * @asparam format format to export
 * @asparam ifDifferentFromFormat if non-null, a value in format is exported only if it differs from the corresponding value in ifDifferentFromFormat
 * @asreturn XML	the populated XML element
 * @asprivate
 * @export
 * @param {org.apache.royale.textLayout.formats.ITextLayoutFormat} format
 * @param {org.apache.royale.textLayout.formats.ITextLayoutFormat=} ifDifferentFromFormat
 * @return {XML}
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportFont = function(format, ifDifferentFromFormat) {
  ifDifferentFromFormat = typeof ifDifferentFromFormat !== 'undefined' ? ifDifferentFromFormat : null;
  var /** @type {XML} */ font;
  if (!ifDifferentFromFormat || ifDifferentFromFormat.fontFamily != format.fontFamily)
    font = this.exportFontAttribute(font, "FACE", format.fontFamily);
  if (!ifDifferentFromFormat || ifDifferentFromFormat.fontSize != format.fontSize)
    font = this.exportFontAttribute(font, "SIZE", format.fontSize);
  if (!ifDifferentFromFormat || ifDifferentFromFormat.color != format.color) {
    var /** @type {string} */ rgb = format.color.toString(16);
    while (rgb.length < 6)
      rgb = "0" + rgb;
    rgb = "#" + rgb;
    font = this.exportFontAttribute(font, "COLOR", rgb);
  }
  if (!ifDifferentFromFormat || ifDifferentFromFormat.trackingRight != format.trackingRight)
    font = this.exportFontAttribute(font, "LETTERSPACING", format.trackingRight);
  if (!ifDifferentFromFormat || ifDifferentFromFormat.kerning != format.kerning)
    font = this.exportFontAttribute(font, "KERNING", format.kerning == org.apache.royale.text.engine.Kerning.OFF ? "0" : "1");
  return font;
};


/** Exports the flow element by finding the appropriate exporter
 * @asparam flowElement	Element to export
 * @asreturn Object	XML/XMLList for the flowElement
 * @asprivate
 * @export
 * @param {org.apache.royale.textLayout.elements.IFlowElement} flowElement
 * @param {XML} parentXML
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportElement = function(flowElement, parentXML) {
  var /** @type {string} */ className = org.apache.royale.reflection.getQualifiedClassName(flowElement);
  var /** @type {org.apache.royale.textLayout.conversion.FlowElementInfo} */ info = org.apache.royale.textLayout.conversion.TextFieldHtmlExporter._config.lookupByClass(className);
  if (info)
    info.exporter(flowElement, parentXML); else {
    
    var /** @type {XML} */ xml = new XML( '<' + flowElement.typeName.toUpperCase() + '/>');
    this.exportChildren(flowElement, xml);
    parentXML.appendChild(xml);
  }
};


/** Exports the children of a flow group element
 * @asparam xml XML to append children to
 * @asparam flowGroupElement	the flow group element
 * @asprivate
 * @export
 * @param {org.apache.royale.textLayout.elements.IFlowGroupElement} flowGroupElement
 * @param {XML} parentXML
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.exportSubParagraphChildren = function(flowGroupElement, parentXML) {
  for (var /** @type {number} */ i = 0; i < flowGroupElement.numChildren; ++i) {
    this.exportElement(flowGroupElement.getChildAt(i), parentXML);
  }
};


/** Helper to establish a parent-child relationship between two xml elements
 * and return the parent
 * @asparam parent the intended parent
 * @asparam children the intended children (XML or XMLList)
 * @asreturn the parent
 * @asprivate
 * @export
 * @param {XML} parent
 * @param {Object} children
 * @return {XML}
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.nest = function(parent, children) {
  parent.setChildren(children);
  return parent;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TextFieldHtmlExporter', qName: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', kind: 'class' }], interfaces: [org.apache.royale.textLayout.conversion.ITextExporter] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        '|_config': { type: 'org.apache.royale.textLayout.conversion.ImportExportConfiguration', get_set: function (/** * */ v) {return v !== undefined ? org.apache.royale.textLayout.conversion.TextFieldHtmlExporter._config = v : org.apache.royale.textLayout.conversion.TextFieldHtmlExporter._config;}}
      };
    },
    methods: function () {
      return {
        'TextFieldHtmlExporter': { type: '', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter'},
        'export': { type: 'Object', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.ITextFlow', false ,'String', false ]; }},
        'exportToXML': { type: 'XML', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.ITextFlow', false ]; }},
        '|makeTaggedTypeName': { type: 'XML', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IFlowElement', false ,'String', false ]; }},
        '|exportStyling': { type: 'void', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IFlowElement', false ,'XML', false ]; }},
        'exportChildren': { type: 'void', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IFlowGroupElement', false ,'XML', false ]; }},
        'exportList': { type: 'void', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IListElement', false ,'XML', false ]; }},
        'exportListItem': { type: 'void', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.ListItemElement', false ,'XML', false ]; }},
        'exportDiv': { type: 'void', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.DivElement', false ,'XML', false ]; }},
        'exportParagraph': { type: 'void', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IParagraphElement', false ,'XML', false ]; }},
        'exportLink': { type: 'void', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.LinkElement', false ,'XML', false ]; }},
        'exportTCY': { type: 'void', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.TCYElement', false ,'XML', false ]; }},
        'exportSPGE': { type: 'void', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.SubParagraphGroupElement', false ,'XML', false ]; }},
        'exportSubParagraphElement': { type: 'void', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.SubParagraphGroupElementBase', false ,'XML', false ,'XML', false ,'Boolean', true ]; }},
        '|getSpanTextReplacementXML': { type: 'XML', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'String', false ]; }},
        'exportSpan': { type: 'void', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.SpanElement', false ,'XML', false ]; }},
        'exportImage': { type: 'void', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.InlineGraphicElement', false ,'XML', false ]; }},
        'exportBreak': { type: 'void', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.BreakElement', false ,'XML', false ]; }},
        'exportTab': { type: 'void', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.TabElement', false ,'XML', false ]; }},
        'exportTextFormatAttribute': { type: 'XML', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'XML', false ,'String', false ,'*', false ]; }},
        'exportParagraphFormat': { type: 'XML', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'XML', false ,'org.apache.royale.textLayout.elements.IParagraphElement', false ]; }},
        'exportSpanFormat': { type: 'Object', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'Object', false ,'org.apache.royale.textLayout.elements.SpanElement', false ]; }},
        'exportFontAttribute': { type: 'XML', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'XML', false ,'String', false ,'*', false ]; }},
        'exportFont': { type: 'XML', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.formats.ITextLayoutFormat', false ,'org.apache.royale.textLayout.formats.ITextLayoutFormat', true ]; }},
        'exportElement': { type: 'void', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IFlowElement', false ,'XML', false ]; }},
        'exportSubParagraphChildren': { type: 'void', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IFlowGroupElement', false ,'XML', false ]; }},
        '|nest': { type: 'XML', declaredBy: 'org.apache.royale.textLayout.conversion.TextFieldHtmlExporter', parameters: function () { return [ 'XML', false ,'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.conversion.TextFieldHtmlExporter.prototype.ROYALE_COMPILE_FLAGS = 10;
