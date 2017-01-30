'use strict';

(function(module) {
  const aboutController = {};
  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.hideCont = function(){
    console.log('working inside aboutController.hideCount');
    $('#articles').hide();
    $('#about').show();
  }

  module.aboutController = aboutController;
})(window);
