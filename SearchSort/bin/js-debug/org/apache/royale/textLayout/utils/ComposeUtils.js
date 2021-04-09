/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/utils/ComposeUtils.as
 * org.apache.royale.textLayout.utils.ComposeUtils
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.utils.ComposeUtils');
/* Royale Dependency List: org.apache.royale.textLayout.compose.ComposeState,org.apache.royale.textLayout.compose.IComposer,XML*/




/**
 * @constructor
 */
org.apache.royale.textLayout.utils.ComposeUtils = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.utils.ComposeUtils', org.apache.royale.textLayout.utils.ComposeUtils);


/**
 * @private
 * @type {org.apache.royale.textLayout.compose.IComposer}
 */
org.apache.royale.textLayout.utils.ComposeUtils._sharedComposeState;


/** @asprivate 
 * @export
 * @return {org.apache.royale.textLayout.compose.IComposer}
 */
org.apache.royale.textLayout.utils.ComposeUtils.getComposeState = function() {
  var /** @type {org.apache.royale.textLayout.compose.IComposer} */ rslt = org.apache.royale.textLayout.utils.ComposeUtils._sharedComposeState;
  if (rslt) {
    org.apache.royale.textLayout.utils.ComposeUtils._sharedComposeState = null;
    return rslt;
  }
  return new org.apache.royale.textLayout.compose.ComposeState();
};


/** @asprivate 
 * @export
 * @param {org.apache.royale.textLayout.compose.IComposer} state
 */
org.apache.royale.textLayout.utils.ComposeUtils.releaseComposeState = function(state) {
  state.releaseAnyReferences();
  org.apache.royale.textLayout.utils.ComposeUtils._sharedComposeState = state;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.utils.ComposeUtils.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ComposeUtils', qName: 'org.apache.royale.textLayout.utils.ComposeUtils', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.utils.ComposeUtils.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|getComposeState': { type: 'org.apache.royale.textLayout.compose.IComposer', declaredBy: 'org.apache.royale.textLayout.utils.ComposeUtils'},
        '|releaseComposeState': { type: 'void', declaredBy: 'org.apache.royale.textLayout.utils.ComposeUtils', parameters: function () { return [ 'org.apache.royale.textLayout.compose.IComposer', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.utils.ComposeUtils.prototype.ROYALE_COMPILE_FLAGS = 10;
