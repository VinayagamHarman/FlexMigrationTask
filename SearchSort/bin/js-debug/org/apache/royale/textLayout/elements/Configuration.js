/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/elements/Configuration.as
 * org.apache.royale.textLayout.elements.Configuration
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.elements.Configuration');
/* Royale Dependency List: org.apache.royale.textLayout.compose.utils.StandardHelper,org.apache.royale.textLayout.edit.SelectionFormat,org.apache.royale.textLayout.elements.OverflowPolicy,org.apache.royale.textLayout.formats.FormatValue,org.apache.royale.textLayout.formats.IListMarkerFormat,org.apache.royale.textLayout.formats.ITextLayoutFormat,org.apache.royale.textLayout.formats.ListMarkerFormat,org.apache.royale.textLayout.formats.TextDecoration,org.apache.royale.textLayout.formats.TextLayoutFormat,org.apache.royale.utils.Language,XML*/

goog.require('org.apache.royale.textLayout.elements.IConfiguration');



/** Constructor - creates a default configuration. 
 *
 * @asparam initializeWithDefaults Specifies whether to initialize the configuration with
 * the default values. Default is <code>true</code>. If set to <code>false</code>, initializes
 * without default values, thereby saving some objects. The <code>clone()</code> method sets this
 * to <code>false</code> and copies the properties from the original object.
 *
 * @playerversion Flash 10
 * @playerversion AIR 1.5
 * @langversion 3.0
 * 
 * @see org.apache.royale.textLayout.edit.SelectionFormat SelectionFormat
 * @see org.apache.royale.textLayout.compose.StandardFlowComposer StandardFlowComposer
 * @constructor
 * @implements {org.apache.royale.textLayout.elements.IConfiguration}
 * @param {boolean=} initializeWithDefaults
 */
