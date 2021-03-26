
package models
{
	import mx.collections.ArrayList;
	import products.Products;

	public class ProductsModel
	{
		private var _productList:ArrayList = new ArrayList([
            new Products("ps100","Item1",44,200,"assets/smallbluerect.jpg"),
            new Products("tx200","Item2",5,285,"assets/smallgreenrect.jpg"),
            new Products("rz300","Item3",80,105,"assets/smallyellowrect.jpg"),
            new Products("dh440","Item4",10,340,"assets/smallredrect.jpg"),
            new Products("ps220","Item5",35,190,"assets/smallorangerect.jpg")
		]);

		public function get productList():ArrayList
		{
			return _productList;
		}
		
		private var _productArray:Array = [
			new Products("ps100","Item1",44,200,"assets/smallbluerect.jpg"),
			new Products("tx200","Item2",5,285,"assets/smallgreenrect.jpg"),
			new Products("rz300","Item3",80,105,"assets/smallyellowrect.jpg"),
			new Products("dh440","Item4",10,340,"assets/smallredrect.jpg"),
			new Products("ps220","Item5",35,190,"assets/smallorangerect.jpg")
		];
		
		public function get productArray():Array
		{
			return _productArray;
		}
	}
}
