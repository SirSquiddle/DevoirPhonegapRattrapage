var ObjetController = function()
{
    var dao = new ObjetDAO();

    this.getListeObjets = function()
    {
        //
    }

    this.addObjet = function(objetAjoute)
    {
        //
    }

    this.modifierObjet = function(objetModifie)
    {
        //
    }

    this.getObjet = function(id_objet)
    {
        return dao.getObjetById(id_objet);
    }

};