org.apache.royale.textLayout.elements.Configuration = function(initializeWithDefaults) {
  initializeWithDefaults = typeof initializeWithDefaults !== 'undefined' ? initializeWithDefaults : true;
  
  this.org_apache_royale_textLayout_elements_Configuration__shiftEnterLevel = org.apache.royale.textLayout.elements.Configuration.defaultShiftEnterLevel;
  if (initializeWithDefaults)
    this.org_apache_royale_textLayout_elements_Configuration_initialize();
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.elements.Configuration', org.apache.royale.textLayout.elements.Configuration);


/** @asprivate 
 * @export
 * @param {number} major
 * @param {number} minor
 * @return {boolean}
 */
org.apache.royale.textLayout.elements.Configuration.versionIsAtLeast = function(major, minor) {
  var /** @type {Array} */ versionData = ["11", "4", "0"];
  return org.apache.royale.utils.Language._int(versionData[0]) > major || (org.apache.royale.utils.Language._int(versionData[0]) == major && org.apache.royale.utils.Language._int(versionData[1]) >= minor);
};


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.textLayout.elements.Configuration.DIFFERENCE = "difference";


/**
 * @export
 * @nocollapse
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.elements.Configuration.SHIFT_RETURN_AS_HARD = 0;


/**
 * @export
 * @nocollapse
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.elements.Configuration.SHIFT_RETURN_AS_HARD_IN_LIST = 1;


/**
 * @export
 * @nocollapse
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.elements.Configuration.SHIFT_RETURN_AS_SOFT = 2;


/**
 * @export
 * @nocollapse
 * @type {number}
 */
org.apache.royale.textLayout.elements.Configuration.defaultShiftEnterLevel;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__manageTabKey;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__manageEnterKey;


/**
 * @private
 * @type {number}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__shiftEnterLevel;


/**
 * @private
 * @type {string}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__overflowPolicy;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__enableAccessibility;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__releaseLineCreationData;


/**
 * @private
 * @type {org.apache.royale.textLayout.formats.ITextLayoutFormat}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__defaultLinkNormalFormat;


/**
 * @private
 * @type {org.apache.royale.textLayout.formats.ITextLayoutFormat}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__defaultLinkActiveFormat;


/**
 * @private
 * @type {org.apache.royale.textLayout.formats.ITextLayoutFormat}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__defaultLinkHoverFormat;


/**
 * @private
 * @type {org.apache.royale.textLayout.formats.IListMarkerFormat}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__defaultListMarkerFormat;


/**
 * @private
 * @type {org.apache.royale.textLayout.formats.ITextLayoutFormat}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__textFlowInitialFormat;


/**
 * @private
 * @type {org.apache.royale.textLayout.edit.SelectionFormat}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__focusedSelectionFormat;


/**
 * @private
 * @type {org.apache.royale.textLayout.edit.SelectionFormat}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__unfocusedSelectionFormat;


/**
 * @private
 * @type {org.apache.royale.textLayout.edit.SelectionFormat}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__inactiveSelectionFormat;


/**
 * @private
 * @type {number}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__scrollDragDelay;


/**
 * @private
 * @type {number}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__scrollDragPixels;


/**
 * @private
 * @type {number}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__scrollPagePercentage;


/**
 * @private
 * @type {number}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__scrollMouseWheelMultiplier;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__flowComposerClass;


/**
 * @private
 * @type {Function}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__inlineGraphicResolverFunction;


/**
 * @private
 * @type {Function}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__cursorFunction;


/**
 * @private
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration_initialize = function() {
  var /** @type {org.apache.royale.textLayout.formats.TextLayoutFormat} */ scratchFormat;
  this.org_apache_royale_textLayout_elements_Configuration__manageTabKey = false;
  this.org_apache_royale_textLayout_elements_Configuration__manageEnterKey = true;
  this.org_apache_royale_textLayout_elements_Configuration__overflowPolicy = org.apache.royale.textLayout.elements.OverflowPolicy.FIT_DESCENDERS;
  this.org_apache_royale_textLayout_elements_Configuration__enableAccessibility = false;
  this.org_apache_royale_textLayout_elements_Configuration__releaseLineCreationData = false;
  this.org_apache_royale_textLayout_elements_Configuration__focusedSelectionFormat = new org.apache.royale.textLayout.edit.SelectionFormat(0xffffff, 1.0, org.apache.royale.textLayout.elements.Configuration.DIFFERENCE);
  this.org_apache_royale_textLayout_elements_Configuration__unfocusedSelectionFormat = new org.apache.royale.textLayout.edit.SelectionFormat(0xffffff, 0, org.apache.royale.textLayout.elements.Configuration.DIFFERENCE, 0xffffff, 0.0, org.apache.royale.textLayout.elements.Configuration.DIFFERENCE, 0);
  this.org_apache_royale_textLayout_elements_Configuration__inactiveSelectionFormat = this.org_apache_royale_textLayout_elements_Configuration__unfocusedSelectionFormat;
  scratchFormat = new org.apache.royale.textLayout.formats.TextLayoutFormat();
  scratchFormat.textDecoration = org.apache.royale.textLayout.formats.TextDecoration.UNDERLINE;
  scratchFormat.color = 0x0000FF;
  this.org_apache_royale_textLayout_elements_Configuration__defaultLinkNormalFormat = scratchFormat;
  var /** @type {org.apache.royale.textLayout.formats.ListMarkerFormat} */ listMarkerFormat = new org.apache.royale.textLayout.formats.ListMarkerFormat();
  listMarkerFormat.paragraphEndIndent = 4;
  this.org_apache_royale_textLayout_elements_Configuration__defaultListMarkerFormat = listMarkerFormat;
  scratchFormat = new org.apache.royale.textLayout.formats.TextLayoutFormat();
  scratchFormat.lineBreak = org.apache.royale.textLayout.formats.FormatValue.INHERIT;
  scratchFormat.paddingLeft = org.apache.royale.textLayout.formats.FormatValue.INHERIT;
  scratchFormat.paddingRight = org.apache.royale.textLayout.formats.FormatValue.INHERIT;
  scratchFormat.paddingTop = org.apache.royale.textLayout.formats.FormatValue.INHERIT;
  scratchFormat.paddingBottom = org.apache.royale.textLayout.formats.FormatValue.INHERIT;
  scratchFormat.marginLeft = org.apache.royale.textLayout.formats.FormatValue.INHERIT;
  scratchFormat.marginRight = org.apache.royale.textLayout.formats.FormatValue.INHERIT;
  scratchFormat.marginTop = org.apache.royale.textLayout.formats.FormatValue.INHERIT;
  scratchFormat.marginBottom = org.apache.royale.textLayout.formats.FormatValue.INHERIT;
  scratchFormat.borderLeftWidth = org.apache.royale.textLayout.formats.FormatValue.INHERIT;
  scratchFormat.borderRightWidth = org.apache.royale.textLayout.formats.FormatValue.INHERIT;
  scratchFormat.borderTopWidth = org.apache.royale.textLayout.formats.FormatValue.INHERIT;
  scratchFormat.borderBottomWidth = org.apache.royale.textLayout.formats.FormatValue.INHERIT;
  scratchFormat.verticalAlign = org.apache.royale.textLayout.formats.FormatValue.INHERIT;
  scratchFormat.columnCount = org.apache.royale.textLayout.formats.FormatValue.INHERIT;
  scratchFormat.columnCount = org.apache.royale.textLayout.formats.FormatValue.INHERIT;
  scratchFormat.columnGap = org.apache.royale.textLayout.formats.FormatValue.INHERIT;
  scratchFormat.columnWidth = org.apache.royale.textLayout.formats.FormatValue.INHERIT;
  this.org_apache_royale_textLayout_elements_Configuration__textFlowInitialFormat = scratchFormat;
  this.org_apache_royale_textLayout_elements_Configuration__scrollDragDelay = 35;
  this.org_apache_royale_textLayout_elements_Configuration__scrollDragPixels = 20;
  this.org_apache_royale_textLayout_elements_Configuration__scrollPagePercentage = 7.0 / 8.0;
  this.org_apache_royale_textLayout_elements_Configuration__scrollMouseWheelMultiplier = 20;
  this.org_apache_royale_textLayout_elements_Configuration__flowComposerClass = org.apache.royale.textLayout.compose.utils.StandardHelper.getStandardClass();
};


