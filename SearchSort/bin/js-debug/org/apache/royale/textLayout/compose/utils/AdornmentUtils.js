/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/compose/utils/AdornmentUtils.as
 * org.apache.royale.textLayout.compose.utils.AdornmentUtils
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.compose.utils.AdornmentUtils');
/* Royale Dependency List: org.apache.royale.core.IParentIUIBase,org.apache.royale.core.IUIBase,org.apache.royale.geom.Rectangle,org.apache.royale.graphics.ICompoundGraphic,org.apache.royale.graphics.PathBuilder,org.apache.royale.graphics.SolidColor,org.apache.royale.graphics.SolidColorStroke,org.apache.royale.text.engine.FontMetrics,org.apache.royale.text.engine.ITextLine,org.apache.royale.text.engine.TextBaseline,org.apache.royale.text.engine.TextRotation,org.apache.royale.textLayout.compose.ITextFlowLine,org.apache.royale.textLayout.dummy.BoundsUtil,org.apache.royale.textLayout.elements.IFlowElement,org.apache.royale.textLayout.elements.IFlowLeafElement,org.apache.royale.textLayout.elements.IInlineGraphicElement,org.apache.royale.textLayout.elements.IParagraphElement,org.apache.royale.textLayout.elements.ISubParagraphGroupElementBase,org.apache.royale.textLayout.elements.ITCYElement,org.apache.royale.textLayout.elements.ITextFlow,org.apache.royale.textLayout.elements.InlineGraphicElementStatus,org.apache.royale.textLayout.elements.utils.GeometricElementUtils,org.apache.royale.textLayout.formats.BackgroundColor,org.apache.royale.textLayout.formats.BaselineShift,org.apache.royale.textLayout.formats.BlockProgression,org.apache.royale.textLayout.formats.Float,org.apache.royale.textLayout.formats.IMEStatus,org.apache.royale.textLayout.formats.JustificationRule,org.apache.royale.textLayout.formats.TextDecoration,org.apache.royale.textLayout.formats.TextLayoutFormat,org.apache.royale.textLayout.utils.CharacterUtil,org.apache.royale.utils.Language,XML*/




/**
 * @constructor
 */
org.apache.royale.textLayout.compose.utils.AdornmentUtils = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.compose.utils.AdornmentUtils', org.apache.royale.textLayout.compose.utils.AdornmentUtils);


/** @asprivate 
 * @export
 * @param {org.apache.royale.textLayout.elements.IFlowLeafElement} element
 * @param {org.apache.royale.text.engine.ITextLine} textLine
 * @param {string} blockProgression
 * @return {Array}
 */
org.apache.royale.textLayout.compose.utils.AdornmentUtils.getSpanBoundsOnLine = function(element, textLine, blockProgression) {
  var /** @type {org.apache.royale.textLayout.compose.ITextFlowLine} */ line = textLine.userData;
  var /** @type {number} */ paraStart = line.paragraph.getAbsoluteStart();
  var /** @type {number} */ lineEnd = ((line.absoluteStart + line.textLength) - paraStart) >> 0;
  var /** @type {number} */ spanStart = (element.getAbsoluteStart() - paraStart) >> 0;
  var /** @type {number} */ endPos = (spanStart + element.text.length) >> 0;
  var /** @type {number} */ startPos = (Math.max(spanStart, line.absoluteStart - paraStart)) >> 0;
  if (endPos >= lineEnd) {
    endPos = lineEnd;
    var /** @type {string} */ spanText = element.text;
    while (endPos > startPos && org.apache.royale.textLayout.utils.CharacterUtil.isWhitespace((spanText.charCodeAt(endPos - spanStart - 1)) >> 0))
      --endPos;
  }
  var /** @type {Array} */ mainRects = [];
  line.calculateSelectionBounds(textLine, mainRects, startPos, endPos, blockProgression, [line.textHeight, 0]);
  return mainRects;
};


/** @asprivate 
 * @export
 * @param {org.apache.royale.textLayout.elements.IFlowLeafElement} element
 * @param {org.apache.royale.text.engine.ITextLine} textLine
 * @param {string} blockProgression
 * @param {org.apache.royale.text.engine.FontMetrics} metrics
 * @return {number}
 */
