/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/supportClasses/TreeItemRenderer.as
 * org.apache.royale.html.supportClasses.TreeItemRenderer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.supportClasses.TreeItemRenderer');
/* Royale Dependency List: org.apache.royale.html.supportClasses.TreeListData,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.html.supportClasses.StringItemRenderer');
goog.require('org.apache.royale.core.IListDataItemRenderer');



/**
 * Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.html.supportClasses.StringItemRenderer}
 * @implements {org.apache.royale.core.IListDataItemRenderer}
 */
org.apache.royale.html.supportClasses.TreeItemRenderer = function() {
  org.apache.royale.html.supportClasses.TreeItemRenderer.base(this, 'constructor');
  this.typeNames += " TreeItemRenderer";
};
goog.inherits(org.apache.royale.html.supportClasses.TreeItemRenderer, org.apache.royale.html.supportClasses.StringItemRenderer);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.supportClasses.TreeItemRenderer', org.apache.royale.html.supportClasses.TreeItemRenderer);


/**
 * @private
 * @type {Object}
 */
org.apache.royale.html.supportClasses.TreeItemRenderer.prototype.org_apache_royale_html_supportClasses_TreeItemRenderer__listData;


org.apache.royale.html.supportClasses.TreeItemRenderer.prototype.get__listData = function() {
  return this.org_apache_royale_html_supportClasses_TreeItemRenderer__listData;
};


org.apache.royale.html.supportClasses.TreeItemRenderer.prototype.set__listData = function(value) {
  this.org_apache_royale_html_supportClasses_TreeItemRenderer__listData = value;
};


org.apache.royale.html.supportClasses.TreeItemRenderer.prototype.set__data = function(value) {
  org.apache.royale.html.supportClasses.TreeItemRenderer.superClass_.set__data.apply(this, [ value] );
  var /** @type {org.apache.royale.html.supportClasses.TreeListData} */ treeListData = org.apache.royale.utils.Language.as(this.listData, org.apache.royale.html.supportClasses.TreeListData);
  var /** @type {string} */ indentSpace = "    ";
  var /** @type {string} */ extraSpace = " ";
  indentSpace = "\u00A0\u00A0\u00A0\u00A0";
  extraSpace = "\u00A0";
  var /** @type {string} */ indent = "";
  for (var /** @type {number} */ i = 0; i < treeListData.depth - 1; i++) {
    indent += indentSpace;
  }
  indent += (treeListData.hasChildren ? (treeListData.isOpen ? "▼" : "▶") : "") + extraSpace;
  this.text = indent + this.text;
};


Object.defineProperties(org.apache.royale.html.supportClasses.TreeItemRenderer.prototype, /** @lends {org.apache.royale.html.supportClasses.TreeItemRenderer.prototype} */ {
/**
  * @export
  * @type {Object} */
listData: {
get: org.apache.royale.html.supportClasses.TreeItemRenderer.prototype.get__listData,
set: org.apache.royale.html.supportClasses.TreeItemRenderer.prototype.set__listData},
/**
  * @export
  * @type {Object} */
data: {
get: org.apache.royale.html.supportClasses.UIItemRendererBase.prototype.get__data,
set: org.apache.royale.html.supportClasses.TreeItemRenderer.prototype.set__data}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.supportClasses.TreeItemRenderer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TreeItemRenderer', qName: 'org.apache.royale.html.supportClasses.TreeItemRenderer', kind: 'class' }], interfaces: [org.apache.royale.core.IListDataItemRenderer] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.supportClasses.TreeItemRenderer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'listData': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TreeItemRenderer', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: '__NoChangeEvent__' } ] } ]; }},
        'data': { type: 'Object', access: 'writeonly', declaredBy: 'org.apache.royale.html.supportClasses.TreeItemRenderer'}
      };
    },
    methods: function () {
      return {
        'TreeItemRenderer': { type: '', declaredBy: 'org.apache.royale.html.supportClasses.TreeItemRenderer'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.supportClasses.TreeItemRenderer.prototype.ROYALE_COMPILE_FLAGS = 10;
