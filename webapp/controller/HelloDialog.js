sap.ui.define(["sap/ui/base/Object"], function(UI5Object) {
	"use strict";
	return UI5Object.extend("demo.wt.controller.HelloDialog", {
		constructor : function(oView) {
			this._oView = oView;
		},
		
		open : function() {
			var oView = this._oView;
			var oDialog = oView.byId("helloDialog");
			
			if (!oDialog) {
				var oFragmentController = {
					onCloseDialog : function() {
						oDialog.close();
					}
				};
				oDialog = sap.ui.xmlfragment(oView.getId(), "demo.wt.view.HelloDialog", oFragmentController);
				oView.addDependent(oDialog);
			}
			oDialog.open();
		}
	});
});