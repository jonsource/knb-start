define(function (require) {

    "use strict";

    var $           = require('jquery'),
        _           = require('underscore'),
        Backbone    = require('backbone'),
        tpl         = require('text!tpl/Map.html'),
        
        template 	= _.template(tpl),
    	map,
    	map_holder;

    return Backbone.View.extend({

        render: function () {
            this.$el.html(template());
            require(['async!http://maps.google.com/maps/api/js?sensor=false!callback'], function(){
            	 
                //Google maps is available and all components are ready to use.
            	console.log('loaded');
                map_holder = document.getElementById('map-holder');
               
                map = new google.maps.Map(map_holder, {
                        center: new google.maps.LatLng(37.4419, -122.1419),
                        zoom: 13,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        navigationControl: true,
                        navigationControlOptions: {
                                style: google.maps.NavigationControlStyle.SMALL
                        }
                });
         
            });
            return this;
        }

    });

});