var ObjetController = function()
{
    var dao = new ObjetDAO();

    this.getListeObjet = function()
    {
        return dao.getListeObjet();
    }

    this.addObjet = function( nom, marque, desc)
    {
        dao.ajouterObjet(nom, marque, desc);
    }

    this.modifierObjet = function(id, nom, marque, desc)
    {
        dao.modifierObjet(id, nom, marque, desc);
    }

    this.getObjetById = function(id_objet)
    {
        return dao.getObjetById(id_objet);
    }

};
