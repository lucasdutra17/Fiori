sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
	], function (Controller) {
		"use strict";
		return Controller.extend("demo.wt.controller.App", {
			onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
		});
	});