org.apache.royale.textLayout.compose.utils.AdornmentUtils.calculateStrikeThrough = function(element, textLine, blockProgression, metrics) {
  if (element.className == "InlineGraphicElement" && org.apache.royale.utils.Language.as(element, org.apache.royale.textLayout.elements.IInlineGraphicElement, true).graphic && org.apache.royale.utils.Language.as(element, org.apache.royale.textLayout.elements.IInlineGraphicElement, true).status == org.apache.royale.textLayout.elements.InlineGraphicElementStatus.READY)
    return org.apache.royale.textLayout.compose.utils.AdornmentUtils.calculateGraphicStrikeThrough(org.apache.royale.utils.Language.as(element, org.apache.royale.textLayout.elements.IInlineGraphicElement, true), textLine, blockProgression, metrics);
  else
    return org.apache.royale.textLayout.compose.utils.AdornmentUtils.calculateLeafStrikeThrough(element, textLine, blockProgression, metrics);
};


/**
 * @royaleignorecoercion org.apache.royale.core.IParentIUIBase
 * @royaleignorecoercion org.apache.royale.textLayout.compose.ITextFlowLine
 * @private
 * @param {org.apache.royale.textLayout.elements.IInlineGraphicElement} element
 * @param {org.apache.royale.text.engine.ITextLine} textLine
 * @param {string} blockProgression
 * @param {org.apache.royale.text.engine.FontMetrics} metrics
 * @return {number}
 */
org.apache.royale.textLayout.compose.utils.AdornmentUtils.calculateGraphicStrikeThrough = function(element, textLine, blockProgression, metrics) {
  var /** @type {number} */ stOffset = 0;
  var /** @type {Object} */ inlineHolder = element.placeholderGraphic.parent;
  if (inlineHolder) {
    if (blockProgression != org.apache.royale.textLayout.formats.BlockProgression.RL)
      stOffset = Number(org.apache.royale.utils.Language.resolveUncertain(Object(element.placeholderGraphic.parent)).y + (element.elementHeight / 2 + Number(element.getEffectivePaddingTop()))); else {
      var /** @type {number} */ paddingRight = element.getEffectivePaddingRight();
      var /** @type {Object} */ line = textLine.userData;
      var /** @type {number} */ elemIdx = (element.getAbsoluteStart() - line.absoluteStart) >> 0;
      if (textLine.getAtomTextRotation(elemIdx) != org.apache.royale.text.engine.TextRotation.ROTATE_0)
        stOffset = org.apache.royale.utils.Language.resolveUncertain(Object(element.placeholderGraphic.parent)).x - (element.elementHeight / 2 + paddingRight);
      else
        stOffset = org.apache.royale.utils.Language.resolveUncertain(Object(element.placeholderGraphic.parent)).x - (element.elementWidth / 2 + paddingRight);
    }
  }
  return blockProgression == org.apache.royale.textLayout.formats.BlockProgression.TB ? stOffset : -stOffset;
};


/**
 * @private
 * @param {org.apache.royale.textLayout.elements.IFlowLeafElement} element
 * @param {org.apache.royale.text.engine.ITextLine} textLine
 * @param {string} blockProgression
 * @param {org.apache.royale.text.engine.FontMetrics} metrics
 * @return {number}
 */
org.apache.royale.textLayout.compose.utils.AdornmentUtils.calculateLeafStrikeThrough = function(element, textLine, blockProgression, metrics) {
  var /** @type {number} */ underlineAndStrikeThroughShift = 0;
  var /** @type {number} */ effectiveFontSize = element.getEffectiveFontSize();
  if (element.computedFormat.baselineShift == org.apache.royale.textLayout.formats.BaselineShift.SUPERSCRIPT) {
    underlineAndStrikeThroughShift = (-(metrics.superscriptOffset * effectiveFontSize)) >> 0;
  } else if (element.computedFormat.baselineShift == org.apache.royale.textLayout.formats.BaselineShift.SUBSCRIPT) {
    underlineAndStrikeThroughShift = (-(metrics.subscriptOffset * (effectiveFontSize / metrics.subscriptScale))) >> 0;
  } else {
    underlineAndStrikeThroughShift = (org.apache.royale.textLayout.formats.TextLayoutFormat["baselineShiftProperty"].computeActualPropertyValue(element.computedFormat.baselineShift, effectiveFontSize)) >> 0;
  }
  var /** @type {string} */ domBaselineString = org.apache.royale.textLayout.elements.utils.GeometricElementUtils.resolveDomBaseline(element.computedFormat, element.getParagraph());
  var /** @type {string} */ alignmentBaselineString = org.apache.royale.utils.Language.string(element.computedFormat.alignmentBaseline);
  var /** @type {number} */ alignDomBaselineAdjustment = textLine.getBaselinePosition(domBaselineString);
  if (alignmentBaselineString != org.apache.royale.text.engine.TextBaseline.USE_DOMINANT_BASELINE && alignmentBaselineString != domBaselineString) {
    alignDomBaselineAdjustment = textLine.getBaselinePosition(alignmentBaselineString);
  }
  var /** @type {number} */ stOffset = metrics.strikethroughOffset;
  if (domBaselineString == org.apache.royale.text.engine.TextBaseline.IDEOGRAPHIC_CENTER) {
    stOffset = 0;
  } else if (domBaselineString == org.apache.royale.text.engine.TextBaseline.IDEOGRAPHIC_TOP || domBaselineString == org.apache.royale.text.engine.TextBaseline.ASCENT) {
    stOffset *= -2;
    stOffset -= (2 * metrics.strikethroughThickness);
  } else if (domBaselineString == org.apache.royale.text.engine.TextBaseline.IDEOGRAPHIC_BOTTOM || domBaselineString == org.apache.royale.text.engine.TextBaseline.DESCENT) {
    stOffset *= 2;
    stOffset += (2 * metrics.strikethroughThickness);
  } else {
    stOffset -= metrics.strikethroughThickness;
  }
  stOffset += (alignDomBaselineAdjustment - underlineAndStrikeThroughShift);
  return stOffset;
};


