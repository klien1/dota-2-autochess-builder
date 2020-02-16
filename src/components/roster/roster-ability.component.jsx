import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import HeroCardAbilityIcon from "../hero-card/hero-card-ability-icon.component";

import classIcons from "../../data/classIcons";
import { PAPER_COLOR } from "../../constants/color";

const CurrentAbilities = ({ countHeroes, abilityData }) => {
  const generateAbility = () => {
    const DEMON = "Demon";
    const OGRE = "Ogre";
    const DWARF = "Dwarf";
    const obj = {};

    _.chain(countHeroes)
      .pickBy(val => val > 0)
      .map((value, key) => {
        if (key === DWARF || key === OGRE) return null;
        if (key === DEMON && countHeroes[DEMON] > 1) {
          delete obj[DEMON];
          return null;
        }

        const curHeroAbility = abilityData[key];
        for (let i = curHeroAbility.length - 1; i >= 0; --i) {
          const curKey = Object.keys(curHeroAbility[i])[0];
          const ability = Object.values(curHeroAbility[i])[0];
          if (curKey <= value)
            return (obj[key] = { cost: curKey, effect: ability });
        }
        return null;
      })
      .value();

    return obj;
  };

  const abilities = generateAbility();
  return (
    <List dense>
      {_.map(abilities, (value, key) => {
        return (
          <Paper key={key} style={{ backgroundColor: PAPER_COLOR }}>
            <ListItem>
              <HeroCardAbilityIcon src={classIcons[key]} iconName={key} />
              <ListItemText
                primary={`${key} (${value.cost})`}
                secondary={value.effect}
              />
            </ListItem>
          </Paper>
        );
      })}
    </List>
  );
};

const mapStateToProps = state => ({
  countHeroes: state.countHeroes,
  abilityData: state.abilityData
});

export default connect(mapStateToProps)(CurrentAbilities);
