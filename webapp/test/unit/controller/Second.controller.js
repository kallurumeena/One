/*global QUnit*/

sap.ui.define([
	"second/controller/Second.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Second Controller");

	QUnit.test("I should test the Second controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