/** @asprivate return number of shapes added 
 * @export
 * @param {org.apache.royale.textLayout.elements.IFlowLeafElement} element
 * @param {org.apache.royale.text.engine.ITextLine} tLine
 * @param {string} blockProgression
 * @return {number}
 */
org.apache.royale.textLayout.compose.utils.AdornmentUtils.updateAdornments = function(element, tLine, blockProgression) {
  
  if (element.className == "InlineGraphicElement" && org.apache.royale.utils.Language.resolveUncertain(Object(element)).effectiveFloat != org.apache.royale.textLayout.formats.Float.NONE)
    return 0;
  if (element.className == "TableLeafElement")
    return 0;
  if (element.computedFormat.textDecoration == org.apache.royale.textLayout.formats.TextDecoration.UNDERLINE || element.computedFormat.lineThrough || element.computedFormat.backgroundAlpha > 0 && element.computedFormat.backgroundColor != org.apache.royale.textLayout.formats.BackgroundColor.TRANSPARENT) {
    var /** @type {Array} */ spanBoundsArray = org.apache.royale.textLayout.compose.utils.AdornmentUtils.getSpanBoundsOnLine(element, tLine, blockProgression);
    for (var /** @type {number} */ i = 0; i < spanBoundsArray.length; i++)
      org.apache.royale.textLayout.compose.utils.AdornmentUtils.updateAdornmentsOnBounds(element, tLine, blockProgression, spanBoundsArray[i]);
    return (spanBoundsArray.length) >> 0;
  }
  return 0;
};


/**
 * @royaleignorecoercion org.apache.royale.textLayout.elements.IParagraphElement
 * @private
 * @param {org.apache.royale.textLayout.elements.IFlowLeafElement} element
 * @param {org.apache.royale.text.engine.ITextLine} tLine
 * @param {string} blockProgression
 * @param {org.apache.royale.geom.Rectangle} spanBounds
 */
