var ListeObjetVue = function(listeObjet)
{
	this.afficher = function(){

		$("body").html(ListeObjetVue.pageListeObjet);

		var htmlListeObjet = $("#liste-Objet");

		var li = "";


		for(var indiceObjet in listeObjet)
		{
		    li += "<tr><li><td><a href='#Objet/" + listeObjet[indiceObjet].id + "'>" + listeObjet[indiceObjet].nom + "          </a></td><td>      <a class='btn' href='#modifier-objet/"+listeObjet[indiceObjet].id+"'>Modifier</a> <br /><br /></td></li></tr>";
		}

		htmlListeObjet.html(li);
	};

	this.afficherObjet = function(id){

	};
};

ListeObjetVue.pageListeObjet = $("#page-liste-Objet").html();