(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

/**
 * Loop button
 *
 * This feature creates a loop button in the control bar to toggle its behavior. It will restart media once finished
 * if activated
 */

// Translations (English required)

mejs.i18n.en["mejs.loop"] = "Toggle Loop";

// Feature configuration
Object.assign(mejs.MepDefaults, {
	/**
  * @type {?String}
  */
	loopText: null
});

Object.assign(MediaElementPlayer.prototype, {
	/**
  * Feature constructor.
  *
  * Always has to be prefixed with `build` and the name that will be used in MepDefaults.features list
  * @param {MediaElementPlayer} player
  * @param {$} controls
  * @param {$} layers
  * @param {HTMLElement} media
  */
	buildloop: function buildloop(player, controls) {
		var t = this,
		    loopTitle = mejs.Utils.isString(t.options.loopText) ? t.options.loopText : mejs.i18n.t('mejs.loop'),
		    loop = $("<div class=\"" + t.options.classPrefix + "button " + t.options.classPrefix + "loop-button " + ((player.options.loop ? t.options.classPrefix + "loop-on" : t.options.classPrefix + "loop-off") + "\">") + ("<button type=\"button\" aria-controls=\"" + t.id + "\" title=\"" + loopTitle + "\" aria-label=\"" + loopTitle + "\" tabindex=\"0\"></button>") + "</div>");

		if (t.featurePosition['loop'] !== undefined) {
			loop.insertAfter(controls.children(":eq(" + (t.featurePosition['loop'] - 1) + ")"));
		} else {
			loop.appendTo(controls);
			t.featurePosition['loop'] = controls.children("." + t.options.classPrefix + "loop-button").index();
		}

		// add a click toggle event
		loop.click(function () {
			player.options.loop = !player.options.loop;
			if (player.options.loop) {
				loop.removeClass(t.options.classPrefix + "loop-off").addClass(t.options.classPrefix + "loop-on");
			} else {
				loop.removeClass(t.options.classPrefix + "loop-on").addClass(t.options.classPrefix + "loop-off");
			}
		});
	}
});

},{}]},{},[1]);
