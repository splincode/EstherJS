 /*!
 * EsterJS - JavaScript special function 
 * http://mdes.pro/esther/
 *
 * Copyright 2014, Maxim Ivanov
 * Released under the MIT, BSD, and GPL Licenses.
 */
if("function"!=typeof window.deg)var deg=function(b,c){"number"!=typeof b&&(b=0);a=b*Math.PI/180;cos=Math.cos(a);sin=Math.sin(a);ie="progid:DXImageTransform.Microsoft.Matrix(M11="+cos+", M12="+-sin+",M21="+sin+", M22="+cos+", sizingMethod='auto expand')";cross="rotate("+b+"deg)";e1=c.style;e1.webkitTransform=cross;e1.MozTransform=cross;e1.msTransform=cross;e1.OTransform=cross;e1.transform=cross;e1.filter=ie;e1.zoom="1"};