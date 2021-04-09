/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/compose/SWFContext.as
 * org.apache.royale.textLayout.compose.SWFContext
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.compose.SWFContext');
/* Royale Dependency List: */
goog.provide('org.apache.royale.textLayout.compose.SWFContext.GlobalSWFContext');
/* Royale Static Dependency List: org.apache.royale.textLayout.compose.ISWFContext*/

goog.require('org.apache.royale.textLayout.compose.ISWFContext');
goog.require('XML');



/**
 * @constructor
 * @implements {org.apache.royale.textLayout.compose.ISWFContext}
 */
org.apache.royale.textLayout.compose.SWFContext = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.compose.SWFContext', org.apache.royale.textLayout.compose.SWFContext);


/**
 * @export
 * @param {Function} fn
 * @param {Object} thisArg
 * @param {Array} argArray
 * @param {boolean=} returns
 * @return {*}
 */
org.apache.royale.textLayout.compose.SWFContext.prototype.callInContext = function(fn, thisArg, argArray, returns) {
  returns = typeof returns !== 'undefined' ? returns : true;
};


org.apache.royale.textLayout.compose.SWFContext.get__globalSWFContext = function() {
  return org.apache.royale.textLayout.compose.SWFContext.GlobalSWFContext.globalSWFContext;
};


Object.defineProperties(org.apache.royale.textLayout.compose.SWFContext, /** @lends {org.apache.royale.textLayout.compose.SWFContext} */ {
/**
  * @export
  * @type {org.apache.royale.textLayout.compose.ISWFContext} */
globalSWFContext: {
get: org.apache.royale.textLayout.compose.SWFContext.get__globalSWFContext}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.compose.SWFContext.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SWFContext', qName: 'org.apache.royale.textLayout.compose.SWFContext', kind: 'class' }], interfaces: [org.apache.royale.textLayout.compose.ISWFContext] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.compose.SWFContext.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        '|globalSWFContext': { type: 'org.apache.royale.textLayout.compose.ISWFContext', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.compose.SWFContext'}
      };
    },
    methods: function () {
      return {
        'callInContext': { type: '*', declaredBy: 'org.apache.royale.textLayout.compose.SWFContext', parameters: function () { return [ 'Function', false ,'Object', false ,'Array', false ,'Boolean', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.compose.SWFContext.prototype.ROYALE_COMPILE_FLAGS = 10;



/**
 * @constructor
 * @implements {org.apache.royale.textLayout.compose.ISWFContext}
 */
org.apache.royale.textLayout.compose.SWFContext.GlobalSWFContext = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.compose.SWFContext.GlobalSWFContext', org.apache.royale.textLayout.compose.SWFContext.GlobalSWFContext);


/**
 * @export
 * @nocollapse
 * @const
 * @type {org.apache.royale.textLayout.compose.SWFContext.GlobalSWFContext}
 */
org.apache.royale.textLayout.compose.SWFContext.GlobalSWFContext.globalSWFContext;


/**
 * @export
 * @param {Function} fn
 * @param {Object} thisArg
 * @param {Array} argsArray
 * @param {boolean=} returns
 * @return {*}
 */
org.apache.royale.textLayout.compose.SWFContext.GlobalSWFContext.prototype.callInContext = function(fn, thisArg, argsArray, returns) {
  returns = typeof returns !== 'undefined' ? returns : true;
  
  if (returns)
    return fn.apply(thisArg, argsArray);
  fn.apply(thisArg, argsArray);
};

org.apache.royale.textLayout.compose.SWFContext.GlobalSWFContext.globalSWFContext = new org.apache.royale.textLayout.compose.SWFContext.GlobalSWFContext();




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.compose.SWFContext.GlobalSWFContext.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'GlobalSWFContext', qName: 'org.apache.royale.textLayout.compose.SWFContext.GlobalSWFContext', kind: 'class' }], interfaces: [org.apache.royale.textLayout.compose.ISWFContext] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.compose.SWFContext.GlobalSWFContext.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'GlobalSWFContext': { type: '', declaredBy: 'org.apache.royale.textLayout.compose.SWFContext.GlobalSWFContext'},
        'callInContext': { type: '*', declaredBy: 'org.apache.royale.textLayout.compose.SWFContext.GlobalSWFContext', parameters: function () { return [ 'Function', false ,'Object', false ,'Array', false ,'Boolean', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.compose.SWFContext.GlobalSWFContext.prototype.ROYALE_COMPILE_FLAGS = 10;
