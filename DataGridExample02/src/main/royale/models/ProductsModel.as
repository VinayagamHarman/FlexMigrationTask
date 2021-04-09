package main.royale.models
{
	import org.apache.royale.collections.ArrayList;
	import main.royale.products.Product;

	public class ProductsModel
	{
		private var _productList:ArrayList = new ArrayList([
            new Product("ps100","Item1","44","200","main/resources/assets/smallbluerect.jpg","main/resources/assets/download.jpg"),
            new Product("tx200","Item2","5","285","main/resources/assets/smallgreenrect.jpg","main/resources/assets/download.jpg"),
            new Product("rz300","Item3","80","105","main/resources/assets/smallyellowrect.jpg","main/resources/assets/download.jpg"),
            new Product("dh440","Item4","10","340","main/resources/assets/smallredrect.jpg","main/resources/assets/download.jpg"),
            new Product("ps220","Item5","35","190","main/resources/assets/smallorangerect.jpg","main/resources/assets/download.jpg")
		]);

		public function get productList():ArrayList
		{
			return _productList;
		}
		
		private var _productArray:Array = [
			new Product("ps100","Item1","44","200","main/resources/assets/smallbluerect.jpg","main/resources/assets/download.jpg"),
			new Product("tx200","Item2","5","285","main/resources/assets/smallgreenrect.jpg","main/resources/assets/download.jpg"),
			new Product("rz300","Item3","80","105","main/resources/assets/smallyellowrect.jpg","main/resources/assets/download.jpg"),
			new Product("dh440","Item4","10","340","main/resources/assets/smallredrect.jpg","main/resources/assets/download.jpg"),
			new Product("ps220","Item5","35","190","main/resources/assets/smallorangerect.jpg","main/resources/assets/download.jpg")
		];
		
		public function get productArray():Array
		{
			return _productArray;
		}
	}
}