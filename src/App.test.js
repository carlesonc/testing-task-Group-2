import React from "react"
import App from "./App"
import { shallow } from "enzyme"

describe("Test'App.js'", () => {
	it("it renders App.js correctly", () => {
		const wrapper = shallow(<App />)
		expect(wrapper.find("div").exists()).toBe(true)
	})
})
