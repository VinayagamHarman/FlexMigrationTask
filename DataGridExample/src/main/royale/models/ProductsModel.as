
package models
{
	import org.apache.royale.collections.ArrayList;
	import products.Product;

	public class ProductsModel
	{
		private var _productList:ArrayList = new ArrayList([
            new Product("ps100","Item1",44,200,"assets/smallbluerect.jpg"),
            new Product("tx200","Item2",5,285,"assets/smallgreenrect.jpg"),
            new Product("rz300","Item3",80,105,"assets/smallyellowrect.jpg"),
            new Product("dh440","Item4",10,340,"assets/smallredrect.jpg"),
            new Product("ps220","Item5",35,190,"assets/smallorangerect.jpg")
		]);

		public function get productList():ArrayList
		{
			return _productList;
		}
		
		private var _productArray:Array = [
			new Product("ps100","Item1",44,200,"assets/smallbluerect.jpg"),
			new Product("tx200","Item2",5,285,"assets/smallgreenrect.jpg"),
			new Product("rz300","Item3",80,105,"assets/smallyellowrect.jpg"),
			new Product("dh440","Item4",10,340,"assets/smallredrect.jpg"),
			new Product("ps220","Item5",35,190,"assets/smallorangerect.jpg")
		];
		
		public function get productArray():Array
		{
			return _productArray;
		}
	}
}
