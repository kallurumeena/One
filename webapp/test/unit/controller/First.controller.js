/*global QUnit*/

sap.ui.define([
	"first/controller/First.controller"
], function (Controller) {
	"use strict";

	QUnit.module("First Controller");

	QUnit.test("I should test the First controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
