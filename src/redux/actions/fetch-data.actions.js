import { FETCH_DATA } from "../../constants/actionTypes";
import { firestore } from "../../firebase/firebase.utils";

export const fetchData = () => {
  return async dispatch => {
    try {
      const [heroList, abilityList] = await Promise.all([
        fetchHeroes(),
        fetchAbility()
      ]);
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

const fetchHeroes = async () => {
  try {
    const collectionRef = firestore.collection("heroes");
    const querySnapshop = await collectionRef.get();
    return querySnapshop.docs[0].data();
  } catch (error) {
    console.error(error);
  }
};

const fetchAbility = async () => {
  try {
    const abilityRef = firestore.collection("abilities");
    const abilitySnapshop = await abilityRef.get();
    return abilitySnapshop.docs[0].data();
  } catch (error) {
    console.error(error);
  }
};
