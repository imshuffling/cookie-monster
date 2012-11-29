<h1>Cookie monster</h1>
<p>Project at work where a quick solution was needed to conform with the new cookies law that was coming into place, we were using Drupal at the time and we looked at a couple of contrib modules that were in development.</p>
<p>In the end, all that was needed was a page notifying users that cookies were present. Built with jQuery and jQuery.cookie plugin</p>
<p.Check out the source code. pretty straight forward</p>
<pre>// Set cookie-monster for browser session.
jQuery.cookie( 'cookie-monster', '1',  { path: '/' });</pre>
<p>Click OK and the box will slide up setting the cookie.</p>
<p>View the demo at <a href="http://thirstythursdays.co.uk/cookie-monster/">thirstythursdays.co.uk/cookie-monster/</a>