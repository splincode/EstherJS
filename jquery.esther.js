(function( $ ) {
		  $.fn.deg = function(e) {

			if (typeof(e) != 'number') e=0;
			a = (e * Math.PI) / 180.0;	cos = Math.cos(a);	sin = Math.sin(a);
			ie = 'progid:DXImageTransform.Microsoft.Matrix(M11=' + cos + ', M12=' + (-sin) + ',M21=' + sin + ', M22=' + cos + ', sizingMethod=\'auto expand\')';
			cross = 'rotate('+e+'deg)';
			this.css({
				'-webkit-transform':cross,
				'-moz-transform':cross,
				'-ms-transform':cross,
				'-o-transform':cross,
				'transform':cross,
				'-ms-filter':'"'+ie+'"',
				'filter' : ie,
				'zoom':'1'
			});
			  
			  
			  

		  };
		})(jQuery);
		