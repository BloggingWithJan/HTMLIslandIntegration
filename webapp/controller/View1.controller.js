sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sample.HTMLIsland.controller.View1", {
		onInit: function () {

		},
		fireEvent: function () {
			app.fireServerEvent("event");
		},
		// setIslandPropertys: function (sPropertyA, sPropertyB) {
		// 	this.getOwnerComponent().getModel("htmlisland").setProperty("/propertyA", sPropertyA);
		// 	this.getOwnerComponent().getModel("htmlisland").setProperty("/propertyB", sPropertyB);
		// }
	});
});