org.apache.royale.textLayout.compose.utils.AdornmentUtils.updateAdornmentsOnBounds = function(element, tLine, blockProgression, spanBounds) {
  
  var /** @type {org.apache.royale.text.engine.FontMetrics} */ metrics = element.getComputedFontMetrics();
  var /** @type {boolean} */ backgroundOnly = !(element.computedFormat.textDecoration == org.apache.royale.textLayout.formats.TextDecoration.UNDERLINE || element.computedFormat.lineThrough);
  if (!backgroundOnly) {
    var /** @type {org.apache.royale.graphics.ICompoundGraphic} */ shape;
    shape = element.getTextFlow().tlfFactory.getCompoundGraphic();
    shape.alpha = Number(element.computedFormat.textAlpha);
    var /** @type {org.apache.royale.graphics.PathBuilder} */ builder = new org.apache.royale.graphics.PathBuilder();
    shape.stroke = new org.apache.royale.graphics.SolidColorStroke();
    var /** @type {number} */ stOffset = org.apache.royale.textLayout.compose.utils.AdornmentUtils.calculateStrikeThrough(element, tLine, blockProgression, metrics);
    var /** @type {number} */ ulOffset = org.apache.royale.textLayout.compose.utils.AdornmentUtils.calculateUnderlineOffset(element, stOffset, blockProgression, metrics, tLine);
    var /** @type {number} */ offset = tLine.getAdornmentOffsetBase();
    ulOffset += offset;
    stOffset += offset;
  }
  if (blockProgression != org.apache.royale.textLayout.formats.BlockProgression.RL) {
    org.apache.royale.textLayout.compose.utils.AdornmentUtils.addBackgroundRect(element, tLine, metrics, spanBounds, true);
    if (element.computedFormat.textDecoration == org.apache.royale.textLayout.formats.TextDecoration.UNDERLINE) {
      shape.stroke.setLineStyle(metrics.underlineThickness, (element.computedFormat.color) >>> 0);
      builder.moveTo(spanBounds.topLeft.x, ulOffset);
      builder.lineTo(spanBounds.topLeft.x + spanBounds.width, ulOffset);
      shape.drawPathCommands(builder);
      builder.clear();
    }
    if ((element.computedFormat.lineThrough)) {
      shape.stroke.setLineStyle(metrics.strikethroughThickness, (element.computedFormat.color) >>> 0);
      builder.moveTo(spanBounds.topLeft.x, stOffset);
      builder.lineTo(spanBounds.topLeft.x + spanBounds.width, stOffset);
      shape.drawPathCommands(builder);
      builder.clear();
    }
  } else {
    var /** @type {org.apache.royale.textLayout.compose.ITextFlowLine} */ line = tLine.userData;
    var /** @type {number} */ elemIdx = (element.getAbsoluteStart() - line.absoluteStart) >> 0;
    if (elemIdx < 0 || tLine.atomCount <= elemIdx || tLine.getAtomTextRotation(elemIdx) != org.apache.royale.text.engine.TextRotation.ROTATE_0) {
      org.apache.royale.textLayout.compose.utils.AdornmentUtils.addBackgroundRect(element, tLine, metrics, spanBounds, false);
      if (element.computedFormat.textDecoration == org.apache.royale.textLayout.formats.TextDecoration.UNDERLINE) {
        shape.stroke.setLineStyle(metrics.underlineThickness, (element.computedFormat.color) >>> 0);
        builder.moveTo(ulOffset, spanBounds.topLeft.y);
        builder.lineTo(ulOffset, spanBounds.topLeft.y + spanBounds.height);
        shape.drawPathCommands(builder);
        builder.clear();
      }
      if (element.computedFormat.lineThrough == true) {
        shape.stroke.setLineStyle(metrics.strikethroughThickness, (element.computedFormat.color) >>> 0);
        builder.moveTo(-stOffset, spanBounds.topLeft.y);
        builder.lineTo(-stOffset, spanBounds.topLeft.y + spanBounds.height);
        shape.drawPathCommands(builder);
        builder.clear();
      }
    } else {
      org.apache.royale.textLayout.compose.utils.AdornmentUtils.addBackgroundRect(element, tLine, metrics, spanBounds, true, true);
      if (!backgroundOnly) {
        var /** @type {org.apache.royale.textLayout.elements.ITCYElement} */ tcyParent = element.getParentByType("TCYElement");
        
        var /** @type {Object} */ tcyPara = element.getParentByType("ParagraphElement");
        var /** @type {string} */ lowerLocale = org.apache.royale.utils.Language.string(tcyPara.computedFormat.locale.toLowerCase());
        var /** @type {boolean} */ adornRight = (lowerLocale.indexOf("zh") != 0);
        if ((element.getAbsoluteStart() + element.textLength) == (tcyParent.getAbsoluteStart() + tcyParent.textLength)) {
          var /** @type {org.apache.royale.geom.Rectangle} */ tcyAdornBounds = new org.apache.royale.geom.Rectangle();
          org.apache.royale.textLayout.compose.utils.AdornmentUtils.calculateAdornmentBounds(tcyParent, tLine, blockProgression, tcyAdornBounds);
          if (element.computedFormat.textDecoration == org.apache.royale.textLayout.formats.TextDecoration.UNDERLINE) {
            shape.stroke.setLineStyle(metrics.underlineThickness, (element.computedFormat.color) >>> 0);
            var /** @type {number} */ baseULAdjustment = metrics.underlineOffset + (metrics.underlineThickness / 2);
            var /** @type {number} */ xCoor = adornRight ? spanBounds.right : spanBounds.left;
            if (!adornRight)
              baseULAdjustment = -baseULAdjustment;
            builder.moveTo(xCoor + baseULAdjustment, tcyAdornBounds.top);
            builder.lineTo(xCoor + baseULAdjustment, tcyAdornBounds.bottom);
            shape.drawPathCommands(builder);
            builder.clear();
          }
          if (element.computedFormat.lineThrough == true) {
            var /** @type {number} */ tcyMid = spanBounds.bottomRight.x - tcyAdornBounds.x;
            tcyMid /= 2;
            tcyMid += tcyAdornBounds.x;
            shape.stroke.setLineStyle(metrics.strikethroughThickness, (element.computedFormat.color) >>> 0);
            builder.moveTo(tcyMid, tcyAdornBounds.top);
            builder.lineTo(tcyMid, tcyAdornBounds.bottom);
            shape.drawPathCommands(builder);
            builder.clear();
          }
        }
      }
    }
  }
  if (shape) {
    var /** @type {org.apache.royale.text.engine.ITextLine} */ peekLine = tLine.userData.peekTextLine();
    
    if (peekLine && tLine != peekLine) {
      
      tLine = peekLine;
    }
    tLine.addElement(shape);
  }
};


