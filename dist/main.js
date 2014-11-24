"use strict";angular.module("ngDragDrop",[]).directive("dragAndDrop",["$rootScope",function(r){return{restrict:"A",scope:!0,link:function(e,a){var n="dragged",t="dragover";a.attr("draggable","true"),r.dragSource=null;var d=e.$eval(a.attr("drag-and-drop"));e.enteredTimes=0,e.$watch("enteredTimes",function(r){r>0?a.addClass(t):a.removeClass(t)});var o=e.$eval(a.attr("on-drag")),i=e.$eval(a.attr("on-drop"));a.bind("dragstart",function(){r.dragSource=d,o(r.dragSource),a.addClass(n)}),a.bind("dragend",function(){a.removeClass(n)}),a.bind("dragover",function(r){return r.preventDefault&&r.preventDefault(),!1}),a.bind("dragenter",function(){d!==r.dragSource&&(e.enteredTimes+=1,e.$apply())}),a.bind("dragleave",function(){d!==r.dragSource&&(e.enteredTimes-=1,e.$apply())}),a.bind("drop",function(a){a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation(),e.enteredTimes-=1,i(r.dragSource,d)})}}}]).directive("droppable",["$rootScope",function(){return{restrict:"A",link:function(r,e){var a="dragover";e.bind("dragenter",function(){e.addClass(a)}),e.bind("dragleave",function(){e.removeClass(a)})}}}]);