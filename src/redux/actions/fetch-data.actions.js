import { FETCH_DATA } from "../../constants/actionTypes";

import { firestore } from "../../firebase/firebase.utils";

export const fetchData = () => {
  return async dispatch => {
    try {
      const heroList = {};
      const collectionRef = firestore.collection("heroes");
      const querySnapshop = await collectionRef.get();
      querySnapshop.docs.forEach(doc => {
        const hero = doc.data();
        heroList[hero.name] = hero;
      });

      const abilityRef = firestore.collection("abilities");
      const abilitySnapshop = await abilityRef.get();
      const abilityList = abilitySnapshop.docs[0].data();

      dispatch(fetchDataFinish(heroList, abilityList));
    } catch (error) {
      console.error(error);
    }
  };
};

const fetchDataFinish = (heroData, abilityData) => ({
  type: FETCH_DATA,
  payload: {
    heroData,
    abilityData
  }
});
