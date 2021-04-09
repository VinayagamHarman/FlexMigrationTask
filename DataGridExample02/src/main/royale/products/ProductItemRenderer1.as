
package main.royale.products
{
	import org.apache.royale.html.Image;
	import org.apache.royale.html.supportClasses.DataItemRenderer;

	public class ProductItemRenderer1 extends DataItemRenderer
	{
		public function ProductItemRenderer1()
		{
			super();
		}

		private var image1:Image;

		override public function addedToParent():void
		{
			super.addedToParent();

			// add an image and two labels
			image1 = new Image();
			addElement(image1);
		}

		override public function get data():Object
		{
			return super.data;
		}

		override public function set data(value:Object):void
		{
			super.data = value;

			image1.src = value.image;
		}

		override public function adjustSize():void
		{
			var cy:Number = this.height/2;

			image1.x = 4;
			image1.y = cy - 16;
			image1.width = 32;
			image1.height = 32;
		}
	}
}