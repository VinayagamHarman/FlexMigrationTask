/**
 * Generated by Apache Royale Compiler from org/apache/royale/utils/BinaryData.as
 * org.apache.royale.utils.BinaryData
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.utils.BinaryData');
/* Royale Dependency List: org.apache.royale.utils.Endian*/

goog.require('org.apache.royale.utils.IBinaryDataInput');
goog.require('org.apache.royale.utils.IBinaryDataOutput');



/**
 * @royaleignorecoercion ArrayBuffer
 * @constructor
 * @implements {org.apache.royale.utils.IBinaryDataInput}
 * @implements {org.apache.royale.utils.IBinaryDataOutput}
 * @param {Object=} bytes
 */
org.apache.royale.utils.BinaryData = function(bytes) {
  bytes = typeof bytes !== 'undefined' ? bytes : null;
  
  this.org_apache_royale_utils_BinaryData__endian = org.apache.royale.utils.Endian.BIG_ENDIAN;
  this.org_apache_royale_utils_BinaryData__sysEndian = this.org_apache_royale_utils_BinaryData__endian == org.apache.royale.utils.Endian["systemEndian"];
  if (goog.DEBUG) {
    if (bytes && typeof(bytes.byteLength) != "number" && bytes.buffer !== undefined)
      throw new TypeError("BinaryData can only be initialized with ArrayBuffer");
  }
  this.ba = bytes ? bytes : new ArrayBuffer(0);
  this._len = (this.ba.byteLength) >>> 0;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.utils.BinaryData', org.apache.royale.utils.BinaryData);


/**
 *  Utility method to create a BinaryData object from a string.
 *
 *  @asparam {String} str The string to convert to BinaryData as UTF-8 bytes.
 *  @asreturn {BinaryData} The BinaryData instance from the UTF-8 bytes of the string.     *
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.7.0
 * @export
 * @param {string} str
 * @return {org.apache.royale.utils.BinaryData}
 */
org.apache.royale.utils.BinaryData.fromString = function(str) {
  var /** @type {org.apache.royale.utils.BinaryData} */ bd = new org.apache.royale.utils.BinaryData();
  bd.writeUTFBytes(str);
  return bd;
};


/**
 * @private
 * @type {string}
 */
org.apache.royale.utils.BinaryData.prototype.org_apache_royale_utils_BinaryData__endian;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.utils.BinaryData.prototype.org_apache_royale_utils_BinaryData__sysEndian;


/**
 * @protected
 * @type {ArrayBuffer}
 */
org.apache.royale.utils.BinaryData.prototype.ba;


/**
 * @protected
 * @type {number}
 */
org.apache.royale.utils.BinaryData.prototype._position = 0;


/**
 *  create a string representation of the binary data
 * @export
 * @return {string}
 */
org.apache.royale.utils.BinaryData.prototype.toString = function() {
  
  this._position = 0;
  return this.readUTFBytes((this.length) >>> 0);
};


/**
 *  Write a Boolean value (as a single byte) at the current position
 *
 *  @asparam {Boolean} value The boolean value to write into the BinaryData at the current position
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {boolean} value
 */
org.apache.royale.utils.BinaryData.prototype.writeBoolean = function(value) {
  
  this.writeByte((value ? 1 : 0) >> 0);
};


/**
 *  Write a byte of binary data at the current position
 *
 *  @asparam {int} byte The value to write into the BinaryData at the current position
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} byte
 */
org.apache.royale.utils.BinaryData.prototype.writeByte = function(byte) {
  
  if (this._position + 1 > this._len) {
    this.setBufferSize((this._position + 1) >>> 0);
  }
  this.getTypedArray()[this._position++] = byte;
};


/**
 *  Writes a sequence of <code>length</code> bytes from the <code>source</code> BinaryData, starting
 *  at <code>offset</code> (zero-based index) bytes into the source BinaryData. If length
 *  is omitted or is zero, it will represent the entire length of the source
 *  starting from offset. If offset is omitted also, it defaults to zero.
 *
 *  @asparam {BinaryData} source The source BinaryData to write from at the current position
 *  @asparam {uint} offset The optional offset value of the starting bytes to write inside source
 *  @asparam {uint} length The optional length value of the bytes to write from offset in source
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *
 *  @royaleignorecoercion ArrayBuffer
 * @export
 * @param {org.apache.royale.utils.BinaryData} bytes
 * @param {number=} offset
 * @param {number=} length
 */
org.apache.royale.utils.BinaryData.prototype.writeBinaryData = function(bytes, offset, length) {
  offset = typeof offset !== 'undefined' ? offset : 0;
  length = typeof length !== 'undefined' ? length : 0;
  if (!bytes)
    throw new TypeError('Error #2007: Parameter bytes must be non-null.');
  if (bytes == this)
    throw new Error('Parameter bytes must be another instance.');
  
  this.writeBytes(bytes.ba, offset, length);
};


/**
 * @export
 * @param {ArrayBuffer} bytes
 * @param {number=} offset
 * @param {number=} length
 */
org.apache.royale.utils.BinaryData.prototype.writeBytes = function(bytes, offset, length) {
  offset = typeof offset !== 'undefined' ? offset : 0;
  length = typeof length !== 'undefined' ? length : 0;
  if (!bytes)
    throw new TypeError('Error #2007: Parameter bytes must be non-null.');
  if (offset > bytes.byteLength) {
    throw new RangeError('Error #2006: The supplied index is out of bounds.');
  }
  if (length == 0)
    length = (bytes.byteLength - offset) >>> 0; else if (length > bytes.byteLength - offset) {
    throw new RangeError('Error #2006: The supplied index is out of bounds.');
  }
  if (this._position + length > this._len) {
    this.setBufferSize((this._position + length) >>> 0);
  }
  var /** @type {Uint8Array} */ dest = new Uint8Array(this.ba, this._position, length);
  var /** @type {Uint8Array} */ src = new Uint8Array(bytes, offset, length);
  dest.set(src);
  this._position += (length) >> 0;
};


/**
 *  Write a short integer (16 bits, typically represented by a 32 bit int parameter between -32768 and 65535)
 *  of binary data at the current position
 *
 *  @asparam {int} short The value to write into the BinaryData at the current position
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} short
 */
org.apache.royale.utils.BinaryData.prototype.writeShort = function(short) {
  
  if (this._position + 2 > this._len) {
    this.setBufferSize((this._position + 2) >>> 0);
  }
  var /** @type {Uint8Array} */ arr = this.getTypedArray();
  if (this.endian == org.apache.royale.utils.Endian.BIG_ENDIAN) {
    arr[this._position++] = (short & 0x0000ff00) >> 8;
    arr[this._position++] = (short & 0x000000ff);
  } else {
    arr[this._position++] = (short & 0x000000ff);
    arr[this._position++] = (short & 0x0000ff00) >> 8;
  }
};


/**
 *  Write an unsigned int (32 bits) of binary data at the current position
 *
 *  @asparam {uint} val The value to write into the BinaryData at the current position
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} val
 */
org.apache.royale.utils.BinaryData.prototype.writeUnsignedInt = function(val) {
  
  this.writeInt((val) >> 0);
};


/**
 *  Write a signed int (32 bits) of binary data at the current position
 *
 *  @asparam {int} val The value to write into the BinaryData at the current position
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} val
 */
org.apache.royale.utils.BinaryData.prototype.writeInt = function(val) {
  
  if (this._position + 4 > this._len) {
    this.setBufferSize((this._position + 4) >>> 0);
  }
  var /** @type {Uint8Array} */ arr = this.getTypedArray();
  if (this.endian == org.apache.royale.utils.Endian.BIG_ENDIAN) {
    arr[this._position++] = (val & 0xff000000) >> 24;
    arr[this._position++] = (val & 0x00ff0000) >> 16;
    arr[this._position++] = (val & 0x0000ff00) >> 8;
    arr[this._position++] = (val & 0x000000ff);
  } else {
    arr[this._position++] = (val & 0x000000ff);
    arr[this._position++] = (val & 0x0000ff00) >> 8;
    arr[this._position++] = (val & 0x00ff0000) >> 16;
    arr[this._position++] = (val & 0xff000000) >> 24;
  }
};


/**
 *  Writes an IEEE 754 single-precision (32-bit) floating-point number to the
 *  BinaryData at the current position
 *
 *  @asparam {Number} val The value to write into the BinaryData at the current position
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} val
 */
org.apache.royale.utils.BinaryData.prototype.writeFloat = function(val) {
  
  if (this._position + 4 > this._len) {
    this.setBufferSize((this._position + 4) >>> 0);
  }
  this.getDataView().setFloat32(this._position, val, this.org_apache_royale_utils_BinaryData__endian == org.apache.royale.utils.Endian.LITTLE_ENDIAN);
  this._position += 4;
};


/**
 *  Writes an IEEE 754 double-precision (64-bit) floating-point number to the
 *  BinaryData at the current position
 *
 *  @asparam {Number} val The value to write into the BinaryData at the current position
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} val
 */
org.apache.royale.utils.BinaryData.prototype.writeDouble = function(val) {
  
  if (this._position + 8 > this._len) {
    this.setBufferSize((this._position + 8) >>> 0);
  }
  this.getDataView().setFloat64(this._position, val, this.org_apache_royale_utils_BinaryData__endian == org.apache.royale.utils.Endian.LITTLE_ENDIAN);
  this._position += 8;
};


/**
 *  Reads a Boolean value (as a single byte) at the current position.
 *  returns true if the byte was non-zero, false otherwise
 *
 *  @asreturn {Boolean} The boolean value read from the current position
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @return {boolean}
 */
org.apache.royale.utils.BinaryData.prototype.readBoolean = function() {
  
  return Boolean(this.getTypedArray()[this._position++]);
};


/**
 *  Read a signed byte of binary data at the current position
 *
 *  @asreturn {int} An int value in the range -128 to 127, read from the current position
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @return {number}
 */
org.apache.royale.utils.BinaryData.prototype.readByte = function() {
  
  return this.readUnsignedByte() << 24 >> 24;
};


/**
 *  Read an unsigned byte of binary data at the current position
 *
 *  @asreturn {uint} An uint value in the range 0 to 255, read from the current position
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @return {number}
 */
org.apache.royale.utils.BinaryData.prototype.readUnsignedByte = function() {
  
  return (this.getTypedArray()[this._position++]) >>> 0;
};


/**
 *  Reads the number of data bytes, specified by the length parameter, from the BinaryData.
 *  The bytes are read into the BinaryData object specified by the destination parameter,
 *  and the bytes are written into the destination BinaryData starting at the position specified by offset.
 *  If length is omitted or is zero, all bytes are read following the current position to the end
 *  of this BinaryData. If offset is also omitted, it defaults to zero.
 *
 *  @asparam {BinaryData} bytes The destination BinaryData to write bytes into from the current position
 *  @asparam {uint} offset The optional offset value of the starting bytes to write inside destination
 *  @asparam {uint} length The optional length value of the bytes to read
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {org.apache.royale.utils.BinaryData} bytes
 * @param {number=} offset
 * @param {number=} length
 */
org.apache.royale.utils.BinaryData.prototype.readBinaryData = function(bytes, offset, length) {
  offset = typeof offset !== 'undefined' ? offset : 0;
  length = typeof length !== 'undefined' ? length : 0;
  if (!bytes)
    throw new TypeError('Error #2007: Parameter bytes must be non-null.');
  if (bytes == this)
    throw new Error('Parameter bytes must be another instance.');
  
  if (length == 0)
    length = (this._len - this._position) >>> 0;
  bytes.mergeInToArrayBuffer(offset, new Uint8Array(this.ba, this._position, length));
  this._position += (length) >> 0;
};


/**
 * @export
 * @param {ArrayBuffer} bytes
 * @param {number=} offset
 * @param {number=} length
 */
org.apache.royale.utils.BinaryData.prototype.readBytes = function(bytes, offset, length) {
  offset = typeof offset !== 'undefined' ? offset : 0;
  length = typeof length !== 'undefined' ? length : 0;
  if (!bytes)
    throw new TypeError('Error #2007: Parameter bytes must be non-null.');
  if (bytes == this.ba)
    throw new Error('cannot read into internal ArrayBuffer as both destination and source');
  if (length == 0)
    length = (this._len - this._position) >>> 0;
  var /** @type {number} */ extra = (offset + length - bytes.byteLength) >> 0;
  if (extra > 0)
    throw new Error('cannot read into destination ArrayBuffer, insufficient fixed length');
  var /** @type {Uint8Array} */ src = new Uint8Array(this.ba, this._position, length);
  var /** @type {Uint8Array} */ dest = new Uint8Array(bytes, offset, length);
  dest.set(src);
  this._position += (length) >> 0;
};


/**
 *  Read a byte of binary data at the specified index. Does not change the <code>position</code> property.
 *  If an index is out of range (beyond the current length) this will return zero.
 *
 *  @asreturn {uint} A byte value in the range 0-255 from the index
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} idx
 * @return {number}
 */
org.apache.royale.utils.BinaryData.prototype.readByteAt = function(idx) {
  
  return (this.getTypedArray()[idx] >> 0) >>> 0;
};


/**
 * @protected
 * @type {Uint8Array}
 */
org.apache.royale.utils.BinaryData.prototype._typedArray;


/**
 * @protected
 * @return {Uint8Array}
 */
org.apache.royale.utils.BinaryData.prototype.getTypedArray = function() {
  if (this._typedArray == null)
    this._typedArray = new Uint8Array(this.ba);
  return this._typedArray;
};


/**
 * @protected
 * @type {DataView}
 */
org.apache.royale.utils.BinaryData.prototype._dataView;


/**
 * @protected
 * @return {DataView}
 */
org.apache.royale.utils.BinaryData.prototype.getDataView = function() {
  if (!this._dataView)
    this._dataView = new DataView(this.ba);
  return this._dataView;
};


/**
 *  Writes a byte of binary data at the specified index. Does not change the <code>position</code> property.
 *  This is a method for optimzed writes with no range checking.
 *  If the specified index is out of range, it can throw an error.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} idx
 * @param {number} byte
 */
org.apache.royale.utils.BinaryData.prototype.writeByteAt = function(idx, byte) {
  
  if (idx >= this._len) {
    this.setBufferSize((idx + 1) >>> 0);
  }
  this.getTypedArray()[idx] = byte;
};


/**
 *  Read a short int of binary data at the current position
 *
 *  @asreturn {int} An int value in the range -32768 to 32767, read from the current position
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @return {number}
 */
org.apache.royale.utils.BinaryData.prototype.readShort = function() {
  
  return this.readUnsignedShort() << 16 >> 16;
};


/**
 *  Read an unsigned int (32bit) of binary data at the current position
 *
 *  @asreturn {uint} A uint value, read from the current position
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @return {number}
 */
org.apache.royale.utils.BinaryData.prototype.readUnsignedInt = function() {
  
  var /** @type {Uint8Array} */ arr = this.getTypedArray();
  if (this.endian == org.apache.royale.utils.Endian.BIG_ENDIAN) {
    return (((arr[this._position++] << 24) >>> 0) + (arr[this._position++] << 16) + (arr[this._position++] << 8) + arr[this._position++]) >>> 0;
  } else {
    return (arr[this._position++] + (arr[this._position++] << 8) + (arr[this._position++] << 16) + ((arr[this._position++] << 24) >>> 0)) >>> 0;
  }
};


/**
 *  Read an unsigned short (16bit) of binary data at the current position
 *
 *  @asreturn {uint} A uint value in the range 0 to 65535, read from the current position
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @return {number}
 */
org.apache.royale.utils.BinaryData.prototype.readUnsignedShort = function() {
  
  var /** @type {Uint8Array} */ arr = this.getTypedArray();
  if (this.endian == org.apache.royale.utils.Endian.BIG_ENDIAN) {
    return ((arr[this._position++] << 8) + arr[this._position++]) >>> 0;
  } else {
    return (arr[this._position++] + (arr[this._position++] << 8)) >>> 0;
  }
};


/**
 *  Read a signed int (32bit) of binary data at the current position
 *
 *  @asreturn {int} An int value, read from the current position
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @return {number}
 */
org.apache.royale.utils.BinaryData.prototype.readInt = function() {
  
  return this.readUnsignedInt() << 32 >> 32;
};


/**
 *  Reads an IEEE 754 single-precision (32-bit) floating-point number from the BinaryData.
 *
 *  @asreturn {Number} A Number value, read from the current position
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @return {number}
 */
org.apache.royale.utils.BinaryData.prototype.readFloat = function() {
  
  var /** @type {number} */ ret = this.getDataView().getFloat32(this._position, this.org_apache_royale_utils_BinaryData__endian == org.apache.royale.utils.Endian.LITTLE_ENDIAN);
  this._position += 4;
  return ret;
};


/**
 *  Reads an IEEE 754 double-precision (64-bit) floating-point number from the BinaryData.
 *
 *  @asreturn {Number} A Number value, read from the current position
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @return {number}
 */
org.apache.royale.utils.BinaryData.prototype.readDouble = function() {
  
  var /** @type {number} */ ret = this.getDataView().getFloat64(this._position, this.org_apache_royale_utils_BinaryData__endian == org.apache.royale.utils.Endian.LITTLE_ENDIAN);
  this._position += 8;
  return ret;
};


/**
 * @protected
 * @type {number}
 */
org.apache.royale.utils.BinaryData.prototype._len = 0;


/**
 * @protected
 * @param {number} newSize
 */
org.apache.royale.utils.BinaryData.prototype.setBufferSize = function(newSize) {
  var /** @type {number} */ n = this._len;
  if (n != newSize) {
    var /** @type {Uint8Array} */ newView = new Uint8Array(newSize);
    var /** @type {Uint8Array} */ oldView = new Uint8Array(this.ba, 0, Math.min(newSize, n));
    newView.set(oldView);
    this.ba = newView.buffer;
    if (this._position > newSize)
      this._position = (newSize) >> 0;
    this._typedArray = newView;
    this._dataView = null;
    this._len = newSize;
  }
};


/**
 *  A convenience method to extend the length of the BinaryData
 *  so you can efficiently write more bytes to it. Not all
 *  browsers have a way to auto-resize a binary
 *  data as you write data to the binary data buffer
 *  and resizing in large chunks is generally more
 *  efficient anyway. Preallocating bytes to write into
 *  is also more efficient on the swf target.
 *
 *  @asparam extra The number of additional bytes.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} extra
 */
org.apache.royale.utils.BinaryData.prototype.growBuffer = function(extra) {
  
  this.setBufferSize((this._len + extra) >>> 0);
};


/**
 *  Reads a UTF-8 string from the BinaryData.
 *  The string is assumed to be prefixed with an unsigned short indicating the length in bytes.
 *  The <code>position</code> is advanced to the first byte following the string's bytes.
 *
 *  @asreturn {String} The utf-8 decoded string
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.7.0
 * @export
 * @return {string}
 */
org.apache.royale.utils.BinaryData.prototype.readUTF = function() {
  
  var /** @type {number} */ bytes = this.readUnsignedShort();
  return this.readUTFBytes(bytes);
};


/**
 *  Reads a sequence of UTF-8 bytes specified by the length parameter
 *  from the BinaryData and returns a string.
 *  The <code>position</code> is advanced to the first byte following the string's bytes.
 *
 *  @asparam {uint} length An unsigned integer indicating the length of the UTF-8 bytes.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.7.0
 * @export
 * @param {number} length
 * @return {string}
 */
org.apache.royale.utils.BinaryData.prototype.readUTFBytes = function(length) {
  var /** @type {number} */ c3 = 0;
  var /** @type {number} */ c4 = 0;
  var /** @type {number} */ c1 = 0;
  var /** @type {number} */ c2 = 0;
  
  if (this._position + length > this._len) {
    throw new Error('Error #2030: End of file was encountered.');
  }
  var /** @type {Uint8Array} */ bytes = new Uint8Array(this.ba, this._position, length);
  if ('TextDecoder' in window) {
    var /** @type {TextDecoder} */ decoder = new TextDecoder('utf-8');
    this._position += (length) >> 0;
    return decoder.decode(bytes);
  }
  var /** @type {Array} */ out = [];
  var /** @type {number} */ pos = 0;
  var /** @type {number} */ c = 0;
  //var /** @type {number} */ c1 = 0;
  //var /** @type {number} */ c2 = 0;
  //var /** @type {number} */ c3 = 0;
  //var /** @type {number} */ c4 = 0;
  while (pos < bytes.length) {
    c1 = (bytes[pos++]) >> 0;
    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      c2 = (bytes[pos++]) >> 0;
      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
    } else if (c1 > 239 && c1 < 365) {
      c2 = (bytes[pos++]) >> 0;
      c3 = (bytes[pos++]) >> 0;
      c4 = (bytes[pos++]) >> 0;
      var /** @type {number} */ u = (((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000) >> 0;
      out[c++] = String.fromCharCode(0xD800 + (u >> 10));
      out[c++] = String.fromCharCode(0xDC00 + (u & 1023));
    } else {
      c2 = (bytes[pos++]) >> 0;
      c3 = (bytes[pos++]) >> 0;
      out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
    }
  }
  this._position += (length) >> 0;
  return out.join('');
};


/**
 *  Writes a UTF-8 string to the byte stream.
 *  The length of the UTF-8 string in bytes is written first, as a 16-bit unsigned integer,
 *  followed by the bytes representing the characters of the string.
 *  If the byte length of the string is larger than 65535 this will throw a RangeError
 *  The <code>position</code> is advanced to the first byte following the string's bytes.
 *
 *  @asparam {String} str The string value to be written.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.7.0
 * @export
 * @param {string} str
 */
org.apache.royale.utils.BinaryData.prototype.writeUTF = function(str) {
  
  var /** @type {Uint8Array} */ utcBytes = this.getUTFBytes(str, true);
  this._position = (this.mergeInToArrayBuffer((this._position) >>> 0, utcBytes)) >> 0;
};


/**
 *  Writes a UTF-8 string to the BinaryData. Similar to the writeUTF() method,
 *  but writeUTFBytes() does not prefix the string with a 16-bit length word, and
 *  therefore also permits strings longer than 65535 bytes (note: byte length will not
 *  necessarily be the same as string length because some characters can be
 *  multibyte characters).
 *
 *  @asparam {String} str The string value to be written.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.7.0
 * @export
 * @param {string} str
 */
org.apache.royale.utils.BinaryData.prototype.writeUTFBytes = function(str) {
  
  var /** @type {Uint8Array} */ utcBytes = this.getUTFBytes(str, false);
  this._position = (this.mergeInToArrayBuffer((this._position) >>> 0, utcBytes)) >> 0;
};


/**
 * @protected
 * @param {number} offset
 * @param {Uint8Array} newBytes
 * @return {number}
 */
org.apache.royale.utils.BinaryData.prototype.mergeInToArrayBuffer = function(offset, newBytes) {
  var /** @type {number} */ newContentLength = (newBytes.length) >>> 0;
  var /** @type {Uint8Array} */ dest;
  var /** @type {number} */ mergeUpperBound = (offset + newContentLength) >>> 0;
  if (mergeUpperBound > this._len) {
    dest = new Uint8Array(mergeUpperBound);
    if (this._len) {
      var /** @type {number} */ copyOffset = (Math.min(offset, this._len)) >>> 0;
      if (copyOffset > 0) {
        dest.set(new Uint8Array(this.ba, 0, copyOffset));
      }
    }
    dest.set(newBytes, offset);
    this.ba = dest.buffer;
    this._typedArray = dest;
    this._dataView = null;
    this._len = mergeUpperBound;
  } else {
    dest = new Uint8Array(this.ba, offset, newContentLength);
    dest.set(newBytes);
  }
  return mergeUpperBound;
};


/**
 * @protected
 * @param {string} str
 * @param {boolean} prependLength
 * @return {Uint8Array}
 */
org.apache.royale.utils.BinaryData.prototype.getUTFBytes = function(str, prependLength) {
  var /** @type {number} */ c = 0;
  var /** @type {Uint8Array} */ bytes;
  if ('TextEncoder' in window) {
    var /** @type {TextEncoder} */ encoder = new TextEncoder('utf-8');
    bytes = encoder.encode(str);
  } else {
    var /** @type {Array} */ out = [];
    var /** @type {number} */ p = 0;
    //var /** @type {number} */ c = 0;
    for (var /** @type {number} */ i = 0; i < str.length; i++) {
      c = (str.charCodeAt(i)) >> 0;
      if (c < 128) {
        out[p++] = c;
      } else if (c < 2048) {
        out[p++] = (c >> 6) | 192;
        out[p++] = (c & 63) | 128;
      } else if (((c & 0xFC00) == 0xD800) && (i + 1) < str.length && ((str.charCodeAt(i + 1) & 0xFC00) == 0xDC00)) {
        c = (0x10000 + ((c & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF)) >> 0;
        out[p++] = (c >> 18) | 240;
        out[p++] = ((c >> 12) & 63) | 128;
        out[p++] = ((c >> 6) & 63) | 128;
        out[p++] = (c & 63) | 128;
      } else {
        out[p++] = (c >> 12) | 224;
        out[p++] = ((c >> 6) & 63) | 128;
        out[p++] = (c & 63) | 128;
      }
    }
    bytes = new Uint8Array(out);
  }
  if (prependLength) {
    var /** @type {number} */ len = (bytes.length) >>> 0;
    if (len > 0xffff) {
      throw new RangeError("UTF max string length of 65535 bytes exceeded : BinaryData.writeUTF");
    }
    var /** @type {Uint8Array} */ temp = new Uint8Array(bytes.length + 2);
    temp.set(bytes, 2);
    new Uint16Array(temp.buffer, 0, 1)[0] = this.org_apache_royale_utils_BinaryData__sysEndian ? len : (((len & 0xff00) >> 8) | ((len & 0xff) << 8));
    bytes = temp;
  }
  return bytes;
};


org.apache.royale.utils.BinaryData.prototype.get__array = function() {
  return this.getTypedArray();
};


org.apache.royale.utils.BinaryData.prototype.get__endian = function() {
  
  return this.org_apache_royale_utils_BinaryData__endian;
};


org.apache.royale.utils.BinaryData.prototype.set__endian = function(value) {
  if (value == org.apache.royale.utils.Endian.BIG_ENDIAN || value == org.apache.royale.utils.Endian.LITTLE_ENDIAN) {
    this.org_apache_royale_utils_BinaryData__endian = value;
    this.org_apache_royale_utils_BinaryData__sysEndian = value == org.apache.royale.utils.Endian["systemEndian"];
    
  }
};


org.apache.royale.utils.BinaryData.prototype.get__data = function() {
  return this.ba;
};


org.apache.royale.utils.BinaryData.prototype.get__length = function() {
  
  return (this._len) >> 0;
};


org.apache.royale.utils.BinaryData.prototype.set__length = function(value) {
  
  this.setBufferSize((value) >>> 0);
};


org.apache.royale.utils.BinaryData.prototype.get__bytesAvailable = function() {
  
  return (this._position < this._len ? this._len - this._position : 0) >>> 0;
};


org.apache.royale.utils.BinaryData.prototype.get__position = function() {
  
  return (this._position) >>> 0;
};


org.apache.royale.utils.BinaryData.prototype.set__position = function(value) {
  
  this._position = (value) >> 0;
};


Object.defineProperties(org.apache.royale.utils.BinaryData.prototype, /** @lends {org.apache.royale.utils.BinaryData.prototype} */ {
/**
  * @export
  * @type {Uint8Array} */
array: {
get: org.apache.royale.utils.BinaryData.prototype.get__array},
/**
  * @export
  * @type {string} */
endian: {
get: org.apache.royale.utils.BinaryData.prototype.get__endian,
set: org.apache.royale.utils.BinaryData.prototype.set__endian},
/**
  * @export
  * @type {Object} */
data: {
get: org.apache.royale.utils.BinaryData.prototype.get__data},
/**
  * @export
  * @type {number} */
length: {
get: org.apache.royale.utils.BinaryData.prototype.get__length,
set: org.apache.royale.utils.BinaryData.prototype.set__length},
/**
  * @export
  * @type {number} */
bytesAvailable: {
get: org.apache.royale.utils.BinaryData.prototype.get__bytesAvailable},
/**
  * @export
  * @type {number} */
position: {
get: org.apache.royale.utils.BinaryData.prototype.get__position,
set: org.apache.royale.utils.BinaryData.prototype.set__position}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.utils.BinaryData.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'BinaryData', qName: 'org.apache.royale.utils.BinaryData', kind: 'class' }], interfaces: [org.apache.royale.utils.IBinaryDataInput, org.apache.royale.utils.IBinaryDataOutput] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.utils.BinaryData.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'array': { type: 'Uint8Array', access: 'readonly', declaredBy: 'org.apache.royale.utils.BinaryData'},
        'endian': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.utils.BinaryData'},
        'data': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.royale.utils.BinaryData'},
        'length': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.utils.BinaryData'},
        'bytesAvailable': { type: 'uint', access: 'readonly', declaredBy: 'org.apache.royale.utils.BinaryData'},
        'position': { type: 'uint', access: 'readwrite', declaredBy: 'org.apache.royale.utils.BinaryData'}
      };
    },
    methods: function () {
      return {
        'BinaryData': { type: '', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'Object', true ]; }},
        '|fromString': { type: 'org.apache.royale.utils.BinaryData', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'String', false ]; }},
        'toString': { type: 'String', declaredBy: 'org.apache.royale.utils.BinaryData'},
        'writeBoolean': { type: 'void', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'Boolean', false ]; }},
        'writeByte': { type: 'void', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'int', false ]; }},
        'writeBinaryData': { type: 'void', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'org.apache.royale.utils.BinaryData', false ,'uint', true ,'uint', true ]; }},
        'writeBytes': { type: 'void', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'ArrayBuffer', false ,'uint', true ,'uint', true ]; }},
        'writeShort': { type: 'void', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'int', false ]; }},
        'writeUnsignedInt': { type: 'void', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'uint', false ]; }},
        'writeInt': { type: 'void', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'int', false ]; }},
        'writeFloat': { type: 'void', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'Number', false ]; }},
        'writeDouble': { type: 'void', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'Number', false ]; }},
        'readBoolean': { type: 'Boolean', declaredBy: 'org.apache.royale.utils.BinaryData'},
        'readByte': { type: 'int', declaredBy: 'org.apache.royale.utils.BinaryData'},
        'readUnsignedByte': { type: 'uint', declaredBy: 'org.apache.royale.utils.BinaryData'},
        'readBinaryData': { type: 'void', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'org.apache.royale.utils.BinaryData', false ,'uint', true ,'uint', true ]; }},
        'readBytes': { type: 'void', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'ArrayBuffer', false ,'uint', true ,'uint', true ]; }},
        'readByteAt': { type: 'uint', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'uint', false ]; }},
        'writeByteAt': { type: 'void', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'uint', false ,'int', false ]; }},
        'readShort': { type: 'int', declaredBy: 'org.apache.royale.utils.BinaryData'},
        'readUnsignedInt': { type: 'uint', declaredBy: 'org.apache.royale.utils.BinaryData'},
        'readUnsignedShort': { type: 'uint', declaredBy: 'org.apache.royale.utils.BinaryData'},
        'readInt': { type: 'int', declaredBy: 'org.apache.royale.utils.BinaryData'},
        'readFloat': { type: 'Number', declaredBy: 'org.apache.royale.utils.BinaryData'},
        'readDouble': { type: 'Number', declaredBy: 'org.apache.royale.utils.BinaryData'},
        'growBuffer': { type: 'void', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'uint', false ]; }},
        'readUTF': { type: 'String', declaredBy: 'org.apache.royale.utils.BinaryData'},
        'readUTFBytes': { type: 'String', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'uint', false ]; }},
        'writeUTF': { type: 'void', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'String', false ]; }},
        'writeUTFBytes': { type: 'void', declaredBy: 'org.apache.royale.utils.BinaryData', parameters: function () { return [ 'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.utils.BinaryData.prototype.ROYALE_COMPILE_FLAGS = 10;
