sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sample/HTMLIsland/model/models"
], function (Controller, models) {
	"use strict";

	return Controller.extend("sample.HTMLIsland.controller.View1", {
		onInit: function () {
			// store htmlisland propertys in a model
			this.getView().setModel(models.createHTMLIslandModel(), "htmlislandoption3"); //index_option3 variant
		},
		fireEvent: function () {
			app.fireServerEvent("event");
		},
		/**
		 * @description function gets called through index_option3.html
		 */
		setIslandPropertys: function (sPropertyA, sPropertyB) {
			this.getView().getModel("htmlislandoption3").setProperty("/propertyA", sPropertyA);
			this.getView().getModel("htmlislandoption3").setProperty("/propertyB", sPropertyB);
		}
	});
});
