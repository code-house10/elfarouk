$(document).ready(function()
{
   $("a[href*='#PageHeader']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#PageHeader').offset().top }, 600, 'swing');
   });
   var Carousel1Opts =
   {
      delay: 7000,
      duration: 500,
      easing: 'swing',
      mode: 'drop',
      direction: 'up',
      scalemode: 3,
      pagination: true,
      pagination_img_default: 'images/page_default.png',
      pagination_img_active: 'images/page_active.png',
      start: 0
   };
   $("#Carousel1").carouseleffects(Carousel1Opts);
   $("#Carousel1_back a").click(function()
   {
      $('#Carousel1').carouseleffects('prev');
   });
   $("#Carousel1_next a").click(function()
   {
      $('#Carousel1').carouseleffects('next');
   });
   $("a[href*='#LayoutGrid1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid1').offset().top }, 600, 'swing');
   });
   $("a[href*='#LayoutGrid2']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid2').offset().top-10 }, 600, 'swing');
   });
   $("a[href*='#الرئيسية']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_الرئيسية').offset().top }, 600, 'swing');
   });
   $("a[href*='#خدمات_الشركة']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_خدمات_الشركة').offset().top }, 600, 'easeOutQuad');
   });
   $("a[data-rel='PhotoGallery1']").attr('rel', 'PhotoGallery1');
   $("a[rel^='PhotoGallery1']").fancybox({});
   $("a[href*='#فيديوهات_الشركة']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_فيديوهات_الشركة').offset().top }, 600, 'easeOutQuad');
   });
   $("a[href*='#اتصل_بنا']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_اتصل_بنا').offset().top }, 600, 'linear');
   });
   $("#wb_ResponsiveMenu1 ul li a").click(function(event)
   {
      $("#wb_ResponsiveMenu1 input").prop("checked", false);
   });
   $('img[data-src]').lazyload();
});
var map;
var marker;
var geocoder;
function GoogleMapInit(id, latitude, longitude, address) 
{    
   var latlng = new google.maps.LatLng(latitude, longitude);
   var latlngMarker = new google.maps.LatLng(latitude, longitude);
   var mapOptions = 
   {        
      center: latlng,        
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,        
      scrollwheel: true,
      streetViewControl: false,        
      zoom: 17,
      zoomControl: true,        
      zoomControlOptions: { style: google.maps.ZoomControlStyle.SMALL }
   }
   element = document.getElementById(id);
   map = new google.maps.Map(element, mapOptions);   
   marker = new google.maps.Marker({ draggable:true, map: map, position: latlngMarker});   
   geocoder = new google.maps.Geocoder();
   geocoder.geocode({'address': address}, function(results, status) 
   {
      if (status == google.maps.GeocoderStatus.OK) 
      {
         map.setCenter(results[0].geometry.location);
         var marker = new google.maps.Marker(
         {
            map: map, 
            position: results[0].geometry.location
         });
      } 
      else 
      {
        //    alert("Geocode was not successful: " + status);
      }
   });
}
GoogleMapInit('GoogleMaps', 40.7127837, -74.00594130000002, ' ميدان الجيش, باب الشعرية');
