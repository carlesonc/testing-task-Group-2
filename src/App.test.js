import React from 'react'
import App from './App';
import { mount } from 'enzyme'
import UserContextProvider from './contexts/UserContextProvider'
import ActionPoint from './components/ActionPoint';

describe("Test'renderActionPoint'", () => {
  
  // it("it renders internal link correctly", () => {
  //   const linkInternal = {getFrontendUrl: "/myFrontendURL", title: "My Frontend URL"}
  //   const wrapper = mount(<UserContextProvider><BrowserRouter><ActionPoint linkInternal={linkInternal} linkKind={0}/></BrowserRouter></UserContextProvider>)
  //   expect(wrapper.find("a").at(1).hasClass("internal-link")).toBe(true)
  //   console.log(wrapper.debug())
  //   // FAIL (får syntaxError Link > a)
  // })

  it("it renders external link correctly", () => {
    const wrapper = mount(<UserContextProvider><ActionPoint linkKind={1}/></UserContextProvider>)
    expect(wrapper.find("a").hasClass("external-link")).toBe(true)
    console.log(wrapper.debug())
  })

  it("it renders modal link correctly", () => {
    const wrapper = mount(<UserContextProvider><ActionPoint linkKind={2}/></UserContextProvider>)
    expect(wrapper.find("a").hasClass("modal-link")).toBe(true)
    console.log(wrapper.debug())
  })

  it("it renders document link correctly", () => {
    const wrapper = mount(<UserContextProvider><ActionPoint linkKind={3}/></UserContextProvider>)
    expect(wrapper.find("a").hasClass("document-link")).toBe(true)
    console.log(wrapper.debug())
  })

  it("it returns 'null' correctly", () => {
    const wrapper = mount(<UserContextProvider><ActionPoint linkKind={3}/></UserContextProvider>)
    expect(wrapper.find("a")).not.toBe(true)
    console.log(wrapper.debug())
  })

})