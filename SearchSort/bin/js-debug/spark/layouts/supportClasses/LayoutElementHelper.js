/**
 * Generated by Apache Royale Compiler from spark/layouts/supportClasses/LayoutElementHelper.as
 * spark.layouts.supportClasses.LayoutElementHelper
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('spark.layouts.supportClasses.LayoutElementHelper');
/* Royale Dependency List: mx.utils.StringUtil,org.apache.royale.utils.Language,XML*/




/**
 * @constructor
 */
spark.layouts.supportClasses.LayoutElementHelper = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('spark.layouts.supportClasses.LayoutElementHelper', spark.layouts.supportClasses.LayoutElementHelper);


/**
 *  @asreturn Returns <code>val</code> clamped to the range of
 *  <code>min</code> or <code>max</code>.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10
 *  @playerversion AIR 1.5
 *  @productversion Flex 4
 * @export
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
spark.layouts.supportClasses.LayoutElementHelper.pinBetween = function(val, min, max) {
  return Math.min(max, Math.max(min, val));
};


/**
 *  @asreturn returns the number for the passed in constraint value. Constraint value
 *  can be a Number, or a string in the format "col1:10".
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10
 *  @playerversion AIR 1.5
 *  @productversion Flex 4
 * @export
 * @param {Object} value
 * @return {number}
 */
spark.layouts.supportClasses.LayoutElementHelper.parseConstraintValue = function(value) {
  if (org.apache.royale.utils.Language.is(value, Number))
    return Number(value);
  var /** @type {string} */ str = org.apache.royale.utils.Language.as(value, String);
  if (!str)
    return NaN;
  var /** @type {Array} */ result = spark.layouts.supportClasses.LayoutElementHelper.parseConstraintExp(str);
  return Number(result[0]);
};


/**
 *  @asprivate
 *  Parses a constraint expression, like left="col1:10" 
 *  so that an array is returned where the first value is
 *  the offset (ie: 10) and the second value is 
 *  the boundary (ie: "col1")
 *  @asparam result :  optional Array to save an Array memory allocation
 * @export
 * @param {Object} val
 * @param {Array=} result
 * @return {Array}
 */
spark.layouts.supportClasses.LayoutElementHelper.parseConstraintExp = function(val, result) {
  result = typeof result !== 'undefined' ? result : null;
  if (org.apache.royale.utils.Language.is(val, Number)) {
    if (result == null) {
      return [org.apache.royale.utils.Language.as(val, Number), null];
    } else {
      result[0] = org.apache.royale.utils.Language.as(val, Number);
      result[1] = null;
      return result;
    }
  }
  if (!val) {
    if (result == null) {
      return [NaN, null];
    } else {
      result[0] = NaN;
      result[1] = null;
      return result;
    }
  }
  var /** @type {string} */ tmp = String(val);
  var /** @type {number} */ colonPos = (tmp.indexOf(":")) >> 0;
  if (colonPos == -1) {
    return [mx.utils.StringUtil.trim(tmp)];
  }
  if (result == null) {
    result = [];
  }
  var /** @type {number} */ startIndex = 0;
  while (mx.utils.StringUtil.isWhitespace(tmp.charAt(startIndex))) {
    ++startIndex;
  }
  var /** @type {number} */ endIndex = (tmp.length - 1) >> 0;
  while (mx.utils.StringUtil.isWhitespace(tmp.charAt(endIndex))) {
    --endIndex;
  }
  var /** @type {number} */ endIndexPart1 = (colonPos - 1) >> 0;
  while (mx.utils.StringUtil.isWhitespace(tmp.charAt(endIndexPart1))) {
    --endIndexPart1;
  }
  var /** @type {number} */ startIndexPart2 = (colonPos + 1) >> 0;
  while (mx.utils.StringUtil.isWhitespace(tmp.charAt(startIndexPart2))) {
    ++startIndexPart2;
  }
  result[0] = tmp.substring(startIndexPart2, endIndex + 1);
  result[1] = tmp.substring(startIndex, endIndexPart1 + 1);
  return result;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
spark.layouts.supportClasses.LayoutElementHelper.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'LayoutElementHelper', qName: 'spark.layouts.supportClasses.LayoutElementHelper', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
spark.layouts.supportClasses.LayoutElementHelper.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|pinBetween': { type: 'Number', declaredBy: 'spark.layouts.supportClasses.LayoutElementHelper', parameters: function () { return [ 'Number', false ,'Number', false ,'Number', false ]; }},
        '|parseConstraintValue': { type: 'Number', declaredBy: 'spark.layouts.supportClasses.LayoutElementHelper', parameters: function () { return [ 'Object', false ]; }},
        '|parseConstraintExp': { type: 'Array', declaredBy: 'spark.layouts.supportClasses.LayoutElementHelper', parameters: function () { return [ 'Object', false ,'Array', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
spark.layouts.supportClasses.LayoutElementHelper.prototype.ROYALE_COMPILE_FLAGS = 10;
