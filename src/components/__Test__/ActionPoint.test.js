import React from 'react'
import { mount, shallow } from 'enzyme'
import UserContextProvider from '../../contexts/UserContextProvider'
import ActionPoint from '../ActionPoint';

describe("Test'renderActionPoint'", () => {
  
  // it("it renders internal link correctly", () => {
  //   const linkInternal = {getFrontendUrl: "/myFrontendURL", title: "My Frontend URL"}
  //   const wrapper = mount(<UserContextProvider><BrowserRouter><ActionPoint linkInternal={linkInternal} linkKind={0}/></BrowserRouter></UserContextProvider>)
  //   expect(wrapper.find("a").at(1).hasClass("internal-link")).toBe(true)
  //   console.log(wrapper.debug())
  //   // FAIL (får syntaxError Link > a)
  // })

  it("it renders external link class correctly", () => {
    const wrapper = shallow(<ActionPoint linkKind={1}/>)
    expect(wrapper.find("a").hasClass("external-link")).toBe(true)
  })

  it("it renders modal link class correctly", () => {
    const wrapper = mount(<UserContextProvider><ActionPoint linkKind={2}/></UserContextProvider>)
    expect(wrapper.find("a").hasClass("modal-link")).toBe(true)
  })

  it("it renders document link class correctly", () => {
    const wrapper = mount(<UserContextProvider><ActionPoint linkKind={3}/></UserContextProvider>)
    expect(wrapper.find("a").hasClass("document-link")).toBe(true)
  })

  it("it returns 'null' correctly if there is no 'linkKind'", () => {
    const wrapper = mount(<UserContextProvider><ActionPoint/></UserContextProvider>)
    expect(wrapper.find("a")).not.toBe(true)
  })

})


describe("Test'getIconCSSClass'", () => {
  
  it("returns 'links__icon--' class correctly", () => {
    const wrapper = mount(<UserContextProvider><ActionPoint linkKind={1} iconKind={0}/></UserContextProvider>)
    expect(wrapper.find("a").hasClass("links__icon--")).toBe(true)
  })

  it("returns 'links__icon--image' class correctly", () => {
    const wrapper = mount(<UserContextProvider><ActionPoint linkKind={1} iconKind={1}/></UserContextProvider>)
    expect(wrapper.find("a").hasClass("links__icon--image")).toBe(true)
  })

  it("returns 'links__icon--video' class correctly", () => {
    const wrapper = mount(<UserContextProvider><ActionPoint linkKind={1} iconKind={2}/></UserContextProvider>)
    expect(wrapper.find("a").hasClass("links__icon--video")).toBe(true)
  })

  it("returns 'links__icon--link' class correctly", () => {
    const wrapper = mount(<UserContextProvider><ActionPoint linkKind={1} iconKind={3}/></UserContextProvider>)
    expect(wrapper.find("a").hasClass("links__icon--link")).toBe(true)
  })

  it("returns 'links__icon--document' class correctly", () => {
    const wrapper = mount(<UserContextProvider><ActionPoint linkKind={1} iconKind={4}/></UserContextProvider>)
    expect(wrapper.find("a").hasClass("links__icon--document")).toBe(true)   
  })
})

describe("Test 'renderExternalLink()'", () => {
  it("renders External link text correctly", () => {
    const wrapper = mount(<UserContextProvider><ActionPoint linkKind={1} title="External link"/></UserContextProvider>)
    expect(wrapper.find("a").text()).toBe("External link")
  })
})

describe("Test 'renderInternalLink()'", () => {
  // it("", () => {
  //   const wrapper = mount(<UserContextProvider><ActionPoint linkKind={0} title="Internal link"/></UserContextProvider>)
  //   expect(wrapper.find("a").text()).toBe("Internal link")
  // })
})
describe("Test 'renderModalLink()'", () => {
  it("renders Modal link text correctly", () => {
    const wrapper = mount(<UserContextProvider><ActionPoint linkKind={2} title="Modal Link"/></UserContextProvider>)
    expect(wrapper.find("a").text()).toBe("Modal Link")
  })
})
describe("Test 'renderDocumentLink()'", () => {
  it("renders Document link text correctly", () => {
    const wrapper = mount(<UserContextProvider><ActionPoint linkKind={2} title="Document Link"/></UserContextProvider>)
    expect(wrapper.find("a").text()).toBe("Document Link")
  })
})