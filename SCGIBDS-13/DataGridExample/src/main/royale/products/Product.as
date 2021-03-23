
package products
{
	public class Product
	{
		private var _id:String;
		private var _title:String;
		private var _detail:Number;
		private var _image:String;
		private var _sales:Number;
		
		public function Product(id:String,title:String,detail:Number,sales:Number,image:String)
		{
			this._id = id;
			this._title = title;
			this._detail = detail;
			this._sales = sales;
			this._image = image;
		}
		
		public function get id():String
		{
			return _id;
		}
		
		public function get title():String
		{
			return _title;
		}
		
		public function get detail():Number
		{
			return _detail;
		}
		
		public function get image():String
		{
			return _image;
		}
		
		public function get sales():Number
		{
			return _sales;
		}
		
		public function toString():String
		{
			return title;
		}
	}
}