/**
 * @royaleignorecoercion org.apache.royale.textLayout.compose.ITextFlowLine
 * @export
 * @param {org.apache.royale.textLayout.elements.IFlowLeafElement} element
 * @param {org.apache.royale.text.engine.ITextLine} tLine
 * @param {string} blockProgression
 * @param {string} imeStatus
 */
org.apache.royale.textLayout.compose.utils.AdornmentUtils.updateIMEAdornments = function(element, tLine, blockProgression, imeStatus) {
  if (element.className == "InlineGraphicElement" && org.apache.royale.utils.Language.resolveUncertain(Object(element)).effectiveFloat != org.apache.royale.textLayout.formats.Float.NONE)
    return;
  if (element.className == "TableLeafElement")
    return;
  var /** @type {org.apache.royale.text.engine.FontMetrics} */ metrics = element.getComputedFontMetrics();
  var /** @type {Array} */ spanBoundsArray = org.apache.royale.textLayout.compose.utils.AdornmentUtils.getSpanBoundsOnLine(element, tLine, blockProgression);
  for (var /** @type {number} */ i = 0; i < spanBoundsArray.length; i++) {
    var /** @type {number} */ imeLineThickness = 1;
    var /** @type {number} */ imeLineColor = 0x0;
    var /** @type {number} */ imeLineStartX = 0;
    var /** @type {number} */ imeLineStartY = 0;
    var /** @type {number} */ imeLineEndX = 0;
    var /** @type {number} */ imeLineEndY = 0;
    if (imeStatus == org.apache.royale.textLayout.formats.IMEStatus.SELECTED_CONVERTED || imeStatus == org.apache.royale.textLayout.formats.IMEStatus.SELECTED_RAW) {
      imeLineThickness = 2;
    }
    if (imeStatus == org.apache.royale.textLayout.formats.IMEStatus.SELECTED_RAW || imeStatus == org.apache.royale.textLayout.formats.IMEStatus.NOT_SELECTED_RAW || imeStatus == org.apache.royale.textLayout.formats.IMEStatus.DEAD_KEY_INPUT_STATE) {
      imeLineColor = 0xa6a6a6;
    }
    var /** @type {org.apache.royale.geom.Rectangle} */ spanBounds = spanBoundsArray[i];
    var /** @type {number} */ stOffset = org.apache.royale.textLayout.compose.utils.AdornmentUtils.calculateStrikeThrough(element, tLine, blockProgression, metrics);
    var /** @type {number} */ ulOffset = org.apache.royale.textLayout.compose.utils.AdornmentUtils.calculateUnderlineOffset(element, stOffset, blockProgression, metrics, tLine);
    if (blockProgression != org.apache.royale.textLayout.formats.BlockProgression.RL) {
      imeLineStartX = spanBounds.topLeft.x + 1;
      imeLineEndX = spanBounds.topLeft.x + spanBounds.width - 1;
      imeLineStartY = ulOffset;
      imeLineEndY = ulOffset;
    } else {
      var /** @type {Object} */ line = tLine.userData;
      var /** @type {number} */ elemIdx = (element.getAbsoluteStart() - line.absoluteStart) >> 0;
      imeLineStartY = spanBounds.topLeft.y + 1;
      imeLineEndY = spanBounds.topLeft.y + spanBounds.height - 1;
      if (elemIdx < 0 || tLine.atomCount <= elemIdx || tLine.getAtomTextRotation(elemIdx) != org.apache.royale.text.engine.TextRotation.ROTATE_0) {
        imeLineStartX = ulOffset;
        imeLineEndX = ulOffset;
      } else {
        var /** @type {org.apache.royale.textLayout.elements.ITCYElement} */ tcyParent = element.getParentByType("TCYElement");
        
        if ((element.getAbsoluteStart() + element.textLength) == (tcyParent.getAbsoluteStart() + tcyParent.textLength)) {
          var /** @type {org.apache.royale.geom.Rectangle} */ tcyAdornBounds = new org.apache.royale.geom.Rectangle();
          org.apache.royale.textLayout.compose.utils.AdornmentUtils.calculateAdornmentBounds(tcyParent, tLine, blockProgression, tcyAdornBounds);
          var /** @type {number} */ baseULAdjustment = metrics.underlineOffset + (metrics.underlineThickness / 2);
          imeLineStartY = tcyAdornBounds.top + 1;
          imeLineEndY = tcyAdornBounds.bottom - 1;
          imeLineStartX = spanBounds.bottomRight.x + baseULAdjustment;
          imeLineEndX = spanBounds.bottomRight.x + baseULAdjustment;
        }
      }
    }
    var /** @type {org.apache.royale.graphics.ICompoundGraphic} */ selObj = element.getTextFlow().tlfFactory.getCompoundGraphic();
    selObj.alpha = 1;
    selObj.fill = new org.apache.royale.graphics.SolidColor(imeLineColor);
    selObj.stroke = new org.apache.royale.graphics.SolidColorStroke(imeLineColor, imeLineThickness, selObj.alpha);
    var /** @type {org.apache.royale.graphics.PathBuilder} */ builder = new org.apache.royale.graphics.PathBuilder(true);
    builder.moveTo(imeLineStartX, imeLineStartY);
    builder.lineTo(imeLineEndX, imeLineEndY);
    selObj.drawPathCommands(builder);
    tLine.addElement(selObj);
  }
};


