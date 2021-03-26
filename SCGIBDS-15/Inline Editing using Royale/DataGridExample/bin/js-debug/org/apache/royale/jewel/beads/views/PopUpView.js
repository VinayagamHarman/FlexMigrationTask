/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/beads/views/PopUpView.as
 * org.apache.royale.jewel.beads.views.PopUpView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.beads.views.PopUpView');
/* Royale Dependency List: org.apache.royale.core.IChild,org.apache.royale.core.IStrand,org.apache.royale.core.UIBase,org.apache.royale.jewel.PopUp,org.apache.royale.jewel.supportClasses.popup.PopUpContent,org.apache.royale.utils.UIUtils,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.BeadViewBase');
goog.require('org.apache.royale.core.IBeadView');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.6
 * @constructor
 * @extends {org.apache.royale.core.BeadViewBase}
 * @implements {org.apache.royale.core.IBeadView}
 */
org.apache.royale.jewel.beads.views.PopUpView = function() {
  org.apache.royale.jewel.beads.views.PopUpView.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.beads.views.PopUpView, org.apache.royale.core.BeadViewBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.beads.views.PopUpView', org.apache.royale.jewel.beads.views.PopUpView);


/**
 * @royaleignorecoercion org.apache.royale.core.UIBase
 * @protected
 * @return {org.apache.royale.jewel.PopUp}
 */
org.apache.royale.jewel.beads.views.PopUpView.prototype.getHost = function() {
  return org.apache.royale.utils.Language.as(this._strand, org.apache.royale.jewel.PopUp);
};


/**
 * @private
 * @type {org.apache.royale.jewel.supportClasses.popup.PopUpContent}
 */
org.apache.royale.jewel.beads.views.PopUpView.prototype.org_apache_royale_jewel_beads_views_PopUpView__popUp;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.jewel.beads.views.PopUpView.prototype.org_apache_royale_jewel_beads_views_PopUpView__showingPopup;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.jewel.beads.views.PopUpView.prototype.org_apache_royale_jewel_beads_views_PopUpView__popUpVisible;


/**
 * @private
 */
org.apache.royale.jewel.beads.views.PopUpView.prototype.org_apache_royale_jewel_beads_views_PopUpView_prepareForPopUp = function() {
  if (this.org_apache_royale_jewel_beads_views_PopUpView__popUp) {
    this.org_apache_royale_jewel_beads_views_PopUpView__popUp.addClass("open");
    document.body.classList.add("viewport");
  }
};


org.apache.royale.jewel.beads.views.PopUpView.prototype.get__content = function() {
  return this.getHost().content;
};


org.apache.royale.jewel.beads.views.PopUpView.prototype.set__strand = function(value) {
  org.apache.royale.jewel.beads.views.PopUpView.superClass_.set__strand.apply(this, [ value] );
};


org.apache.royale.jewel.beads.views.PopUpView.prototype.get__popUp = function() {
  return this.org_apache_royale_jewel_beads_views_PopUpView__popUp;
};


org.apache.royale.jewel.beads.views.PopUpView.prototype.get__popUpVisible = function() {
  return this.org_apache_royale_jewel_beads_views_PopUpView__popUpVisible;
};


org.apache.royale.jewel.beads.views.PopUpView.prototype.set__popUpVisible = function(value) {
  if (this.org_apache_royale_jewel_beads_views_PopUpView__showingPopup)
    return;
  if (value != this.org_apache_royale_jewel_beads_views_PopUpView__popUpVisible) {
    this.org_apache_royale_jewel_beads_views_PopUpView__showingPopup = true;
    this.org_apache_royale_jewel_beads_views_PopUpView__popUpVisible = value;
    if (value) {
      this.org_apache_royale_jewel_beads_views_PopUpView__popUp = new org.apache.royale.jewel.supportClasses.popup.PopUpContent();
      this.org_apache_royale_jewel_beads_views_PopUpView__popUp.addElement(org.apache.royale.utils.Language.as(this.content, org.apache.royale.core.IChild));
      org.apache.royale.utils.UIUtils.addPopUp(this.org_apache_royale_jewel_beads_views_PopUpView__popUp, this.getHost());
      setTimeout(org.apache.royale.utils.Language.closure(this.org_apache_royale_jewel_beads_views_PopUpView_prepareForPopUp, this, 'org_apache_royale_jewel_beads_views_PopUpView_prepareForPopUp'), 300);
    } else {
      org.apache.royale.utils.UIUtils.removePopUp(this.org_apache_royale_jewel_beads_views_PopUpView__popUp);
      document.body.classList.remove("viewport");
      this.org_apache_royale_jewel_beads_views_PopUpView__popUp = null;
    }
  }
  this.org_apache_royale_jewel_beads_views_PopUpView__showingPopup = false;
};


Object.defineProperties(org.apache.royale.jewel.beads.views.PopUpView.prototype, /** @lends {org.apache.royale.jewel.beads.views.PopUpView.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.UIBase} */
content: {
get: org.apache.royale.jewel.beads.views.PopUpView.prototype.get__content},
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.jewel.beads.views.PopUpView.prototype.set__strand},
/**
  * @export
  * @type {org.apache.royale.jewel.supportClasses.popup.PopUpContent} */
popUp: {
get: org.apache.royale.jewel.beads.views.PopUpView.prototype.get__popUp},
/**
  * @export
  * @type {boolean} */
popUpVisible: {
get: org.apache.royale.jewel.beads.views.PopUpView.prototype.get__popUpVisible,
set: org.apache.royale.jewel.beads.views.PopUpView.prototype.set__popUpVisible}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.beads.views.PopUpView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'PopUpView', qName: 'org.apache.royale.jewel.beads.views.PopUpView', kind: 'class' }], interfaces: [org.apache.royale.core.IBeadView] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.beads.views.PopUpView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'content': { type: 'org.apache.royale.core.UIBase', access: 'readonly', declaredBy: 'org.apache.royale.jewel.beads.views.PopUpView'},
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.jewel.beads.views.PopUpView'},
        'popUp': { type: 'org.apache.royale.jewel.supportClasses.popup.PopUpContent', access: 'readonly', declaredBy: 'org.apache.royale.jewel.beads.views.PopUpView'},
        'popUpVisible': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.beads.views.PopUpView'}
      };
    },
    methods: function () {
      return {
        'PopUpView': { type: '', declaredBy: 'org.apache.royale.jewel.beads.views.PopUpView'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.views.PopUpView.prototype.ROYALE_COMPILE_FLAGS = 10;
