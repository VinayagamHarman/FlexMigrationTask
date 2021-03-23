
package models
{
	import mx.collections.HierarchicalData;
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import mx.controls.Button;
	//import org.apache.royale.jewel.supportClasses.button.SimpleButton;
	//import org.apache.royale.jewel.Button;
	//import org.apache.royale.jewel.DataGrid;
	
	public class MyModel extends EventDispatcher
	{
	public var button:Button = new Button();
		public function MyModel()
		{
			treeData = new HierarchicalData(store);
		//	treeData.childrenField = "children";
			
			button.label = "Button";
		
			gridData = new HierarchicalData(process);
			gridData.childrenField = "children";
			//dg = new HierarchicalData();
		}
		public static function getChildren1(obj:Object):HierarchicalData{
			//var dg:DataGrid = new DataGrid();
			//dg.columns = ["title", "artist", "length"];
			//dg.dataProvider = MyModel.treeData.getChildren(obj)[0];
			//return dg;
			dg = new HierarchicalData(obj);
			return dg;
			
		}
		public static var dg:HierarchicalData;
		public static var treeData:HierarchicalData;

		public static var store:Object = { title:"That's Entertainment",
        		children:[
        			{title:"My Music", artist:"", length:"",
        				children:[
        					{title:"Language and Perspective", artist:"Bad Suns", length:"31:47",
        					    children:[
        					    	{title:"Matthew James", artist:"Bad Suns (feat BS)", length:"3:24"},
        					    	{title:"We Move Like the Ocean", artist:"Bad Suns", length:"3:56"},
        					    	{title:"Cardiac Arrest", artist:"Bad Suns", length:"3:15"}
        					    ]},
        					{title:"Strange Desire", artist:"Bleachers", length:"28:56",
        						children:[
        							{title:"Wild Heart", artist:"Bleachers", length:"4:15"},
        							{title:"Rollercoaster", artist:"Bleachers", length:"3:39"},
        							{title:"Shadow", artist:"Bleachers", length:"3:46"},
        							{title:"I Wanna Get Better", artist:"Bleachers", length:"4:23"}
        						]},
        						{title:"When you see yourself", artist:"Kings of Leon", length:"30:47",
        					    children:[
        					    	{title:"Jones", artist:"Bad Suns (feat BS)", length:"6:24"},
        					    	{title:"The Sea", artist:"Bad Suns", length:"9:56"},
        					    	{title:"AirShift", artist:"Bad Suns", length:"6:15"}
        					    ]},
        					    {title:"Evermore", artist:"TS", length:"39:47",
        					    children:[
        					    	{title:"Willow", artist:"Sun (feat TS)", length:"6:24"},
        					    	{title:"Gold", artist:"one d", length:"9:56"},
        					    	{title:"AirShift", artist:"Bad Suns", length:"6:15"}
        					    ]}
        				]},
        			{title:"My Books", artist:"", length:"",
        				children:[
        					{title:"Wizard of Oz", artist:"Frank L Baum", length: "1024",
        						children:[
        							{title:"So this is Kansas?", artist:"Frank L Baum", length:"82"},
        							{title:"A Might Dusty Here", artist:"Frank L Baum", length:"63"},
        							{title:"Is that a Tornado?", artist:"Frank L Baum", length:"103"}
        						]},
        					{title:"Favorite Book #2", artist: "The Writer", length: "4095",
        						children:[
        							{title:"Chapter 1", artist: "The Writer", length:"15"},
        							{title:"Chapter 2", artist: "The Writer", length:"86"},
        							{title:"Chapter 3", artist: "The Writer", length:"104"},
        							{title:"Chapter 4", artist: "The Writer", length:"99"}
        						]}
        				]}
        		]};
		
		public var gridData:HierarchicalData;
		
		private var process:Object = {title:"Projects",
									  children:[
										  {title:"Layout Branch", status:"in progress", hours:120, children:[
											  {title:"Accordion", status:"finalized", hours:42},
											  {title:"Multiview", status:"finalized", hours:34}
										  ]},
										  {title:"Data branch", status:"in progress", hours:150, children:[
											  {title:"List", status:"finalized", hours:50}
										  ]},
										  {title:"Calendar", status:"planning", hours:0}
									  ]};

	}
}
