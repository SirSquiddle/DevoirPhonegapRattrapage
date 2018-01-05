var applicationListeNoel = {

    objetDAO : new ObjetDAO(),
    lancer:function() {
        $(window).on('hashchange', $.proxy(this.naviguer, this));
        this.naviguer();
    },

    naviguer:function(){
        var ancre = window.location.hash;
        console.log(ancre);
        if(!ancre){
            var listeObjetVue = new ListeObjetVue(this.objetDAO.getListeObjet());
            listeObjetVue.afficher();
        }else if(ancre.match(/^#ajouter-objet/))
		{
			var ajouterObjetVue = new AjouterObjetVue(this.objetDAO);
			ajouterObjetVue.afficher();
		}else if(ancre.match(/^#modifier-objet\/[0-9]/))
        {
            var matchReg = ancre.match(/^#modifier-objet\/[0-9]/)[0].split("/");
         	var modifierObjetVue = new ModifierObjetVue(this.objetDAO, this.objetDAO.getObjetById(matchReg[matchReg.length - 1]));
         	modifierObjetVue.afficher();
        }else if(ancre.match(/^#Objet\/[0-9]/))
        {
            var matchReg = ancre.match(/^#Objet\/[0-9]/)[0].split("/");
            var objetVue = new ObjetVue(this.objetDAO.getObjetById(matchReg[matchReg.length - 1]));
            //console.log(matchReg[matchReg.length - 1]);
            objetVue.afficher();
        }
    }
};

applicationListeNoel.lancer();