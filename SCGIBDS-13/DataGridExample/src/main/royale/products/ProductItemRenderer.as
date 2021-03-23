
package products
{
	import org.apache.royale.html.Image;
	import org.apache.royale.html.supportClasses.DataItemRenderer;

	public class ProductItemRenderer extends DataItemRenderer
	{
		public function ProductItemRenderer()
		{
			super();
		}

		private var image:Image;

		override public function addedToParent():void
		{
			super.addedToParent();

			// add an image and two labels
			image = new Image();
			addElement(image);
		}

		override public function get data():Object
		{
			return super.data;
		}

		override public function set data(value:Object):void
		{
			super.data = value;

			image.src = value.image;
		}

		override public function adjustSize():void
		{
			var cy:Number = this.height/2;

			image.x = 4;
			image.y = cy - 16;
			image.width = 32;
			image.height = 32;
		}
	}
}