/**
 * @export
 * @param {org.apache.royale.textLayout.elements.IFlowLeafElement} element
 * @param {number} stOffset
 * @param {string} blockProgression
 * @param {org.apache.royale.text.engine.FontMetrics} metrics
 * @param {org.apache.royale.text.engine.ITextLine} textLine
 * @return {number}
 */
org.apache.royale.textLayout.compose.utils.AdornmentUtils.calculateUnderlineOffset = function(element, stOffset, blockProgression, metrics, textLine) {
  if (element.className == "InlineGraphicElement" && org.apache.royale.utils.Language.as(element, org.apache.royale.textLayout.elements.IInlineGraphicElement, true).graphic && org.apache.royale.utils.Language.as(element, org.apache.royale.textLayout.elements.IInlineGraphicElement, true).status == org.apache.royale.textLayout.elements.InlineGraphicElementStatus.READY)
    return org.apache.royale.textLayout.compose.utils.AdornmentUtils.calculateGraphicUnderlineOffset(org.apache.royale.utils.Language.as(element, org.apache.royale.textLayout.elements.IInlineGraphicElement, true), stOffset, blockProgression, metrics, textLine);
  else
    return org.apache.royale.textLayout.compose.utils.AdornmentUtils.calculateLeafUnderlineOffset(element, stOffset, blockProgression, metrics, textLine);
};


/**
 * @private
 * @param {org.apache.royale.textLayout.elements.IFlowLeafElement} element
 * @param {number} stOffset
 * @param {string} blockProgression
 * @param {org.apache.royale.text.engine.FontMetrics} metrics
 * @param {org.apache.royale.text.engine.ITextLine} textLine
 * @return {number}
 */
org.apache.royale.textLayout.compose.utils.AdornmentUtils.calculateLeafUnderlineOffset = function(element, stOffset, blockProgression, metrics, textLine) {
  var /** @type {number} */ ulOffset = metrics.underlineOffset + metrics.underlineThickness;
  var /** @type {number} */ baseSTAdjustment = metrics.strikethroughOffset;
  if (blockProgression != org.apache.royale.textLayout.formats.BlockProgression.RL)
    ulOffset += (stOffset - baseSTAdjustment) + metrics.underlineThickness / 2; else {
    var /** @type {org.apache.royale.textLayout.elements.IParagraphElement} */ para = element.getParagraph();
    if (para.computedFormat.locale.toLowerCase().indexOf("zh") == 0) {
      ulOffset = -ulOffset;
      ulOffset -= (stOffset - baseSTAdjustment + (metrics.underlineThickness * 2));
    }
    else
      ulOffset -= (-ulOffset + stOffset + baseSTAdjustment + (metrics.underlineThickness / 2));
  }
  return ulOffset;
};


/**
 *  @asprivate 
 *  @royaleignorecoercion org.apache.royale.core.IParentIUIBase
 * @private
 * @param {org.apache.royale.textLayout.elements.IInlineGraphicElement} element
 * @param {number} stOffset
 * @param {string} blockProgression
 * @param {org.apache.royale.text.engine.FontMetrics} metrics
 * @param {org.apache.royale.text.engine.ITextLine} tLine
 * @return {number}
 */
