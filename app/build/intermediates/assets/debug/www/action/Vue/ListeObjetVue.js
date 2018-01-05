var ListeObjetVue = function(listeObjet)
{
	this.afficher = function(){

		$("body").html(ListeObjetVue.pageListeObjet);

		var htmlListeObjet = $("#liste-Objet");

		var li = "";


		for(var indiceObjet in listeObjet)
		{
		    li += "<li><a href='#Objet/" + listeObjet[indiceObjet].id + "'>" + listeObjet[indiceObjet].nom + " | </a> <a href='#modifier-objet/"+listeObjet[indiceObjet].id+"'>Modifier</a> </li>";
		}

		htmlListeObjet.html(li);
	};

	this.afficherObjet = function(id){

	};
};

ListeObjetVue.pageListeObjet = $("#page-liste-Objet").html();