/**
 * @private
 * @type {org.apache.royale.textLayout.elements.IConfiguration}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.org_apache_royale_textLayout_elements_Configuration__immutableClone;


/**
 *  TextFlows are configured with an immutable clone of a Configuration.  Once a TextFlow is create it uses an immutable configuration.
 *  @asprivate
 *  @royaleignorecoercion org.apache.royale.textLayout.elements.Configuration
 * @export
 * @return {org.apache.royale.textLayout.elements.IConfiguration}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.getImmutableClone = function() {
  if (!this.org_apache_royale_textLayout_elements_Configuration__immutableClone) {
    var /** @type {Object} */ clonedConifg = this.clone();
    this.org_apache_royale_textLayout_elements_Configuration__immutableClone = clonedConifg;
    clonedConifg.org_apache_royale_textLayout_elements_Configuration__immutableClone = clonedConifg;
  }
  return this.org_apache_royale_textLayout_elements_Configuration__immutableClone;
};


/** Creates a clone of the Configuration object.
 *
 * @playerversion Flash 10
 * @playerversion AIR 1.5
 * @langversion 3.0
 * @export
 * @return {org.apache.royale.textLayout.elements.IConfiguration}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.clone = function() {
  var /** @type {org.apache.royale.textLayout.elements.Configuration} */ config = new org.apache.royale.textLayout.elements.Configuration(false);
  config.defaultLinkActiveFormat = this.defaultLinkActiveFormat;
  config.defaultLinkHoverFormat = this.defaultLinkHoverFormat;
  config.defaultLinkNormalFormat = this.defaultLinkNormalFormat;
  config.defaultListMarkerFormat = this.defaultListMarkerFormat;
  config.textFlowInitialFormat = this.org_apache_royale_textLayout_elements_Configuration__textFlowInitialFormat;
  config.focusedSelectionFormat = this.org_apache_royale_textLayout_elements_Configuration__focusedSelectionFormat;
  config.unfocusedSelectionFormat = this.org_apache_royale_textLayout_elements_Configuration__unfocusedSelectionFormat;
  config.inactiveSelectionFormat = this.org_apache_royale_textLayout_elements_Configuration__inactiveSelectionFormat;
  config.manageTabKey = this.org_apache_royale_textLayout_elements_Configuration__manageTabKey;
  config.manageEnterKey = this.org_apache_royale_textLayout_elements_Configuration__manageEnterKey;
  config.overflowPolicy = this.org_apache_royale_textLayout_elements_Configuration__overflowPolicy;
  config.enableAccessibility = this.org_apache_royale_textLayout_elements_Configuration__enableAccessibility;
  config.releaseLineCreationData = this.org_apache_royale_textLayout_elements_Configuration__releaseLineCreationData;
  config.scrollDragDelay = this.org_apache_royale_textLayout_elements_Configuration__scrollDragDelay;
  config.scrollDragPixels = this.org_apache_royale_textLayout_elements_Configuration__scrollDragPixels;
  config.scrollPagePercentage = this.org_apache_royale_textLayout_elements_Configuration__scrollPagePercentage;
  config.scrollMouseWheelMultiplier = this.org_apache_royale_textLayout_elements_Configuration__scrollMouseWheelMultiplier;
  config.flowComposerClass = this.org_apache_royale_textLayout_elements_Configuration__flowComposerClass;
  config.org_apache_royale_textLayout_elements_Configuration__inlineGraphicResolverFunction = this.org_apache_royale_textLayout_elements_Configuration__inlineGraphicResolverFunction;
  config.org_apache_royale_textLayout_elements_Configuration__cursorFunction = this.org_apache_royale_textLayout_elements_Configuration__cursorFunction;
  return config;
};


