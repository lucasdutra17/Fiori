sap.ui.define(["sap/ui/core/UIComponent",
"sap/ui/model/json/JSONModel",
"sap/ui/model/resource/ResourceModel",
"demo/wt/controller/HelloDialog"
], function(UIComponent,JSONModel,ResourceModel,HelloDialog) {
	"use strict";
	return UIComponent.extend("demo.wt.Component", {
		metadata : {
			manifest: "json"
		},
		init : function () {
			UIComponent.prototype.init.apply(this,arguments);
			//JSON Model
			var oData = {
				recipient : {
					name : "Lucas Dutra"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
			
			//Dialog
			this._helloDialog = new HelloDialog(this.getAggregation("rootControl"));
		},
		openHelloDialog : function() {
			this._helloDialog.open();
		}                                                   
	});
});