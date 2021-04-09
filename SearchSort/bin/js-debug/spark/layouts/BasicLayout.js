/**
 * Generated by Apache Royale Compiler from spark/layouts/BasicLayout.as
 * spark.layouts.BasicLayout
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('spark.layouts.BasicLayout');
/* Royale Dependency List: mx.core.ILayoutElement,mx.core.mx_internal,spark.components.supportClasses.GroupBase,spark.layouts.supportClasses.LayoutElementHelper,org.apache.royale.utils.Language,XML*/

goog.require('spark.layouts.supportClasses.LayoutBase');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10
 *  @playerversion AIR 1.5
 *  @productversion Flex 4
 * @constructor
 * @extends {spark.layouts.supportClasses.LayoutBase}
 */
spark.layouts.BasicLayout = function() {
  spark.layouts.BasicLayout.base(this, 'constructor');
};
goog.inherits(spark.layouts.BasicLayout, spark.layouts.supportClasses.LayoutBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('spark.layouts.BasicLayout', spark.layouts.BasicLayout);


/**
 * @private
 * @param {mx.core.ILayoutElement} layoutElement
 * @return {boolean}
 */
spark.layouts.BasicLayout.constraintsDetermineWidth = function(layoutElement) {
  return !isNaN(layoutElement.percentWidth) || !isNaN(spark.layouts.supportClasses.LayoutElementHelper.parseConstraintValue(layoutElement.left)) && !isNaN(spark.layouts.supportClasses.LayoutElementHelper.parseConstraintValue(layoutElement.right));
};


/**
 * @private
 * @param {mx.core.ILayoutElement} layoutElement
 * @return {boolean}
 */
spark.layouts.BasicLayout.constraintsDetermineHeight = function(layoutElement) {
  return !isNaN(layoutElement.percentHeight) || !isNaN(spark.layouts.supportClasses.LayoutElementHelper.parseConstraintValue(layoutElement.top)) && !isNaN(spark.layouts.supportClasses.LayoutElementHelper.parseConstraintValue(layoutElement.bottom));
};


/**
 *  @asprivate 
 * @private
 */
spark.layouts.BasicLayout.prototype.spark_layouts_BasicLayout_checkUseVirtualLayout = function() {
  if (this.useVirtualLayout)
    throw new Error("basicLayoutNotVirtualized");
};


/**
 *  @asprivate 
 * @export
 * @override
 */
spark.layouts.BasicLayout.prototype.measure = function() {
  this.spark_layouts_BasicLayout_checkUseVirtualLayout();
  spark.layouts.BasicLayout.superClass_.measure.apply(this);
  var /** @type {spark.components.supportClasses.GroupBase} */ layoutTarget = this.target;
  if (!layoutTarget)
    return;
  var /** @type {number} */ width = 0;
  var /** @type {number} */ height = 0;
  var /** @type {number} */ minWidth = 0;
  var /** @type {number} */ minHeight = 0;
  var /** @type {number} */ count = layoutTarget.numElements;
  for (var /** @type {number} */ i = 0; i < count; i++) {
    var /** @type {mx.core.ILayoutElement} */ layoutElement = org.apache.royale.utils.Language.as(layoutTarget.getElementAt(i), mx.core.ILayoutElement);
    if (!layoutElement || !layoutElement.includeInLayout)
      continue;
    var /** @type {number} */ hCenter = spark.layouts.supportClasses.LayoutElementHelper.parseConstraintValue(layoutElement.horizontalCenter);
    var /** @type {number} */ vCenter = spark.layouts.supportClasses.LayoutElementHelper.parseConstraintValue(layoutElement.verticalCenter);
    var /** @type {number} */ left = spark.layouts.supportClasses.LayoutElementHelper.parseConstraintValue(layoutElement.left);
    var /** @type {number} */ right = spark.layouts.supportClasses.LayoutElementHelper.parseConstraintValue(layoutElement.right);
    var /** @type {number} */ top = spark.layouts.supportClasses.LayoutElementHelper.parseConstraintValue(layoutElement.top);
    var /** @type {number} */ bottom = spark.layouts.supportClasses.LayoutElementHelper.parseConstraintValue(layoutElement.bottom);
    var /** @type {number} */ extX;
    var /** @type {number} */ extY;
    if (!isNaN(left) && !isNaN(right)) {
      extX = left + right;
    } else if (!isNaN(hCenter)) {
      extX = Math.abs(hCenter) * 2;
    } else if (!isNaN(left) || !isNaN(right)) {
      extX = isNaN(left) ? 0 : left;
      extX += isNaN(right) ? 0 : right;
    } else {
      extX = layoutElement.getBoundsXAtSize(NaN, NaN);
    }
    if (!isNaN(top) && !isNaN(bottom)) {
      extY = top + bottom;
    } else if (!isNaN(vCenter)) {
      extY = Math.abs(vCenter) * 2;
    } else if (!isNaN(top) || !isNaN(bottom)) {
      extY = isNaN(top) ? 0 : top;
      extY += isNaN(bottom) ? 0 : bottom;
    } else {
      extY = layoutElement.getBoundsYAtSize(NaN, NaN);
    }
    var /** @type {number} */ preferredWidth = layoutElement.getPreferredBoundsWidth();
    var /** @type {number} */ preferredHeight = layoutElement.getPreferredBoundsHeight();
    width = Math.max(width, extX + preferredWidth);
    height = Math.max(height, extY + preferredHeight);
    var /** @type {number} */ elementMinWidth = spark.layouts.BasicLayout.constraintsDetermineWidth(layoutElement) ? layoutElement.getMinBoundsWidth() : preferredWidth;
    var /** @type {number} */ elementMinHeight = spark.layouts.BasicLayout.constraintsDetermineHeight(layoutElement) ? layoutElement.getMinBoundsHeight() : preferredHeight;
    minWidth = Math.max(minWidth, extX + elementMinWidth);
    minHeight = Math.max(minHeight, extY + elementMinHeight);
  }
  layoutTarget.measuredWidth = Math.ceil(Math.max(width, minWidth));
  layoutTarget.measuredHeight = Math.ceil(Math.max(height, minHeight));
  layoutTarget.measuredMinWidth = Math.ceil(minWidth);
  layoutTarget.measuredMinHeight = Math.ceil(minHeight);
};


/**
 *  @asreturn Returns the maximum value for an element's dimension so that the component doesn't
 *  spill out of the container size. Calculations are based on the layout rules.
 *  Pass in unscaledWidth, hCenter, left, right, childX to get a maxWidth value.
 *  Pass in unscaledHeight, vCenter, top, bottom, childY to get a maxHeight value.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10
 *  @playerversion AIR 1.5
 *  @productversion Flex 4
 * @private
 * @param {number} totalSize
 * @param {number} center
 * @param {number} lowConstraint
 * @param {number} highConstraint
 * @param {number} position
 * @return {number}
 */
spark.layouts.BasicLayout.maxSizeToFitIn = function(totalSize, center, lowConstraint, highConstraint, position) {
  if (!isNaN(center)) {
    return totalSize - 2 * Math.abs(center);
  } else if (!isNaN(lowConstraint)) {
    return totalSize - lowConstraint;
  } else if (!isNaN(highConstraint)) {
    return totalSize - highConstraint;
  } else {
    return totalSize - position;
  }
};


/**
 *  @asprivate 
 * @export
 * @override
 */
spark.layouts.BasicLayout.prototype.updateDisplayList = function(unscaledWidth, unscaledHeight) {
  this.spark_layouts_BasicLayout_checkUseVirtualLayout();
  spark.layouts.BasicLayout.superClass_.updateDisplayList.apply(this, [ unscaledWidth, unscaledHeight] );
  var /** @type {spark.components.supportClasses.GroupBase} */ layoutTarget = this.target;
  if (!layoutTarget)
    return;
  var /** @type {number} */ count = layoutTarget.numElements;
  var /** @type {number} */ maxX = 0;
  var /** @type {number} */ maxY = 0;
  for (var /** @type {number} */ i = 0; i < count; i++) {
    var /** @type {mx.core.ILayoutElement} */ layoutElement = org.apache.royale.utils.Language.as(layoutTarget.getElementAt(i), mx.core.ILayoutElement);
    if (!layoutElement || !layoutElement.includeInLayout)
      continue;
    var /** @type {number} */ hCenter = spark.layouts.supportClasses.LayoutElementHelper.parseConstraintValue(layoutElement.horizontalCenter);
    var /** @type {number} */ vCenter = spark.layouts.supportClasses.LayoutElementHelper.parseConstraintValue(layoutElement.verticalCenter);
    var /** @type {number} */ left = spark.layouts.supportClasses.LayoutElementHelper.parseConstraintValue(layoutElement.left);
    var /** @type {number} */ right = spark.layouts.supportClasses.LayoutElementHelper.parseConstraintValue(layoutElement.right);
    var /** @type {number} */ top = spark.layouts.supportClasses.LayoutElementHelper.parseConstraintValue(layoutElement.top);
    var /** @type {number} */ bottom = spark.layouts.supportClasses.LayoutElementHelper.parseConstraintValue(layoutElement.bottom);
    var /** @type {number} */ percentWidth = layoutElement.percentWidth;
    var /** @type {number} */ percentHeight = layoutElement.percentHeight;
    var /** @type {number} */ elementMaxWidth = NaN;
    var /** @type {number} */ elementMaxHeight = NaN;
    var /** @type {number} */ childWidth = NaN;
    var /** @type {number} */ childHeight = NaN;
    if (!isNaN(percentWidth)) {
      var /** @type {number} */ availableWidth = unscaledWidth;
      if (!isNaN(left))
        availableWidth -= left;
      if (!isNaN(right))
        availableWidth -= right;
      childWidth = Math.round(availableWidth * Math.min(percentWidth * 0.01, 1));
      elementMaxWidth = Math.min(layoutElement.getMaxBoundsWidth(), spark.layouts.BasicLayout.maxSizeToFitIn(unscaledWidth, hCenter, left, right, layoutElement.getLayoutBoundsX()));
    } else if (!isNaN(left) && !isNaN(right)) {
      childWidth = unscaledWidth - right - left;
    }
    if (!isNaN(percentHeight)) {
      var /** @type {number} */ availableHeight = unscaledHeight;
      if (!isNaN(top))
        availableHeight -= top;
      if (!isNaN(bottom))
        availableHeight -= bottom;
      childHeight = Math.round(availableHeight * Math.min(percentHeight * 0.01, 1));
      elementMaxHeight = Math.min(layoutElement.getMaxBoundsHeight(), spark.layouts.BasicLayout.maxSizeToFitIn(unscaledHeight, vCenter, top, bottom, layoutElement.getLayoutBoundsY()));
    } else if (!isNaN(top) && !isNaN(bottom)) {
      childHeight = unscaledHeight - bottom - top;
    }
    if (!isNaN(childWidth)) {
      if (isNaN(elementMaxWidth))
        elementMaxWidth = layoutElement.getMaxBoundsWidth();
      childWidth = Math.max(layoutElement.getMinBoundsWidth(), Math.min(elementMaxWidth, childWidth));
    }
    if (!isNaN(childHeight)) {
      if (isNaN(elementMaxHeight))
        elementMaxHeight = layoutElement.getMaxBoundsHeight();
      childHeight = Math.max(layoutElement.getMinBoundsHeight(), Math.min(elementMaxHeight, childHeight));
    }
    layoutElement.setLayoutBoundsSize(childWidth, childHeight);
    var /** @type {number} */ elementWidth = layoutElement.getLayoutBoundsWidth();
    var /** @type {number} */ elementHeight = layoutElement.getLayoutBoundsHeight();
    var /** @type {number} */ childX = NaN;
    var /** @type {number} */ childY = NaN;
    if (!isNaN(hCenter))
      childX = Math.round((unscaledWidth - elementWidth) / 2 + hCenter);
    else if (!isNaN(left))
      childX = left;
    else if (!isNaN(right))
      childX = unscaledWidth - elementWidth - right;
    else
      childX = layoutElement.getLayoutBoundsX();
    if (!isNaN(vCenter))
      childY = Math.round((unscaledHeight - elementHeight) / 2 + vCenter);
    else if (!isNaN(top))
      childY = top;
    else if (!isNaN(bottom))
      childY = unscaledHeight - elementHeight - bottom;
    else
      childY = layoutElement.getLayoutBoundsY();
    layoutElement.setLayoutBoundsPosition(childX, childY);
    maxX = Math.max(maxX, childX + elementWidth);
    maxY = Math.max(maxY, childY + elementHeight);
  }
  layoutTarget.setContentSize(Math.ceil(maxX), Math.ceil(maxY));
};


spark.layouts.BasicLayout.prototype.http_$$www_adobe_com$2006$flex$mx$internal__get__virtualLayoutSupported = function() {
  return false;
};


Object.defineProperties(spark.layouts.BasicLayout.prototype, /** @lends {spark.layouts.BasicLayout.prototype} */ {
/**
  * @export
  * @type {boolean} */
http_$$www_adobe_com$2006$flex$mx$internal__virtualLayoutSupported: {
get: spark.layouts.BasicLayout.prototype.http_$$www_adobe_com$2006$flex$mx$internal__get__virtualLayoutSupported}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
spark.layouts.BasicLayout.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'BasicLayout', qName: 'spark.layouts.BasicLayout', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
spark.layouts.BasicLayout.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'http://www.adobe.com/2006/flex/mx/internal::virtualLayoutSupported': { type: 'Boolean', access: 'readonly', declaredBy: 'spark.layouts.BasicLayout'}
      };
    },
    methods: function () {
      return {
        'BasicLayout': { type: 'void', declaredBy: 'spark.layouts.BasicLayout'},
        'measure': { type: 'void', declaredBy: 'spark.layouts.BasicLayout'},
        'updateDisplayList': { type: 'void', declaredBy: 'spark.layouts.BasicLayout', parameters: function () { return [ 'Number', false ,'Number', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
spark.layouts.BasicLayout.prototype.ROYALE_COMPILE_FLAGS = 10;
