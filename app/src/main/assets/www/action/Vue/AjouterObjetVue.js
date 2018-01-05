var AjouterObjetVue = function(controleur)

{
   this.objet = null;

   var instance = this;

   this.afficher = function()

   {

       this.objet = null;

       $("body").html(AjouterObjetVue.pageAjouterObjet);

       $(".formulaire-ajouter").on("submit", function(evenement)
	   {

			evenement.preventDefault();

			console.log("AjouterObjetVue->submit");

			var nom = $("#nom").val();

			var marque = $("#marque").val();

			var description = $("#description").val();
			
			controleur.ajouterObjet(nom, marque, description);
			
			window.location.hash = "";

			return false;

		});

	}

}

AjouterObjetVue.pageAjouterObjet = $("#page-ajouter-objet").html();