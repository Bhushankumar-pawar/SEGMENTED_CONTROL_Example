// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

//File Level Variables 
var optionTopTabArray;
var SegmentscrollEnabled;

init();

function init() {
	Ti.API.log("[segmentControl]>>>[init]");

	$.topsegmentedControl.initSegmentedControl(["segment 1", "segment 2","segment 3"], optionTopViewSingleTab, {
		"borderColor" :  "#78909c",
		"bgColor" :  "transparent",
		"selectedBgColor" : "#78909c",
		"labelColor" :  "#78909c",
		"selectedLabelColor" : "#FFFFFF",
		"removeAllFlag" : true,
		"widgetType":"borderSegment"
	});

	optionTopTabArray = $.topsegmentedControl.getSegmentsArray();
}



function optionTopViewSingleTab(e) {
	Ti.API.log("[segmentControl]>>>[optionTopViewSingleTab]");

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
	Ti.API.log("[segmentControl]>>>[scrollEnd]");

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

