

#  SEGMENTED CONTROL [![Appcelerator Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://appcelerator.com/titanium/) [![Appcelerator Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://appcelerator.com/alloy/)

This is a widget for the [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html) MVC framework of [Appcelerator](http://www.appcelerator.com)'s [Titanium](http://www.appcelerator.com/platform) platform.

segmented control is a linear set of two or more segments, each of which functions as a mutually exclusive button. Within the control, all segments are equal in width. 

# 3-Types of segmented control: 
* borderSegment
![Alt text](https://github.com/Bhushankumar-pawar/SEGMENTED_CONTROL_Example/blob/master/app/assets/image/borderSegment.png)

</br>

* flatSegment   
![Alt text](https://github.com/Bhushankumar-pawar/SEGMENTED_CONTROL_Example/blob/master/app/assets/image/flatSegment.png)


</br>

* scrollingFlatSegments - Flat segment for more than 4 segments 

![Alt text](https://github.com/Bhushankumar-pawar/SEGMENTED_CONTROL_Example/blob/master/app/assets/image/scrollingFlatSegments.png)


## Installation and usage

### Recommended

```shell
$ gittio install BhushanP.SEGMENTED_CONTROL
```

###Manual method 

* Download this repo (git clone / download zip)
* Copy the widgets/com.skypanther.segmentedcontrol to your project's widgets folder
* Update your app/config.json to add:

```json
"dependencies": {
    "BhushanP.SEGMENTED_CONTROL": "1.0"
}
```
</br>
</br>

[Example](https://github.com/Bhushankumar-pawar/SEGMENTED_CONTROL_Example)
Complete code base and demonstrating the usage of the widget.


In your XML file, add the widget:

```xml
<View id="segmentedView" width="70%" top="10dp" height="35dp" backgroundColor="white">
    <Widget id="topsegmentedControl" src="BhushanP.SEGMENTED_CONTROL" />
</View>
<ScrollableView id="topScrollableView" onScrollend="scrollEnd" top="10dp" height="100%">
    <!-- Add Content views as per your segments. Add onScrollend event if you want to change the state of a segment on scroll change. Please take care content of ScrollableView will match with array passed to  initSegmentedControl function as 1st argument -->
</ScrollableView>
```



Initialize it in the controller:

```javascript
init();

function init() {
	Ti.API.log("[segmentControl]>>>[init]");

	$.topsegmentedControl.initSegmentedControl(["segment 1", "segment 2","segment 3"], optionTopViewSingleTab, {
		"borderColor" :  "#0080B0",
		"bgColor" :  "transparent",
		"selectedBgColor" : "#0080B0",
		"labelColor" :  "#0080B0",
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

}//End of scrollEnde
```



## Styling options

You can set these style options in the js 

|Property|Description|style|Default|
|-------|-------|-----------|------|
|`selectedBgColor`|slected background color of the segment <br/>selected segment|`#0080B0`| '#006BA3'|
|`borderColor` |border color of segment<br/>border of segment |`0080B0` |`#FFFFFF`|
|`bgColor` |background color of the segment  <br/>segment backgroundColor |`transparent` | `transparent` |
|`selectedLabelColor` |color of text on segment<br/>Selected sgements label color | `#FFFFFF`| `white`|
|`widgetType `|type  of segment controll<br/>borderSegment, flatSegment, scrollingFlatSegments | `borderSegment, flatSegment, scrollingFlatSegments ` | `none`|
|`horizontalLineColor` |horizontal line color of segment <br/>applicable for  flatSegment, scrollingFlatSegments  | `#0080B0` | none |
|`tabWidth`|tab width of segment  <br/>applicable for  flatSegment, scrollingFlatSegments  |`100`| Fixed width 

Additionally, most other properties you set on the widget (via its xml tag or id/class selectors) will be passed down to the widget's components.





# Limitations

* Array passed to initSegmentedControl function and child content of ScrollableView view must be same. This Array decides the segments in the widget and ScrollableView's 1st level children are referenced by segments.

Contributions are welcome!

## License

<pre>
Copyright 2017 Bhushankumar Pawar

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
</pre>
