/**
 * Generated by Apache Royale Compiler from spark/layouts/supportClasses/Block.as
 * spark.layouts.supportClasses.Block
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('spark.layouts.supportClasses.Block');
/* Royale Dependency List: spark.layouts.supportClasses.LinearLayoutVector,org.apache.royale.utils.Language,XML*/




/**
 * @constructor
 */
spark.layouts.supportClasses.Block = function() {
  
  this.sizes = new (org.apache.royale.utils.Language.synthVector('Number'))(spark.layouts.supportClasses.LinearLayoutVector.BLOCK_SIZE, true);
  this.defaultCount = spark.layouts.supportClasses.LinearLayoutVector.BLOCK_SIZE;
  ;
  for (var /** @type {number} */ i = 0; i < spark.layouts.supportClasses.LinearLayoutVector.BLOCK_SIZE; i++)
    this.sizes[i] = NaN;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('spark.layouts.supportClasses.Block', spark.layouts.supportClasses.Block);


/**
 * @const
 * @type {Array.<number>}
 */
spark.layouts.supportClasses.Block.prototype.sizes;


/**
 * @type {number}
 */
spark.layouts.supportClasses.Block.prototype.sizesSum = 0;


/**
 * @type {number}
 */
spark.layouts.supportClasses.Block.prototype.defaultCount;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
spark.layouts.supportClasses.Block.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Block', qName: 'spark.layouts.supportClasses.Block', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
spark.layouts.supportClasses.Block.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'Block': { type: '', declaredBy: 'spark.layouts.supportClasses.Block'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
spark.layouts.supportClasses.Block.prototype.ROYALE_COMPILE_FLAGS = 10;
