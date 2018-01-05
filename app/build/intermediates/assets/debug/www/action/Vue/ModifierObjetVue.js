var ModifierObjetVue = function(dao, objet)

{
   this.objet = null;

   var instance = this;

   this.afficher = function()

   {

       this.objet = null;

       $("body").html(ModifierObjetVue.pageModifierObjet);

	   $("#nom").val(objet.nom);
	   $("#marque").val(objet.marque);
	   $("#description").val(objet.desc);
	   
       $(".formulaire-modifier").on("submit", function(evenement)
	   {

			evenement.preventDefault();

			console.log("ModifierObjetVue->submit");

			var nom = $("#nom").val();

			var marque = $("#marque").val();

			var description = $("#description").val();
			
			dao.modifierObjet(objet.id, nom, marque, description);
			
			window.location.hash = "";

			return false;

		});

	}

}

ModifierObjetVue.pageModifierObjet = $("#page-modifier-objet").html();