import React from 'react';
import s from './style.module.css'; // Importez le fichier CSS module

const ProfilInfos = ({}) => {
    return (
        <div className={s.profilInfosContainer}>
            <div className={s.profilInfosGeneral}>
                <p>Nom</p>
                <div className={s.profilInfosSubContainer}>
                    <p className={s.infosVisibles}>Chaka</p>
                </div>
                <p>Prénom</p>
                <div className={s.profilInfosSubContainer}>
                    <p className={s.infosVisibles}>Bouya</p>
                </div>
                <p>Pseudo</p>
                <div className={s.profilInfosSubContainer}>
                    <p className={s.infosVisibles}>Bouyachaka</p>
                </div>
                <p>Adresse mail</p>
                <div className={s.profilInfosSubContainer}>
                    <p className={s.infosVisibles}>bouyachaka@weshalors.com</p>
                </div>
                <p>Mot de passe</p>
                <div className={s.profilInfosSubContainer}>
                    <p className={s.infosVisibles}>***********************</p>
                </div>
            </div>
        </div>
    );
};

export default ProfilInfos;