/**
 * @private
 * @type {org.apache.royale.textLayout.elements.IConfiguration}
 */
org.apache.royale.textLayout.elements.Configuration._defaultConfiguration;


/** @asprivate 
 * @export
 * @param {org.apache.royale.textLayout.elements.IConfiguration} config
 * @param {string} cursorString
 * @return {string}
 */
org.apache.royale.textLayout.elements.Configuration.getCursorString = function(config, cursorString) {
  return org.apache.royale.utils.Language.string(config.cursorFunction == null ? cursorString : config.cursorFunction(cursorString));
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__manageTabKey = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__manageTabKey;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__manageTabKey = function(value) {
  this.org_apache_royale_textLayout_elements_Configuration__manageTabKey = value;
  this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__manageEnterKey = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__manageEnterKey;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__manageEnterKey = function(value) {
  this.org_apache_royale_textLayout_elements_Configuration__manageEnterKey = value;
  this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__shiftEnterLevel = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__shiftEnterLevel;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__shiftEnterLevel = function(value) {
  this.org_apache_royale_textLayout_elements_Configuration__shiftEnterLevel = value;
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__overflowPolicy = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__overflowPolicy;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__overflowPolicy = function(value) {
  this.org_apache_royale_textLayout_elements_Configuration__overflowPolicy = value;
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__defaultLinkNormalFormat = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__defaultLinkNormalFormat;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__defaultLinkNormalFormat = function(value) {
  this.org_apache_royale_textLayout_elements_Configuration__defaultLinkNormalFormat = value;
  this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__defaultListMarkerFormat = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__defaultListMarkerFormat;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__defaultListMarkerFormat = function(value) {
  this.org_apache_royale_textLayout_elements_Configuration__defaultListMarkerFormat = value;
  this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__defaultLinkHoverFormat = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__defaultLinkHoverFormat;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__defaultLinkHoverFormat = function(value) {
  this.org_apache_royale_textLayout_elements_Configuration__defaultLinkHoverFormat = value;
  this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__defaultLinkActiveFormat = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__defaultLinkActiveFormat;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__defaultLinkActiveFormat = function(value) {
  this.org_apache_royale_textLayout_elements_Configuration__defaultLinkActiveFormat = value;
  this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__textFlowInitialFormat = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__textFlowInitialFormat;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__textFlowInitialFormat = function(value) {
  this.org_apache_royale_textLayout_elements_Configuration__textFlowInitialFormat = value;
  this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__focusedSelectionFormat = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__focusedSelectionFormat;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__focusedSelectionFormat = function(value) {
  if (value != null) {
    this.org_apache_royale_textLayout_elements_Configuration__focusedSelectionFormat = value;
    this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
  }
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__unfocusedSelectionFormat = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__unfocusedSelectionFormat;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__unfocusedSelectionFormat = function(value) {
  if (value != null) {
    this.org_apache_royale_textLayout_elements_Configuration__unfocusedSelectionFormat = value;
    this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
  }
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__inactiveSelectionFormat = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__inactiveSelectionFormat;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__inactiveSelectionFormat = function(value) {
  if (value != null) {
    this.org_apache_royale_textLayout_elements_Configuration__inactiveSelectionFormat = value;
    this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
  }
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__scrollDragDelay = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__scrollDragDelay;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__scrollDragDelay = function(value) {
  if (value > 0) {
    this.org_apache_royale_textLayout_elements_Configuration__scrollDragDelay = value;
    this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
  }
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__scrollDragPixels = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__scrollDragPixels;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__scrollDragPixels = function(value) {
  if (value > 0) {
    this.org_apache_royale_textLayout_elements_Configuration__scrollDragPixels = value;
    this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
  }
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__scrollPagePercentage = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__scrollPagePercentage;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__scrollPagePercentage = function(value) {
  if (value > 0) {
    this.org_apache_royale_textLayout_elements_Configuration__scrollPagePercentage = value;
    this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
  }
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__scrollMouseWheelMultiplier = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__scrollMouseWheelMultiplier;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__scrollMouseWheelMultiplier = function(value) {
  if (value > 0) {
    this.org_apache_royale_textLayout_elements_Configuration__scrollMouseWheelMultiplier = value;
    this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
  }
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__flowComposerClass = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__flowComposerClass;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__flowComposerClass = function(value) {
  this.org_apache_royale_textLayout_elements_Configuration__flowComposerClass = value;
  this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__enableAccessibility = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__enableAccessibility;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__enableAccessibility = function(value) {
  this.org_apache_royale_textLayout_elements_Configuration__enableAccessibility = value;
  this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__releaseLineCreationData = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__releaseLineCreationData;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__releaseLineCreationData = function(value) {
  this.org_apache_royale_textLayout_elements_Configuration__releaseLineCreationData = value;
  this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__inlineGraphicResolverFunction = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__inlineGraphicResolverFunction;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__inlineGraphicResolverFunction = function(value) {
  this.org_apache_royale_textLayout_elements_Configuration__inlineGraphicResolverFunction = value;
  this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
};


org.apache.royale.textLayout.elements.Configuration.prototype.get__cursorFunction = function() {
  return this.org_apache_royale_textLayout_elements_Configuration__cursorFunction;
};


org.apache.royale.textLayout.elements.Configuration.prototype.set__cursorFunction = function(value) {
  this.org_apache_royale_textLayout_elements_Configuration__cursorFunction = value;
  this.org_apache_royale_textLayout_elements_Configuration__immutableClone = null;
};


Object.defineProperties(org.apache.royale.textLayout.elements.Configuration.prototype, /** @lends {org.apache.royale.textLayout.elements.Configuration.prototype} */ {
/**
  * @export
  * @type {boolean} */
manageTabKey: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__manageTabKey,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__manageTabKey},
/**
  * @export
  * @type {boolean} */
manageEnterKey: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__manageEnterKey,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__manageEnterKey},
/**
  * @export
  * @type {number} */
shiftEnterLevel: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__shiftEnterLevel,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__shiftEnterLevel},
/**
  * @export
  * @type {string} */
overflowPolicy: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__overflowPolicy,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__overflowPolicy},
/**
  * @export
  * @type {org.apache.royale.textLayout.formats.ITextLayoutFormat} */
defaultLinkNormalFormat: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__defaultLinkNormalFormat,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__defaultLinkNormalFormat},
/**
  * @export
  * @type {org.apache.royale.textLayout.formats.IListMarkerFormat} */
defaultListMarkerFormat: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__defaultListMarkerFormat,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__defaultListMarkerFormat},
/**
  * @export
  * @type {org.apache.royale.textLayout.formats.ITextLayoutFormat} */
defaultLinkHoverFormat: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__defaultLinkHoverFormat,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__defaultLinkHoverFormat},
/**
  * @export
  * @type {org.apache.royale.textLayout.formats.ITextLayoutFormat} */
defaultLinkActiveFormat: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__defaultLinkActiveFormat,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__defaultLinkActiveFormat},
/**
  * @export
  * @type {org.apache.royale.textLayout.formats.ITextLayoutFormat} */
textFlowInitialFormat: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__textFlowInitialFormat,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__textFlowInitialFormat},
/**
  * @export
  * @type {org.apache.royale.textLayout.edit.SelectionFormat} */
focusedSelectionFormat: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__focusedSelectionFormat,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__focusedSelectionFormat},
/**
  * @export
  * @type {org.apache.royale.textLayout.edit.SelectionFormat} */
unfocusedSelectionFormat: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__unfocusedSelectionFormat,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__unfocusedSelectionFormat},
/**
  * @export
  * @type {org.apache.royale.textLayout.edit.SelectionFormat} */
inactiveSelectionFormat: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__inactiveSelectionFormat,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__inactiveSelectionFormat},
/**
  * @export
  * @type {number} */
scrollDragDelay: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__scrollDragDelay,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__scrollDragDelay},
/**
  * @export
  * @type {number} */
scrollDragPixels: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__scrollDragPixels,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__scrollDragPixels},
/**
  * @export
  * @type {number} */
scrollPagePercentage: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__scrollPagePercentage,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__scrollPagePercentage},
/**
  * @export
  * @type {number} */
scrollMouseWheelMultiplier: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__scrollMouseWheelMultiplier,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__scrollMouseWheelMultiplier},
/**
  * @export
  * @type {Object} */
flowComposerClass: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__flowComposerClass,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__flowComposerClass},
/**
  * @export
  * @type {boolean} */
enableAccessibility: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__enableAccessibility,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__enableAccessibility},
/**
  * @export
  * @type {boolean} */
releaseLineCreationData: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__releaseLineCreationData,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__releaseLineCreationData},
/**
  * @export
  * @type {Function} */
inlineGraphicResolverFunction: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__inlineGraphicResolverFunction,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__inlineGraphicResolverFunction},
/**
  * @export
  * @type {Function} */
cursorFunction: {
get: org.apache.royale.textLayout.elements.Configuration.prototype.get__cursorFunction,
set: org.apache.royale.textLayout.elements.Configuration.prototype.set__cursorFunction}}
);


