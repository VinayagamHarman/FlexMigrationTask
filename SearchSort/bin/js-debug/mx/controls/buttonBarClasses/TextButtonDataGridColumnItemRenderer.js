/**
 * Generated by Apache Royale Compiler from mx/controls/buttonBarClasses/TextButtonDataGridColumnItemRenderer.as
 * mx.controls.buttonBarClasses.TextButtonDataGridColumnItemRenderer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.controls.buttonBarClasses.TextButtonDataGridColumnItemRenderer');
/* Royale Dependency List: mx.controls.dataGridClasses.DataGridColumn,mx.core.UIComponent,mx.core.mx_internal,org.apache.royale.html.DataGridButtonBar,org.apache.royale.html.beads.DataGridView,org.apache.royale.utils.Language,XML*/

goog.require('org.apache.royale.html.supportClasses.TextButtonItemRenderer');



/**
 * @constructor
 * @extends {org.apache.royale.html.supportClasses.TextButtonItemRenderer}
 */
mx.controls.buttonBarClasses.TextButtonDataGridColumnItemRenderer = function() {
  mx.controls.buttonBarClasses.TextButtonDataGridColumnItemRenderer.base(this, 'constructor');
};
goog.inherits(mx.controls.buttonBarClasses.TextButtonDataGridColumnItemRenderer, org.apache.royale.html.supportClasses.TextButtonItemRenderer);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.controls.buttonBarClasses.TextButtonDataGridColumnItemRenderer', mx.controls.buttonBarClasses.TextButtonDataGridColumnItemRenderer);


/**
 * @export
 * @override
 */
mx.controls.buttonBarClasses.TextButtonDataGridColumnItemRenderer.prototype.updateButtonLabelFromData = function() {
  var /** @type {string} */ s = this.data ? org.apache.royale.utils.Language.as(this.data, mx.controls.dataGridClasses.DataGridColumn).headerText : "";
  if (this.data) {
    var /** @type {mx.controls.dataGridClasses.DataGridColumn} */ column = org.apache.royale.utils.Language.as(this.data, mx.controls.dataGridClasses.DataGridColumn);
    var /** @type {mx.core.UIComponent} */ dg = column.http_$$www_adobe_com$2006$flex$mx$internal__owner;
    if (this.index == org.apache.royale.utils.Language.as(org.apache.royale.utils.Language.as(dg.view, org.apache.royale.html.beads.DataGridView).header, org.apache.royale.html.DataGridButtonBar).selectedIndex) {
      s += " " + (column.sortDescending ? "▼" : "▲");
    }
  }
  this.text = s;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.controls.buttonBarClasses.TextButtonDataGridColumnItemRenderer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TextButtonDataGridColumnItemRenderer', qName: 'mx.controls.buttonBarClasses.TextButtonDataGridColumnItemRenderer', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.controls.buttonBarClasses.TextButtonDataGridColumnItemRenderer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {};
};
/**
 * @const
 * @type {number}
 */
mx.controls.buttonBarClasses.TextButtonDataGridColumnItemRenderer.prototype.ROYALE_COMPILE_FLAGS = 26;
