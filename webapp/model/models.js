sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createHTMLIslandModel: function () {
			var oModel = new JSONModel({
				propertyA: void 0,
				propertyB: void 0
			});
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};
});