org.apache.royale.textLayout.compose.utils.AdornmentUtils.calculateGraphicUnderlineOffset = function(element, stOffset, blockProgression, metrics, tLine) {
  var /** @type {org.apache.royale.textLayout.elements.IParagraphElement} */ para = element.getParagraph();
  var /** @type {number} */ ulOffset = 0;
  var /** @type {Object} */ inlineHolder = element.placeholderGraphic.parent;
  if (inlineHolder) {
    if (blockProgression == org.apache.royale.textLayout.formats.BlockProgression.TB)
      ulOffset = inlineHolder.y + element.elementHeightWithMarginsAndPadding(); else {
      if (para.computedFormat.locale.toLowerCase().indexOf("zh") == 0) {
        ulOffset = inlineHolder.x - element.elementHeightWithMarginsAndPadding();
        ulOffset -= metrics.underlineOffset + (metrics.underlineThickness / 2);
        return ulOffset;
      }
      else
        ulOffset = inlineHolder.x - element.getEffectivePaddingLeft();
    }
  }
  ulOffset += metrics.underlineOffset + (metrics.underlineThickness / 2);
  var /** @type {string} */ justRule = para.getEffectiveJustificationRule();
  if (justRule == org.apache.royale.textLayout.formats.JustificationRule.EAST_ASIAN)
    ulOffset += 1;
  return ulOffset;
};


/** @asprivate
 * Adds the background rectangle (if needed), making adjustments for glyph shifting as appropriate
 * @private
 * @param {org.apache.royale.textLayout.elements.IFlowLeafElement} element
 * @param {org.apache.royale.text.engine.ITextLine} tLine
 * @param {org.apache.royale.text.engine.FontMetrics} metrics
 * @param {org.apache.royale.geom.Rectangle} spanBounds
 * @param {boolean} horizontalText
 * @param {boolean=} isTCY
 */
org.apache.royale.textLayout.compose.utils.AdornmentUtils.addBackgroundRect = function(element, tLine, metrics, spanBounds, horizontalText, isTCY) {
  isTCY = typeof isTCY !== 'undefined' ? isTCY : false;
  if (element.computedFormat.backgroundAlpha == 0 || element.computedFormat.backgroundColor == org.apache.royale.textLayout.formats.BackgroundColor.TRANSPARENT)
    return;
  var /** @type {org.apache.royale.textLayout.elements.ITextFlow} */ tf = element.getTextFlow();
  if (!tf.getBackgroundManager())
    return;
  var /** @type {org.apache.royale.geom.Rectangle} */ r = spanBounds.clone();
  if (!isTCY && (element.computedFormat.baselineShift == org.apache.royale.textLayout.formats.BaselineShift.SUPERSCRIPT || element.computedFormat.baselineShift == org.apache.royale.textLayout.formats.BaselineShift.SUBSCRIPT)) {
    var /** @type {number} */ desiredExtent;
    var /** @type {number} */ baselineShift;
    var /** @type {number} */ fontSize = element.getEffectiveFontSize();
    var /** @type {number} */ baseStrikethroughOffset = metrics.strikethroughOffset + metrics.strikethroughThickness / 2;
    if (element.computedFormat.baselineShift == org.apache.royale.textLayout.formats.BaselineShift.SUPERSCRIPT) {
      var /** @type {number} */ glyphAscent = -3 * baseStrikethroughOffset;
      baselineShift = -metrics.superscriptOffset * fontSize;
      var /** @type {number} */ lineDescent = tLine.getBaselinePosition(org.apache.royale.text.engine.TextBaseline.DESCENT) - tLine.getBaselinePosition(org.apache.royale.text.engine.TextBaseline.ROMAN);
      desiredExtent = glyphAscent + baselineShift + lineDescent;
      if (horizontalText) {
        if (desiredExtent > r.height) {
          r.y -= desiredExtent - r.height;
          r.height = desiredExtent;
        }
      } else {
        if (desiredExtent > r.width)
          r.width = desiredExtent;
      }
    } else {
      var /** @type {number} */ glyphDescent = -baseStrikethroughOffset;
      baselineShift = metrics.subscriptOffset * fontSize;
      var /** @type {number} */ lineAscent = tLine.getBaselinePosition(org.apache.royale.text.engine.TextBaseline.ROMAN) - tLine.getBaselinePosition(org.apache.royale.text.engine.TextBaseline.ASCENT);
      desiredExtent = lineAscent + baselineShift + glyphDescent;
      if (horizontalText) {
        if (desiredExtent > r.height)
          r.height = desiredExtent;
      } else {
        if (desiredExtent > r.width) {
          r.x -= desiredExtent - r.width;
          r.width = desiredExtent;
        }
      }
    }
  }
  tf.backgroundManager.addRect(tLine, element, r, (element.computedFormat.backgroundColor) >>> 0, Number(element.computedFormat.backgroundAlpha));
};


