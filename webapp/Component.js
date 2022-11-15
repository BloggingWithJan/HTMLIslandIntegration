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
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// store htmlisland propertys in an model
			this.setModel(models.createHTMLIslandModel(), "htmlisland");
			this.getModel("htmlisland").setProperty("/propertyA", app.getPropertyA());
			this.getModel("htmlisland").setProperty("/propertyB", app.getPropertyB());

		},
		// setIslandPropertys: function (sPropertyA, sPropertyB) {
		// 	this.oCompModel.setProperty("/propertyA", sPropertyA);
		// 	this.oCompModel.setProperty("/propertyB", sPropertyB);
		// }
	});
});