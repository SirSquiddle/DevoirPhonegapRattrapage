var ObjetVue = function(objet){

    var controleur = new ObjetController();

    this.afficher = function(){
        $("body").html(ObjetVue.pageObjet);
        console.log(objet);
        $("#titreObjet").html(objet.nom);
        $("#marque").html(objet.marque);
		$("#description").html(objet.desc);
    }
};

ObjetVue.pageObjet = $("#page-Objet").html();