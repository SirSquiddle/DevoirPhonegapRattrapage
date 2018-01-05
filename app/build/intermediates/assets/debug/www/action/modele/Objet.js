var Objet = function(nom, marque, desc, id)
{
	this.id = id||-1 ;
	this.nom = nom;
	this.marque = marque;
	this.desc = desc;
	
	this.sauvegarde = function()
	{
		return {"id":this.id, "nom":this.nom, "marque":this.marque, "desc":this.desc}
	}
}