org.apache.royale.textLayout.elements.Configuration.get__defaultConfiguration = function() {
  if (org.apache.royale.textLayout.elements.Configuration._defaultConfiguration == null)
    org.apache.royale.textLayout.elements.Configuration._defaultConfiguration = new org.apache.royale.textLayout.elements.Configuration();
  return org.apache.royale.textLayout.elements.Configuration._defaultConfiguration;
};


org.apache.royale.textLayout.elements.Configuration.set__defaultConfiguration = function(value) {
  org.apache.royale.textLayout.elements.Configuration._defaultConfiguration = value;
};


org.apache.royale.textLayout.elements.Configuration.get__debugCodeEnabled = function() {
  
  return false;
};


Object.defineProperties(org.apache.royale.textLayout.elements.Configuration, /** @lends {org.apache.royale.textLayout.elements.Configuration} */ {
/**
  * @export
  * @type {org.apache.royale.textLayout.elements.IConfiguration} */
defaultConfiguration: {
get: org.apache.royale.textLayout.elements.Configuration.get__defaultConfiguration,
set: org.apache.royale.textLayout.elements.Configuration.set__defaultConfiguration},
/**
  * @export
  * @type {boolean} */
debugCodeEnabled: {
get: org.apache.royale.textLayout.elements.Configuration.get__debugCodeEnabled}}
);

