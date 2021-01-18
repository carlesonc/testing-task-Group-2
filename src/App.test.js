import React from 'react'
import App from './App';
import { shallow, mount } from 'enzyme'
import UserContextProvider from './contexts/UserContextProvider'
import ActionPoint from './components/ActionPoint';

describe("Test'App.js'", () => {

  it("it renders App.js correctly", () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find("div").exists()).toBe(true) 
  })
})

// describe("Test 'renderExternalLink", () => {
//   it("renders title ", () => {
//     const wrapper = shallow(<App/>)
//     console.log(wrapper.debug())
//     expect(wrapper.find(ActionPoint).at(1).prop("title")).toBe(true)
//   })
// })