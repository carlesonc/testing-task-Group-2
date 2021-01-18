import React from 'react'
import App from '../../App';
import { mount } from 'enzyme'
import UserContextProvider from '../../contexts/UserContextProvider'
import ActionPoint from '../ActionPoint';

describe("Test'renderActionPoint'", () => {
  it("it renders external link correctly", () => {
    const wrapper = mount(<ActionPoint linkKind={1}/>)
    // expect(wrapper.find("a").hasClass("external-link")).toBe(true)
    // console.log(wrapper.debug())
  })
})