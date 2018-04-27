Alloy.Globals = {
	/**
	 * Navigation Widget using for routing controllers
	 * @type {Object}
	 */
	Navigator : {

		//Current View in action
		currentView : null,

		//Current Controller in action
		currentController : null,

		//Main Container View
		contentView : null,

		//variable which will hold the name of previously opended controller
		previousControllerName : null,

		// Added for main Window Object
		mainWin : null,

		// Adding array variable to handle previous views
		previousViewArray : [],
		currentControllernameArray : [],
		/**
		 * Function use to initialize this Variables
		 * @params {Object} _params
		 */
		init : function(_params) {
			Ti.API.trace("[core] >> [init]");

			//null check for params
			if (_.isEmpty(_params)) {
				Ti.API.error("[core] >> [init] >> core init failed");
				return;
			}
			this.mainWin = _params.mainWin;
			this.currentView = null;
			this.currentController = null;
			this.contentView = _params.contentView;
			this.previousControllerName = null;
			this.previousViewArray = [];
		},
		/**
		 * Function use to open new controller on handheld devices
		 * @params {String} _controller : name of Controller
		 * @params {Object} _options :  params that are passed to the next controller
		 */
		openView : function(_controller, _options, isEndOfFlow, isGoingBack) {
			Ti.API.trace("[core] >> [openView]");
             this.currentControllernameArray.push(_controller);
			//so that hardware back butoon don't work while opening the new controller
			//check current controller name and it should not same as previous one
			if (_controller && this.contentView && (_controller !== this.previousControllerName )) {
				Ti.API.debug("view added :" + _controller);

				//assigning name of the current controller to the previous controller name variable as it is now going to be opened
				this.previousControllerName = null;
				this.previousControllerName = _controller;
				
				//destroying previous controller
				if (this.currentController)
					this.currentController.destroy();

				//assigning newly created controller object to the current controller reference
				this.currentController = Alloy.createController(_controller, _options);

				//adding previous view on to the previous view array
				if (this.currentView) {
					this.previousViewArray[this.previousViewArray.length] = this.currentView;
				}
				//getting new view from the current controller and assigning it to current view reference
				this.currentView = this.currentController.getView();

				//assigning default height and width to the current view
				this.currentView.width = "100%";
				this.currentView.height = "100%";

				if (_controller != "Ti.APIinView") {
					if (isGoingBack) {
						this.currentView.left = "-100%";
						this.contentView.add(this.currentView);
						var contentView = this.contentView;
						var preView = this.previousView;
						this.currentView.animate({
							left : "0",
							duration : 200
						});
						if (preView) {
							preView.animate({
								left : "100%",
								duration : 200
							}, function() {
								Alloy.Globals.Navigator.destroyViews();
							});
						}

					} else {
						
						
						this.currentView.left = "100%";
						//adding currnt view on to the content View
						this.contentView.add(this.currentView);
						//apply sliding left animation
						this.currentView.animate({
							left : 0,
							duration : 200
						}, function() {
							Alloy.Globals.Navigator.destroyViews();
						});
					}
				} else {
					//adding currnt view on to the content View
					this.contentView.add(this.currentView);
				}

				//removing all views from the previous view array
				if (isEndOfFlow) {
					this.previousViewArray.splice(0, this.previousViewArray.length);
					this.destroyViews();
				}

				
			}
		},
		/*
		 * @desc function which will be used for removing child view from the content view if exists
		 * @parms no params
		 */
		destroyViews : function() {
			Ti.API.trace("[core] >> [destroyViews]",this.contentView.children.length);
			//removing childViews
			if (this.contentView.children) {
				for (var i = this.contentView.children.length -2; i >= 0; i--) {
						this.contentView.remove(this.contentView.children[i]);
					
				}
			};
		} //end of destroyViews
		
		
	}
};
module.exports = Alloy.Globals;
