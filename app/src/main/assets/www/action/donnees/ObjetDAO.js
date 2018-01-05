var ObjetDAO = function()
{
	
	listeObjet = [];
			
	initStorage = function(){
		stor = localStorage;
		if(stor.getItem('lol') == null)
		{		
			listeObjet = [
			new Objet("Jean-Eugene Delacroix", "Esclaves français incorporation", "Esclave patissier", 1),
			new Objet("Je suis un Objet","Papa noël","C'est une surprise!", 2)
			];
			
			temp=[];
			listeObjet.forEach(function(item){
				temp.push(item.sauvegarde());
			})
	
			localStorage.setItem('lol', JSON.stringify(temp));
		}else
		{
			listeTmp = JSON.parse(stor.getItem('lol'));
			
			listeTmp.forEach(function (item){
				listeObjet.push(new Objet(item.nom, item.marque, item.desc, item.id));
			});
		}
	};

    this.getListeObjet = function() {
        return listeObjet;
    };

    this.getObjetById = function(id){
        for(var objet in listeObjet){
            if(listeObjet[objet].id == id){
                return listeObjet[objet];
            }
        }
    };
	
	this.ajouterObjet = function(nom, marque, desc){
		listeObjet.push(new Objet(nom, marque, desc, listeObjet.length + 1));
		this.sauvegarderStorage();
			
	}
	this.modifierObjet = function(id, nom, marque, desc){
	    console.log(id);
	    listeObjet[id-1].nom = nom;
	    listeObjet[id-1].marque = marque;
	    listeObjet[id-1].desc = desc;
    	//listeObjet.push(new Objet(nom, marque, desc, listeObjet.length + 1));
    	this.sauvegarderStorage();

    }
	
	this.sauvegarderStorage = function()
	{
		temp=[];
		listeObjet.forEach(function(item)
			{
				temp.push(item.sauvegarde());
			}
		)
	
		localStorage.setItem('lol', JSON.stringify(temp));
	}
	
	initStorage();
};
