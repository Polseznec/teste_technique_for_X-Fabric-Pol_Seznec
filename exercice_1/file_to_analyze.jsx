import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import EventSelectionTopBar from "../eventSelectionTopBar/EventSelectionTopBar";
import { X_DARK_FONT } from "../../../assets/colors/Colors";
import OngoingEventCarousel from "./ongoingEvents/OngoingEventCarousel";
import SubscriptionList from "./subscriptionList/SubscriptionList";
import { subscribeToUserSubscriptions } from "../../../actions/eventSelectionActions/subscribeToUserEventSubscriptions";
import { unsubscribeToUserEventSubscriptions } from "../../../actions/eventSelectionActions/unsubscribeToUserEventSubscriptions";
import { useDispatch } from "react-redux";
import * as EventSelectionActions from "../../../actions/eventSelectionActions/_index";

/*
 *ligne 1 à 11 :
 *Importation des différentes "dependencies", components React, couleurs.
 *utile au bon fonctionnement de ce fichier.
 */

EventSubscriptions.propTypes = {
  userEventList: PropTypes.object,
  selectEventList: PropTypes.func.isRequired,
};

/*
 *ligne 19 à 22 :
 *Utilisation de la librairie "PropTypes".
 *Analyse Les "Type" des Props reçu la fonction EventSubscriptions().
 */

/**
 * List of events
 * @param {Object} props
 * @param {Object} props.userEventList
 * @param {Function} props.selectEventList
 * @return {JSX.Element}
 * @constructor
 */

/*
 *ligne 32 à 36 :
 *Description technique de ce fichier:
 *"props" &  "props.userEventList" sont tous deux d'est objet que reçoit la fonction EventSubscriptions().
 * @param {Function} props.selectEventList : Indique que props.selectEventList est une fonction.
 * @return {JSX.Element} :  Indique quel type de fichier retourne ce fichier. Le fichier retourné est un fichier .jsx, soit un fichier JavaScripte React.
 */

function EventSubscriptions(props) {
  const { userEventList, selectEventList } = props;
  const [ongoingEvents, setOngoingEvents] = useState([]);
  const [notOngoingEvents, setNotOngoingEvents] = useState([]);

  /*
   *ligne 49 & 50:
   *déclaration de 2 Hooks "useState", avec  comme valeur initiale un array vide (chacun).
   *A pour utilité de pouvoir récupérer  ou modifier la valeur au sein de la fonction useState()
   */

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(EventSelectionActions.subscribeToUserEventSubscriptions());

    return () => {
      dispatch(EventSelectionActions.unsubscribeToUserEventSubscriptions());
    };
  }, []);

  /*
   *ligne 58:
   * Déclaration de la constante dispatch faisant appelle à la propriété 'useDispatch()' de la library  Redux.
   * Ligne 59 à 65:
   * Utilisation du Hook React useEffect, qui dans ce cas fait des appelle serveur a Redux.
   * Je pense que ce Hook a pour utilité de sauvegardé dans le serveur, grace a Redux les actions de "follow" ou "unfollow" d'un utilisateur
   * aux events disponible sur L'app.
   */

  useEffect(() => {
    const newOngoingEvents = [];
    const newNotOngoingEvents = [];

    userEventList.data.forEach((event) =>
      parseInt(event["startingDate"]) <= Date.now() &&
      parseInt(event["endingDate"]) >= Date.now()
        ? newOngoingEvents.push(event)
        : newNotOngoingEvents.push(event)
    );

    setOngoingEvents(newOngoingEvents);
    setNotOngoingEvents(newNotOngoingEvents);
  }, [userEventList]);

  /*
   *ligne 77:
   * Hook React useEffect()
   * ligne 78 & 79:
   * déclaration de 2 constantes, avec comme valeur un array Vide (chacun).
   * ligne 81 à 89 :
   * logique du hook =>
   * Pour chaque data(events enregistré dans le server)de la props "userEventList" ,
   * vérifie si la date actuelle est inférieur ou égal à la date de commencement  & si la date actuelle est supérieur ou égal à la date de fin de chaque event.
   * Si l'event remplie les 2 conditions, les valeur de  l'event  seront disponible dans l'array "newOngoingEvents". Sinon les valeur de  l'event  seront disponible dans l'array "newNotOngoingEvents".
   * Ensuite, les valeurs 'trié' entre les deux arrays "Ongoing" & "NotOngoing" sont envoyés dans les hook de statue (ligne 49 pour "Ongoing" & ligne 50 pour "NotOngoing" ). Ce qui met à jour les status de cette function.
   * Pour finir, Ce Hook "S'active" à chaque fois que l'objet userEventList change.
   */

  return (
    <Container>
      <EventSelectionTopBar
        underlined={1}
        selectEventList={selectEventList}
        selectEventSubscriptions={null}
      />

      {ongoingEvents.length > 0 && (
        <OngoingEventCarousel ongoingEvents={ongoingEvents} />
      )}
      <SubscriptionList notOngoingEvents={notOngoingEvents} />
    </Container>
    /*
     *ligne 106:
     * Tout ce qui est compris dans le return sera affiché dans le DOM.
     * ligne 107 :
     * component de style due à la librarie "styled-components"
     * ligne 108 & 117 :
     * Ici est appelé 3 components.
     *  => EventSelectionTopBar : reçois 3 props. underlined, selectEventSubscriptions & selectEventList. Cette dernière était déjà une props dans ce fichier.
     *  => OngoingEventCarousel : Ne sera affiché que si le nombres d'object dans l'array ongoingEvents et inferieur a 0. Et reçois la props ongoingEvents si la condition est remplit.
     *  => SubscriptionList : reçois 1 props, notOngoingEvents. c'est un array qui à reçu des objets venant du hook useEffect. Hook useEffect s'active par à chaque fois que l'objet userEventList  est modification.
     */
  );
}

export default EventSubscriptions;

/*
 *ligne 133:
 *Export de la fonction EventSubscriptions.
 */

const Container = styled.View`
  flex: 1;
  display: flex;
  background-color: ${X_DARK_FONT};
`;

/*
 *ligne 140 à 144:
 *Déclaration du style CSS lié au componant de style "Container". Tout élément html à l'intérieur de ce component
 * aura un flex de 1, un display: flex et un bg-color importé depuis "../../../assets/colors/Colors"
 */
