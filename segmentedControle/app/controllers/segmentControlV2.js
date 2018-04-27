// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

//File Level Variables 
var optionTopTabArray;
var SegmentscrollEnabled;

init();

function init() {
	Ti.API.log("[segmentControlV2]>>>[init]");

	$.topsegmentedControl.initSegmentedControl(["  segment(1)  ", "  segment(2)  ", "  segment(3)  ", "  segment(4)  ", "  segment(5)  ", "  segment(6)  ", "  segment(7)  ", "  segment(8)  "], optionTopViewSingleTab, {
		"borderColor" : null,
		"bgColor" : "transparent",
		"selectedBgColor" :  "#DAE4E9" ,
		"labelColor" : "#78909c" ,
		"selectedLabelColor" :  "#78909c",
		horizontalLineColor : "#78909c",
		tabWidth:100,
		"removeAllFlag" : true,
		"widgetType":"scrollingFlatSegments"

	});

	optionTopTabArray = $.topsegmentedControl.getSegmentsArray();
}



function optionTopViewSingleTab(e) {
	Ti.API.log("[segmentControlV2]>>>[optionTopViewSingleTab]");

	Ti.API.log("optionTopViewSingleTab");
	SegmentscrollEnabled = true;
	$.topScrollableView.scrollToView(optionTopTabArray.indexOf(this));
	$.topsegmentedControl.selectTabFromController(this);

}//End of optionViewSingleTab

/**
 * Event Handler: for Scrollable region.
 */
var scrollsegments = true;
function scrollEnd(e) {
	Ti.API.log("[segmentControlV2]>>>[scrollEnd]");

	var scrollEnabled = SegmentscrollEnabled ? false : true;
	$.topsegmentedControl.selectTabFromController(optionTopTabArray[e.currentPage], scrollEnabled);
	setTimeout(function() {
		SegmentscrollEnabled = false;
	}, 1E1);

}//End of scrollEnd

function goToPreviousScreen(e) {
	Ti.API.log("[segmentControl]>>>[goToPreviousScreen]");
	nav.Navigator.openView("index");
	//nav.Navigator.closeView("segmentControl");
}