/**
 *  @asprivate
 *  @royaleignorecoercion org.apache.royale.core.IUIBase
 *  @royaleignorecoercion org.apache.royale.textLayout.elements.IFlowLeafElement
 * @export
 * @param {org.apache.royale.textLayout.elements.ISubParagraphGroupElementBase} spg
 * @param {org.apache.royale.text.engine.ITextLine} tLine
 * @param {string} blockProgression
 * @param {org.apache.royale.geom.Rectangle} spgRect
 */
org.apache.royale.textLayout.compose.utils.AdornmentUtils.calculateAdornmentBounds = function(spg, tLine, blockProgression, spgRect) {
  var /** @type {number} */ childCount = 0;
  while (childCount < spg.numChildren) {
    var /** @type {org.apache.royale.textLayout.elements.IFlowElement} */ curChild = spg.getChildAt(childCount);
    var /** @type {Object} */ curFlowLeaf = curChild;
    if (!curFlowLeaf && org.apache.royale.utils.Language.is(curChild, org.apache.royale.textLayout.elements.ISubParagraphGroupElementBase)) {
      org.apache.royale.textLayout.compose.utils.AdornmentUtils.calculateAdornmentBounds(curChild, tLine, blockProgression, spgRect);
      ++childCount;
      continue;
    }
    
    var /** @type {org.apache.royale.geom.Rectangle} */ curBounds = null;
    if (!org.apache.royale.utils.Language.is(curFlowLeaf, org.apache.royale.textLayout.elements.IInlineGraphicElement))
      curBounds = org.apache.royale.textLayout.compose.utils.AdornmentUtils.getSpanBoundsOnLine(curFlowLeaf, tLine, blockProgression)[0]; else {
      curBounds = org.apache.royale.textLayout.dummy.BoundsUtil.getBounds(curFlowLeaf, tLine);
    }
    if (childCount != 0) {
      if (curBounds.top < spgRect.top)
        spgRect.top = curBounds.top;
      if (curBounds.bottom > spgRect.bottom)
        spgRect.bottom = curBounds.bottom;
      if (spgRect.x > curBounds.x)
        spgRect.x = curBounds.x;
    } else {
      spgRect.top = curBounds.top;
      spgRect.bottom = curBounds.bottom;
      spgRect.x = curBounds.x;
    }
    ++childCount;
  }
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.compose.utils.AdornmentUtils.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'AdornmentUtils', qName: 'org.apache.royale.textLayout.compose.utils.AdornmentUtils', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.compose.utils.AdornmentUtils.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|getSpanBoundsOnLine': { type: 'Array', declaredBy: 'org.apache.royale.textLayout.compose.utils.AdornmentUtils', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IFlowLeafElement', false ,'org.apache.royale.text.engine.ITextLine', false ,'String', false ]; }},
        '|calculateStrikeThrough': { type: 'Number', declaredBy: 'org.apache.royale.textLayout.compose.utils.AdornmentUtils', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IFlowLeafElement', false ,'org.apache.royale.text.engine.ITextLine', false ,'String', false ,'org.apache.royale.text.engine.FontMetrics', false ]; }},
        '|updateAdornments': { type: 'int', declaredBy: 'org.apache.royale.textLayout.compose.utils.AdornmentUtils', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IFlowLeafElement', false ,'org.apache.royale.text.engine.ITextLine', false ,'String', false ]; }},
        '|updateIMEAdornments': { type: 'void', declaredBy: 'org.apache.royale.textLayout.compose.utils.AdornmentUtils', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IFlowLeafElement', false ,'org.apache.royale.text.engine.ITextLine', false ,'String', false ,'String', false ]; }},
        '|calculateUnderlineOffset': { type: 'Number', declaredBy: 'org.apache.royale.textLayout.compose.utils.AdornmentUtils', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IFlowLeafElement', false ,'Number', false ,'String', false ,'org.apache.royale.text.engine.FontMetrics', false ,'org.apache.royale.text.engine.ITextLine', false ]; }},
        '|calculateAdornmentBounds': { type: 'void', declaredBy: 'org.apache.royale.textLayout.compose.utils.AdornmentUtils', parameters: function () { return [ 'org.apache.royale.textLayout.elements.ISubParagraphGroupElementBase', false ,'org.apache.royale.text.engine.ITextLine', false ,'String', false ,'org.apache.royale.geom.Rectangle', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.compose.utils.AdornmentUtils.prototype.ROYALE_COMPILE_FLAGS = 10;
