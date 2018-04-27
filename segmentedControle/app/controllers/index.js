Alloy.Globals.mainWinObj = $.mainWin;

init();

function init() {
	initializeCore();
}//end of init

function initializeCore() {
	nav.Navigator.init({
		"mainWin" : $.mainWin,
		"contentView" : $.contentView
	});
}//end of initializeCore


function segmentControlClick(e) {
	Ti.API.log("[index]>>[segmentControlClick]");

	nav.Navigator.openView("segmentControl");


}

function segmentControlV1Click(e) {
	Ti.API.log("[index]>>[segmentControlClick]");
 nav.Navigator.openView("segmentControlV1");
	

}

function segmentControlV2Click(e) {
	Ti.API.log("[index]>>[segmentControlClick]");
	 nav.Navigator.openView("segmentControlV2");

	

}

$.mainWin.open();