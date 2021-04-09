package main.royale.products
{
	public class Product
	{
		private var _id:String;
		private var _title:String;
		private var _detail:String;
		private var _image:String;
		private var _sales:String;
		private var _image1:String;
		
		public function Product(id:String,title:String,detail:String,sales:String,image:String,image1:String)
		{
			this._id = id;
			this._title = title;
			this._detail = detail;
			this._sales = sales;
			this._image = image;
			this._image1 = image1;

		}
		
		public function get id():String
		{
			return _id;
		}
		
		public function get title():String
		{
			return _title;
		}
		
		public function get detail():String
		{
			return _detail;
		}
		
		public function get image():String
		{
			return _image;
		}
		public function get image1():String
		{
			return _image1;
		}
		
		public function get sales():String
		{
			return _sales;
		}
		
		public function toString():String
		{
			return title;
		}
	}
}