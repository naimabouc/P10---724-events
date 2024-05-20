import { useEffect, useState } from "react"; 
import { useData } from "../../contexts/DataContext"; 
import { getMonth } from "../../helpers/Date"; 
import "./style.scss"; 

const Slider = () => {
  const { data } = useData(); 
  const [index, setIndex] = useState(0); 

  // Tri des événements par date décroissante
  const byDateDesc = data?.focus
    ? data?.focus.sort(
        (evtA, evtB) => new Date(evtB.date) - new Date(evtA.date)
      )
    : [];

  useEffect(() => {
    // Utilisation de l'effet useEffect pour gérer le changement automatique d'index
    const interval = setInterval(() => {
      // Définition d'un intervalle pour changer l'index automatiquement
      setIndex((current) =>
        current < byDateDesc.length - 1 ? current + 1 : 0
      ); // Incrémentation de l'index ou retour au début s'il atteint la fin
    }, 5000); // Changement toutes les 5 secondes
    return () => clearInterval(interval); // Nettoyage de l'intervalle lorsque le composant est démonté
  }, [index, byDateDesc.length]); // Déclenchement de l'effet lorsque l'index ou la longueur des événements change

  const handleOptionChange = (e) => {
    // Gestion du changement d'option dans la pagination
    setIndex(parseInt(e.target.value, 10)); // Mise à jour de l'index en fonction de la valeur sélectionnée
  };
  
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
          <div
            key={event.id} // Clé unique pour chaque événement
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide" 
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
        )
      )}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
        {byDateDesc.map((event, radioIdx) => (
              <input
                key={event.id} // Clé unique pour chaque bouton
                type="radio"
                name="radio-button"
                value={radioIdx}
                checked={index === radioIdx} // Vérification si l'index correspond au bouton
                onChange={handleOptionChange} // Gestion du changement d'option
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider; 