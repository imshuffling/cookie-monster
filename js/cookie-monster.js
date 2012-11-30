jQuery(document).ready(function(){  
  if(jQuery.cookie('cookie-monster') == null) {
    jQuery('body').prepend('<div style="margin: 0px auto; background: #5C5C5C; color: #fff; padding: 15px;" id="the-cookie-monster"><div style="color: #fff; margin: 0px auto;"><strong style="color: #fff;">Please read our terms of service</strong><p style="margin:0 0 1em;color: #fff;">By clicking OK or continuing to use our website, you consent to our use of cookies and our Website Terms and Conditions, Privacy Policy and Statement on Cookies. Alternatively, you may want to talk to our sales team. If so, please call 0845 800 8000 or email sales@company.co.uk</p><a href="#" id="cookie-accept" style="width:40px;border-radius:5px;color: #FFF;padding: 5px;text-align: center;width: 40px;background: #91C34A;display:block;">OK</a></div></div>');
  }
   jQuery('#cookie-accept').click(function () {
 	// Set cookie-monster for browser session.
  jQuery.cookie( 'cookie-monster', '1',  { path: '/' });
  jQuery("#the-cookie-monster").slideUp(200);
 });
});