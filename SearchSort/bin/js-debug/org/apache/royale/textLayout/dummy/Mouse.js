/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/dummy/Mouse.as
 * org.apache.royale.textLayout.dummy.Mouse
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.dummy.Mouse');
/* Royale Dependency List: org.apache.royale.textLayout.dummy.MouseCursorData,XML*/




/**
 * @constructor
 */
org.apache.royale.textLayout.dummy.Mouse = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.dummy.Mouse', org.apache.royale.textLayout.dummy.Mouse);


/**
 * @export
 * @nocollapse
 * @type {string}
 */
org.apache.royale.textLayout.dummy.Mouse.cursor;


/**
 * @export
 * @param {string} name
 * @param {org.apache.royale.textLayout.dummy.MouseCursorData} cursor
 */
org.apache.royale.textLayout.dummy.Mouse.registerCursor = function(name, cursor) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.dummy.Mouse.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Mouse', qName: 'org.apache.royale.textLayout.dummy.Mouse', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.dummy.Mouse.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        '|cursor': { type: 'String', get_set: function (/** * */ v) {return v !== undefined ? org.apache.royale.textLayout.dummy.Mouse.cursor = v : org.apache.royale.textLayout.dummy.Mouse.cursor;}}
      };
    },
    methods: function () {
      return {
        '|registerCursor': { type: 'void', declaredBy: 'org.apache.royale.textLayout.dummy.Mouse', parameters: function () { return [ 'String', false ,'org.apache.royale.textLayout.dummy.MouseCursorData', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.dummy.Mouse.prototype.ROYALE_COMPILE_FLAGS = 10;
