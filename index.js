/*	**************************************************************************
 *   @preserve
 *   VistaPanel Add-on
 *   Script Name:  VistaPanel-SB
 *   Version: 1.0
 *   This file is licensed under MIT Attribution
 ************************************************************************** 
 */
const urlParams = new URLSearchParams(window.location.search);
const page = urlParams.get("option");

function sitebuilder() {
	if (document.getElementById("item_sitereptile") != null) { //checks if the icon exists/panel is loaded
		document.getElementsByTagName("footer")[0].innerHTML += `
<div class="modal fade" id="sb" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Entering SiteBuilder (Site.Pro</h4>
      </div>
      <div class="modal-body">
      <div class="alert alert-warning" role="alert">
  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
  <span class="sr-only">Recommened:</span>
  Upgrade to Premium Hosting for more features,more faster!
</div>
 
        <form method="POST" action="https://buildall.onrender.com/main">
  <label for="ftp_user">FTP Username:</label><br>
  <input class="form-control"  type="text" id="ftp_user" name="ftp_user" ><br>
  <label for="ftp_password">FTP Password:</label><br>
  <input class="form-control"  type="text" id="ftp_password" name="ftp_password" ><br><br>
    <label for="domain">Domain Name:</label><br>
  <input class="form-control" type="text" id="domain" name="domain"><br>
  <label for="ftp_host">FTP Host:</label><br>
  <input class="form-control"  type="text" id="ftp_host" name="ftp_host" ><br><br>
    <label for="builder_upload">Domain Directroy (Example: subdomain.web.net/htdocs/):</label><br>
  <input class="form-control"  type="text" id="builder_upload" name="builder_upload" ><br><br>
      <input type="submit" value="Go!" class="btn btn-primary">
      </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
    
      </div>
 
    </div>
  </div>
</div>
 `
		var a = document.getElementById("icon-sitereptile")
		a.setAttribute("data-toggle", "modal");
		a.setAttribute("data-target", "#sb");
		a.setAttribute("href", "#sb");
		var b = document.getElementById("item_sitereptile")
		b.setAttribute("data-toggle", "modal");
		b.setAttribute("data-target", "#sb");
		b.setAttribute("href", "#sb");
		b.setAttribute("ng-href", "#sb");
		console.log("SiteBuilder Loaded")
	} else {
		setTimeout(sitebuilder, 100); //if not, re check every 100ms
		console.log("Failed to Load SiteBuilder,Try again...")
	}
}

//page null = homepage
if (page == null) {
	setTimeout(sitebuilder, 100); //Check after 100ms. People rarely can load the panel instantly.
}
