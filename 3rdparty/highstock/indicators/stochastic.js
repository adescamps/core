/*
  Highcharts JS v7.0.1 (2018-12-19)

 Indicator series type for Highstock

 (c) 2010-2018 Pawe Fus

 License: www.highcharts.com/license
*/
(function(d){"object"===typeof module&&module.exports?module.exports=d:"function"===typeof define&&define.amd?define(function(){return d}):d("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(d){var w=function(a){var c=a.reduce;return{minInArray:function(a,e){return c(a,function(a,h){return Math.min(a,h[e])},Number.MAX_VALUE)},maxInArray:function(a,e){return c(a,function(a,h){return Math.max(a,h[e])},-Number.MAX_VALUE)},getArrayExtremes:function(a,e,d){return c(a,function(a,g){return[Math.min(a[0],
g[e]),Math.max(a[1],g[d])]},[Number.MAX_VALUE,-Number.MAX_VALUE])}}}(d),z=function(a){var c=a.each,d=a.merge,e=a.error,u=a.defined,h=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(g){var a=[];c(this.pointArrayMap,function(b){b!==g&&a.push("plot"+b.charAt(0).toUpperCase()+b.slice(1))});return a},toYData:function(g){var a=[];c(this.pointArrayMap,function(b){a.push(g[b])});return a},translate:function(){var a=this,
l=a.pointArrayMap,b=[],n,b=a.getTranslatedLinesNames();h.prototype.translate.apply(a,arguments);c(a.points,function(g){c(l,function(c,l){n=g[c];null!==n&&(g[b[l]]=a.yAxis.toPixels(n,!0))})})},drawGraph:function(){var a=this,l=a.linesApiNames,b=a.points,n=b.length,t=a.options,x=a.graph,y={options:{gapSize:t.gapSize}},m=[],p=a.getTranslatedLinesNames(a.pointValKey),f;c(p,function(a,c){for(m[c]=[];n--;)f=b[n],m[c].push({x:f.x,plotX:f.plotX,plotY:f[a],isNull:!u(f[a])});n=b.length});c(l,function(b,c){m[c]?
(a.points=m[c],t[b]?a.options=d(t[b].styles,y):e('Error: "There is no '+b+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),a.graph=a["graph"+b],h.prototype.drawGraph.call(a),a["graph"+b]=a.graph):e('Error: "'+b+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});a.points=b;a.options=t;a.graph=x;h.prototype.drawGraph.call(a)}}}(d);(function(a,c,d){var e=a.merge,u=a.isArray,
h=a.seriesTypes.sma,g=c.getArrayExtremes;a.seriesType("stochastic","sma",{params:{periods:[14,3]},marker:{enabled:!1},tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e\x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3e%K: {point.y}\x3cbr/\x3e%D: {point.smoothed}\x3cbr/\x3e'},smoothedLine:{styles:{lineWidth:1,lineColor:void 0}},dataGrouping:{approximation:"averages"}},a.merge(d,{nameComponents:["periods"],nameBase:"Stochastic",pointArrayMap:["y","smoothed"],parallelArrays:["x",
"y","smoothed"],pointValKey:"y",linesApiNames:["smoothedLine"],init:function(){h.prototype.init.apply(this,arguments);this.options=e({smoothedLine:{styles:{lineColor:this.color}}},this.options)},getValues:function(a,b){var c=b.periods[0];b=b.periods[1];var d=a.xData,e=(a=a.yData)?a.length:0,l=[],m=[],p=[],f,q,r=null,v,k;if(e<c||!u(a[0])||4!==a[0].length)return!1;for(k=c-1;k<e;k++)f=a.slice(k-c+1,k+1),v=g(f,2,1),q=v[0],f=a[k][3]-q,q=v[1]-q,f=f/q*100,m.push(d[k]),p.push([f,null]),k>=c-1+(b-1)&&(r=h.prototype.getValues.call(this,
{xData:m.slice(-b),yData:p.slice(-b)},{period:b}),r=r.yData[0]),l.push([d[k],f,r]),p[p.length-1][1]=r;return{values:l,xData:m,yData:p}}}))})(d,w,z)});
//# sourceMappingURL=stochastic.js.map