org.apache.royale.textLayout.elements.Configuration.defaultShiftEnterLevel = org.apache.royale.textLayout.elements.Configuration.SHIFT_RETURN_AS_SOFT;




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Configuration', qName: 'org.apache.royale.textLayout.elements.Configuration', kind: 'class' }], interfaces: [org.apache.royale.textLayout.elements.IConfiguration] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        '|defaultShiftEnterLevel': { type: 'int', get_set: function (/** * */ v) {return v !== undefined ? org.apache.royale.textLayout.elements.Configuration.defaultShiftEnterLevel = v : org.apache.royale.textLayout.elements.Configuration.defaultShiftEnterLevel;}}
      };
    },
    accessors: function () {
      return {
        'manageTabKey': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'manageEnterKey': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'shiftEnterLevel': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'overflowPolicy': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'defaultLinkNormalFormat': { type: 'org.apache.royale.textLayout.formats.ITextLayoutFormat', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'defaultListMarkerFormat': { type: 'org.apache.royale.textLayout.formats.IListMarkerFormat', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'defaultLinkHoverFormat': { type: 'org.apache.royale.textLayout.formats.ITextLayoutFormat', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'defaultLinkActiveFormat': { type: 'org.apache.royale.textLayout.formats.ITextLayoutFormat', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'textFlowInitialFormat': { type: 'org.apache.royale.textLayout.formats.ITextLayoutFormat', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'focusedSelectionFormat': { type: 'org.apache.royale.textLayout.edit.SelectionFormat', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'unfocusedSelectionFormat': { type: 'org.apache.royale.textLayout.edit.SelectionFormat', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'inactiveSelectionFormat': { type: 'org.apache.royale.textLayout.edit.SelectionFormat', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'scrollDragDelay': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'scrollDragPixels': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'scrollPagePercentage': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'scrollMouseWheelMultiplier': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'flowComposerClass': { type: 'Class', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'enableAccessibility': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'releaseLineCreationData': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        '|defaultConfiguration': { type: 'org.apache.royale.textLayout.elements.IConfiguration', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        '|debugCodeEnabled': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'inlineGraphicResolverFunction': { type: 'Function', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'cursorFunction': { type: 'Function', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'}
      };
    },
    methods: function () {
      return {
        '|versionIsAtLeast': { type: 'Boolean', declaredBy: 'org.apache.royale.textLayout.elements.Configuration', parameters: function () { return [ 'int', false ,'int', false ]; }},
        'Configuration': { type: '', declaredBy: 'org.apache.royale.textLayout.elements.Configuration', parameters: function () { return [ 'Boolean', true ]; }},
        'getImmutableClone': { type: 'org.apache.royale.textLayout.elements.IConfiguration', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        'clone': { type: 'org.apache.royale.textLayout.elements.IConfiguration', declaredBy: 'org.apache.royale.textLayout.elements.Configuration'},
        '|getCursorString': { type: 'String', declaredBy: 'org.apache.royale.textLayout.elements.Configuration', parameters: function () { return [ 'org.apache.royale.textLayout.elements.IConfiguration', false ,'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.elements.Configuration.prototype.ROYALE_COMPILE_FLAGS = 10;
