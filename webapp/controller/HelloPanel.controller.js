sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	], function (Controller,MessageToast) {
		"use strict";
		return Controller.extend("demo.wt.controller.HelloPanel", {
			onInit : function()  {
			},
			onShowHello : function() {
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel().getProperty("/recipient/name");
				var Msg = oBundle.getText("helloMsg", [sRecipient]);
				MessageToast.show(Msg);
			},
			onOpenDialog : function() {
				this.getOwnerComponent().openHelloDialog();
			}
		});
	});