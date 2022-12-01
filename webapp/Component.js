sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sample/HTMLIsland/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("sample.HTMLIsland.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// store htmlisland propertys in a model
			this.setModel(models.createHTMLIslandModel(), "htmlisland");

			// only use when using the index_option2.html [START]
			this.getModel("htmlisland").setProperty("/propertyA", app.getPropertyA());
			this.getModel("htmlisland").setProperty("/propertyB", app.getPropertyB());
			// only use when using the index_option2.html [END]

			// call the base component's init function - after creating htmlIsland Model - index.html option
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();
		},
		/**
		 * @description function gets called through index.html
		 */
		setIslandPropertys: function (sPropertyA, sPropertyB) {
			this.getModel("htmlisland").setProperty("/propertyA", sPropertyA);
			this.getModel("htmlisland").setProperty("/propertyB", sPropertyB);
		}
	});
});
