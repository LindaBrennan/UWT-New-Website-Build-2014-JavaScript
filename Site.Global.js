/**********************************************
 Blackbaud Design Custom JavaScript
***********************************************
 Client: United Way Toronto
 Author(s): Harrison DeStefano
 Product(s): BBIS
 Created: Feb 18, 2014
 Updated:
***********************************************
 CHANGE LOG 
***********************************************
 mm/dd/yyyy		...
**********************************************/
BBI = {
	UWT: {
		bbis: {
			pageLoad: function() {},
			paneRefresh: function() {
				BBI.UWT.bbis.administration.fixAdminMenuPos();
				BBI.UWT.bbis.foundation.overrideFoundation();
				BBI.UWT.bbis.foundation.fixFoundation();
				BBI.UWT.bbis.foundation.orbitSlideshow();
				BBI.UWT.bbis.parts.quickSearch();
				BBI.UWT.bbis.smartMenus();
				BBI.UWT.bbis.clone.sidebar();
			},
			administration: {
				// Fix positioning of the part menus
				fixAdminMenuPos: function() {
					$('div[id *= "_panelPopup"]').appendTo('body');
					$('div[id *= "_designPaneCloak"]').css({
						"top": "0px",
						"left": "0px"
					});
					$('.DesignPane').css("position", "relative");
				}
			},
			clone: {
				// create copy of the sidebar content for mobile
				sidebar: function() {
					// vars to store our goodies
					var dropSpot, elms;
					// get append location and elms
					dropSpot = $('#landingcontent');
					elms = $('.sidebar .hide-for-small-only').not('#leftnav').children();
					if (elms.length > 0 && dropSpot.length == 1) {
						// iterate over elms and append
						elms.each(function() {
							var html = $(this).html();
							$('<div class="show-for-small-only small-12 columns cloned">' + html + '</div>').appendTo(dropSpot);
						});
					}
				}
			},
			foundation: {
				// Add missing dom elms
				fixFoundation: function() {
					// Add html5 elm
					$('.smallnav').wrap('<aside class="left-off-canvas-menu show-for-medium-down"></aside>');
					// Add off-canvase close
					$('<a class="exit-off-canvas"></a>').insertAfter($('#footer2'));
					// trigger off-canvas
					$('#menubtn, .exit-off-canvas').click(function() {
						// Toggle css class to display the menu
						$('.off-canvas-wrap').toggleClass('move-right');
					});
				},
				// make an orbit slideshow
				orbitSlideshow: function() {
					// run obrbit with our jquery no-conflict eg., $$ 
					if ($$('#slideshow ul li img').length > 0) {
						Foundation.libs.orbit.init();
					}
					// trigger resize event forcing orbit to recalculate 
					$(window).triggerHandler('resize');
				},
				// Remove foundation classes in edit view
				overrideFoundation: function() {
					if (window.location.href.match('templatedesigner') || window.location.href.match('pagedesign')) {
						$('.pagecontainer div').each(function() {
							// Remove hide for medium
							if ($(this).hasClass('hide-for-medium-only')) {
								$(this).removeClass('hide-for-medium-only');
							}
							// Remove hide for medium down
							if ($(this).hasClass('hide-for-medium-down')) {
								$(this).removeClass('hide-for-medium-down');
							}
							// Remove show for large up
							if ($(this).hasClass('show-for-large-up')) {
								$(this).removeClass('show-for-large-up');
							}
							// Remove hide for small only
							if ($(this).hasClass('hide-for-small-only')) {
								$(this).removeClass('hide-for-small-only');
							}
							// Remove hide medium
							if ($(this).hasClass('hide-for-medium-down')) {
								$(this).removeClass('hide-for-medium-down');
							}
						});
					}
				}
			},
			parts: {
				
				// Modify the quick search part
				quickSearch: function() {
					// Do we have a quick serach part on the page?
					if ($('.QuickSearchFormTable').length >= 1) {
						// Make the quick search look nice!
						$('.QuickSearchTextbox').attr('value', 'Search');
						$('table.QuickSearchFormTable').attr('cellspacing', '0');
					}
				}

				//Donation form - for required fields, move the asterisk to before the label on small devices 

				 requiredfield: function() {
					// Do we have a donation form part on the page?
					if ($('.DonationFormTable').length >= 1) {
						// add a class to all mandatory tr
						  $('td.DonationRequiredFieldMarker, td.DonationCaptureRequiredFieldMarker').closest('tr').addClass('hasRequired');						  
						  $('span.DonationRequiredFieldMarker').closest('tr').addClass('hasRequired');
					}
				}


			},
			// Make smart menus
			smartMenus: function() {
				if ($('.main-menu').length >= 1) {
					$('.main-menu').smartmenus();
				}
				// Trigger click events to show selected menu items (mobile)
				//$('#menubtn').click( function(){
				//	setTimeout(function(){ $('.smallnav .main-menu li.parent.selected:first a.has-submenu').click();}, 200);
				//});
				// Trigger client event to show selected menu items (left nav)	
				setTimeout(function() {
					$('#leftnav ul li.parent.selected').children('a').click();
				}, 200);
			}
		}
	} // end UWT
}; // end BBI
/*
===================================================
 Run Global Functions 
---------------------------------------------------
 Default load methods to be used inside BBNC:
 	* Sys.WebForms
 	Event raised after all content on the page is 
 	refreshed or loaded after postback. Can be 
 	add_pageLoaded () or remove_pageLoade();

 Alternative load methods to be used outside BBNC:
 	* $(window).load();
	Triggered after the window is loaded

	* $(document).ready();  
	Triggered after all assets completely received.	
---------------------------------------------------
*/
// Functions to run each time the page loads
$(document).ready(function() {
	BBI.UWT.bbis.pageLoad();
});
// Functions to run each time the pane is refreshed
Sys.WebForms.PageRequestManager.getInstance().add_pageLoaded(function() {
	BBI.UWT.bbis.paneRefresh();
});
/*
===================================================
 CLIENT PLUGINS

---------------------------------------------------
 Plugin Name: jQuery 1.11.0
 Description: put jQuery in no-conflict mode immediately 
 URI: http://jquery.com/
---------------------------------------------------
*/
document.write('<script src="document.doc?id=11"></script>');
var $$ = jQuery.noConflict();
/*---------------------------------------------------
 Plugin Name: Foundation
 Description: Foundation Responsive Framework
 URI: foundation.zurb.com/
---------------------------------------------------
*/
document.write('<script src="document.doc?id=4"></script>');
/*

 ---------------------------------------------------
 Plugin Name: SmartMenus
 Description: jQuery plugin for responsive menu 
 URI: http://www.smartmenus.org/
---------------------------------------------------
*/
document.write('<script src="document.doc?id=6"></script>');
/*
 ---------------------------------------------------
 Plugin Name: Respond.js
 Description: JavaScript polyfill for IE8 to use media queries 
 URI: https://github.com/scottjehl/Respond
---------------------------------------------------
*/
document.write('<script src="document.doc?id=7"></script>');
/*
 ---------------------------------------------------
 Plugin Name: REM.js
 Description: JavaScript polyfill for IE8 to use REM units 
 URI: https://github.com/chuckcarpenter/REM-unit-polyfill 
---------------------------------------------------
*/
document.write('<script src="document.doc?id=8"></script>');
// Case insensitive version of ':contains()'
jQuery.expr[':'].Contains = function(a, i, m) {
	return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};