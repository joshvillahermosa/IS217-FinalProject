/*
*
*
*
*/


(function ($){	

	//Model
	var Picture = Backbone.Model.extend ({
		defaults: {
			id: null,
			src: null
		},

		CheckPointModel: function(){
			console.log('Check:--Model Loaded--');
		}
	});
	
	var Pictures = Backbone.Collection.extend({
		model: Picture,

		CheckPointCollection: function(){
			console.log('Check:--Collection Loaded --');
		}
	});
	
	//View
	var AppView = Backbone.View.extend ({
		el: $("body"),
		CheckPointView: function(){
			console.log('Check: --AppView loaded--');
		},

		LoadImages: function(){
			console.log('Loading Images');
			var View = document.getElementById("Slideshow");

				for (var i = 1; i <= 3; i++){
				var Img = document.createElement("img");
				Img.setAttribute("id", "Local"+i);
				Img.setAttribute("src", "../IMG/ProjectImg/"+i+".jpg");
				Img.setAttribute("style", "height: 300px; width: 300px;");
				var ImgStored = new Picture({id: i, src: "../IMG/ProjectImg/"+i+".jpg"});
				var Piks = new Pictures([ImgStored]);
				console.log('Added '+ImgStored);
				console.log(Piks);
				View.appendChild(Img);
			}
			console.log('Finished Loading Images');
		},

		LoadFlickrImg: function(){
			var FlickrPics = new Array();
			var FlickrUrl = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";//"http://api.flickr.com/services/rest/?method=flickr.photos.getRecent";
			var FlickrTag =document.FlickrTag.Flickr.value;

			// Functon 3
			/*
			$.getJSON( 
				FlickrUrl, {
   					tags: FlickrTag,
    				tagmode: "any",
    				format: "json"
  				}
  			)
			  .done(function( data ) {
			    $.each( data.items, function( i, item ) {
			      $( "<img/>" ).attr( "src", item.media.m ).appendTo( "#images" );
			      if ( i === 3 ) {
			        return false;
			      }
			    });
			  });

			 */
			 //Function 2
			$.getJSON (
				FlickrUrl, {
					tags: FlickrTag,
					tagmode: "any",
					format: "json"
				}
			)
			.done(function (data){
				console.log('Success Connection');
				$.each ( data.items, function (i, item) {
					$("<img>").attr( {
						id: 'Flickr'+i,
						src: item.media.m
					} ).appendTo("#FlickrSlideShow");
					if (i === 19) { //cHANEGS LAOD IMAGE
						return false;
					};
					$("<img>").attr( {
						id: 'Flickr'+i,
						src: item.media.m
					} ).appendTo("#Photocollection");
					if (i === 19) { //cHANEGS LAOD IMAGE
						return false;
					};
				console.log('Success Images on page');
				});
			});
			

			/*Function Example 1
			$.getJSON(
					{
						url: FlickrUrl,
						data: {
							api_key: FlickrKey,
							format: 'json',
							nojsoncallback: '1'
						}
					}
				)
				.done(function(data){
					$.each(data.items, function(i, items){
						$("<img/>").attr("src", item.media.m),appendTo("#images");
						if(i === 3) {
							return false;
						}
					});
				});*/
				//Second 'sucess' function
				/*.done(function(data){
					console.log('Success');
					/*
					var FlickrPix = JSON && JSON.parse(data) || $.parseJSON(data);
                    FlickrPics = FlickrPix.photos.photo.photo;
					console.log(FlickrPics);

					console.log(data);
					console.log('Add to Array');
				})*/
			//console.log($.ajax);
			//http://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=c962d09a1e1d9b0b59fc9a254c20bcf4&format=json&nojsoncallback=1
		},

		//SAVE CODE BEFORE EDIT IDOT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		FlickrSlideRoll: function(){
			console.log('SlideRoll Flicker starting...');
			//$("#Flickr0").show("fade", 500); //Loads image
			//$("#Flcikr0").delay(5000).hide("slide", {direction: 'left'}, 500); //Keeps in 'delay' then slides out by 'hide'
			//NOTE: The time units are in miliseconds so 5 seconds = 5000 miliseconds (1 second = 1000 miliseconds)
			
			//Variables for sliding images
			var FSliderIMGCount = 19;//$("img").size(); //<! --- Should match with 'i' in the Flickr Load Vairable!
			var FImageCount = 0; 
			
			//Sets of the sliding images after image 1
			setInterval(function (){
				console.log('Flickr Loop'+FImageCount);
				$("#Flickr"+FImageCount).show("slide", {direction: 'right'}, 500);
			 	$("#Flickr"+FImageCount).delay(5000).hide("slide", {direction: 'left'}, 500);
			 	
			 	//Creates the Loop
			 	if (FImageCount == FSliderIMGCount){
			 			FImageCount = 0; // Should match the begining funciton
			 		}
			 		else{
			 			FImageCount = FImageCount + 1;
			 		}
			 }, 6000);// <-- This is the total of all the time units in the function above.
		},

		/*
		RESET CODE
		FlickrSlideRoll: function(){
			console.log('SlideRoll Flicker starting...');
			$("#0").show("fade", 500); //Loads image
			$("#0").delay(5000).hide("slide", {direction: 'left'}, 500); //Keeps in 'delay' then slides out by 'hide'
			//NOTE: The time units are in miliseconds so 5 seconds = 5000 miliseconds (1 second = 1000 miliseconds)
			
			//Variables for sliding images
			var SliderIMGCount = $("img").size();
			var ImageCount = 1;
			
			//Sets of the sliding images after image 1
			setInterval(function (){
				console.log('Flickr Loop'+ImageCount);
				$("#"+ImageCount).show("slide", {direction: 'right'}, 500);
			 	$("#"+ImageCount).delay(5000).hide("slide", {direction: 'left'}, 500);
			 	
			 	//Creates the Loop
			 	if (ImageCount == SliderIMGCount){
			 			ImageCount = 0;
			 		}
			 		else{
			 			ImageCount = ImageCount + 1;
			 		}
			 }, 6000);// <-- This is the total of all the time units in the function above.
		},
		*/

		SlideRoll: function(){
			console.log('SlideRoll starting...');
			//$("#Local1").show("fade", 500); //Loads image
			//$("#Local1").delay(5000).hide("slide", {direction: 'left'}, 500); //Keeps in 'delay' then slides out by 'hide'
			//NOTE: The time units are in miliseconds so 5 seconds = 5000 miliseconds (1 second = 1000 miliseconds)
			
			//Variables for sliding images
			var LSliderIMGCount = $("img").size();
			var LImageCount = 1;
			
			//Sets of the sliding images after image 1
			setInterval(function (){
				console.log('Slide Loop'+LImageCount);
				$("#Local"+LImageCount).show("slide", {direction: 'right'}, 500);
			 	$("#Local"+LImageCount).delay(5000).hide("slide", {direction: 'left'}, 500);
			 	
			 	//Creates the Loop
			 	if (LImageCount == LSliderIMGCount){
			 			LImageCount = 1;
			 		}
			 		else{
			 			LImageCount = LImageCount + 1;
			 		}
			 }, 6000);// <-- This is the total of all the time units in the function above.
		}
	});

	/*var API = Backbone.Router.extend ({
		routes: {
			"home": "CheckPointRouter"
		},

		CheckPointRouter: function(){
			console.log('Check:--Router Loaded--');
		}
	});*/

	//Constructors
	SlideShow = new AppView;
	Pic = new Picture;
	Pics = new Pictures;
	//Api = new API;

	//Checkpoint Loaders
	SlideShow.CheckPointView();
	Pic.CheckPointModel();
	Pics.CheckPointCollection();
	//Api.CheckPointRouter();

	//Functions
	SlideShow.LoadImages();
	//SlideShow.LoadFlickrImg();
	SlideShow.SlideRoll();
	//SlideShow.FlickrSlideRoll();
})(jQuery);
