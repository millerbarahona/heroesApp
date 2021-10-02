import React from "react";
import { shallow } from "enzyme";
import { HeroesApp } from "../HeroesApp";
import {setupTest} from './setupTests';

setupTest(); //se hace para poder llamar la configuracion de test

describe('pruebas en HookApp', () => {
  test('debe mostrarse bien', () => {
    const wrapper = shallow(<HeroesApp />);
    expect(wrapper).toMatchSnapshot();
  });
});