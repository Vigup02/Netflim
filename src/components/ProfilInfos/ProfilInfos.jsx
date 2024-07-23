import React from 'react';


const ProfilInfos = ({}) => {
    return (
        <div>
            <div>
                <p>Nom</p>
                <div>
                    <p>Chaka</p>
                    <div></div>
                </div>
                <p>Prénom</p>
                <div>
                    <p>Bouya</p>
                    <div></div>
                </div>
                <p>Pseudo</p>
                <div>
                    <p>Bouyachaka</p>
                    <div></div>
                </div>
                <p>Adresse mail</p>
                <div>
                    <p>bouyachaka@weshalors.com</p>
                    <div> <button>modifier mon adresse mail</button></div>
                </div>
                <p>Mot de passe</p>
                <div>
                    <p>***********************</p>
                    <div> <button>modifier mon adresse mail</button></div>
                </div>
            </div>
            <button>Enregistrer mes modifications</button>
            <button>supprimer mon compte</button>
        </div>
    );
};

export default ProfilInfos;