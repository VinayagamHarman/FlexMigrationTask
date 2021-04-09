/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/utils/GeometryUtil.as
 * org.apache.royale.textLayout.utils.GeometryUtil
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.utils.GeometryUtil');
/* Royale Dependency List: org.apache.royale.geom.Rectangle,org.apache.royale.text.engine.ITextLine,org.apache.royale.textLayout.compose.IFlowComposer,org.apache.royale.textLayout.compose.ITextFlowLine,org.apache.royale.textLayout.elements.TextRange,XML*/




/**
 * @constructor
 */
org.apache.royale.textLayout.utils.GeometryUtil = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.utils.GeometryUtil', org.apache.royale.textLayout.utils.GeometryUtil);


/**
 * Returns an array of line/rectangle object pairs describing the highlight area of the text 
 * based on the content bounded within the indicies. The rectangles are the same as those which would be 
 * created if the text were selected. May return one or more pair per line.
 * 
 * 
 * @asparam range	- a TextRange describing the TextFlow as well as the beginning and end indicies
 * @asreturn Array - An array of TextLine and Rectangle pairs. The objects can be referenced as:
 * 		obj.textLine - to access the TextLine object
 *		obj.rect - to access the rectangle describing the selection in TextLine coordinates
 * 
 * @playerversion Flash 10
 * @playerversion AIR 1.5
 * @langversion 3.0
 * 
 * Example Usage:
 *  var theRect:Rectangle = returnArray[0].rect.clone(); 
 *  var textLine:TextLine = returnArray[0].textLine; 
 * 	var globalStart:Point = new Point(theRect.x, theRect.y);
 *  globalStart = textLine.localToGlobal(globalStart);
 *  globalStart = textLine.parent.globalToLocal(globalStart);
 *  theRect.x = globalStart.x;
 *  theRect.y = globalStart.y;
 * 
 *  [Make a new shape and draw the path into it. See flash.display.graphics]
 *  textLine.parent.addChild(newShape);
 * @export
 * @param {org.apache.royale.textLayout.elements.TextRange} range
 * @return {Array}
 */
org.apache.royale.textLayout.utils.GeometryUtil.getHighlightBounds = function(range) {
  var /** @type {org.apache.royale.textLayout.compose.IFlowComposer} */ flowComposer = range.textFlow.flowComposer;
  if (!flowComposer)
    return null;
  var /** @type {Array} */ resultShapes = new Array();
  var /** @type {number} */ begLine = flowComposer.findLineIndexAtPosition(range.absoluteStart);
  var /** @type {number} */ endLine = range.absoluteStart == range.absoluteEnd ? begLine : flowComposer.findLineIndexAtPosition(range.absoluteEnd);
  if (endLine >= flowComposer.numLines)
    endLine = (flowComposer.numLines - 1) >> 0;
  var /** @type {org.apache.royale.textLayout.compose.ITextFlowLine} */ prevLine = begLine > 0 ? flowComposer.getLineAt((begLine - 1) >> 0) : null;
  var /** @type {org.apache.royale.textLayout.compose.ITextFlowLine} */ nextLine;
  var /** @type {org.apache.royale.textLayout.compose.ITextFlowLine} */ line = flowComposer.getLineAt(begLine);
  var /** @type {Array} */ mainRects = [];
  for (var /** @type {number} */ curLineIndex = begLine; curLineIndex <= endLine; curLineIndex++) {
    nextLine = curLineIndex != (flowComposer.numLines - 1) ? flowComposer.getLineAt((curLineIndex + 1) >> 0) : null;
    var /** @type {Array} */ heightAndAdj = line.getRomanSelectionHeightAndVerticalAdjustment(prevLine, nextLine);
    var /** @type {org.apache.royale.text.engine.ITextLine} */ textLine = line.getTextLine(true);
    line.calculateSelectionBounds(textLine, mainRects, (range.absoluteStart < line.absoluteStart ? line.absoluteStart - line.paragraph.getAbsoluteStart() : range.absoluteStart - line.paragraph.getAbsoluteStart()) >> 0, (range.absoluteEnd > (line.absoluteStart + line.textLength) ? line.absoluteStart + line.textLength - line.paragraph.getAbsoluteStart() : range.absoluteEnd - line.paragraph.getAbsoluteStart()) >> 0, org.apache.royale.utils.Language.string(range.textFlow.computedFormat.blockProgression), heightAndAdj);
    var foreachiter0_target = mainRects;
    for (var foreachiter0 in foreachiter0_target) 
    {
    var rect = foreachiter0_target[foreachiter0];
    {
      var /** @type {Object} */ obj = {};
      obj.textLine = textLine;
      obj.rect = rect.clone();
      resultShapes.push(obj);
    }}
    
    mainRects.length = 0;
    var /** @type {org.apache.royale.textLayout.compose.ITextFlowLine} */ temp = line;
    line = nextLine;
    prevLine = temp;
  }
  return resultShapes;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.utils.GeometryUtil.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'GeometryUtil', qName: 'org.apache.royale.textLayout.utils.GeometryUtil', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.utils.GeometryUtil.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|getHighlightBounds': { type: 'Array', declaredBy: 'org.apache.royale.textLayout.utils.GeometryUtil', parameters: function () { return [ 'org.apache.royale.textLayout.elements.TextRange', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.utils.GeometryUtil.prototype.ROYALE_COMPILE_FLAGS = 10;
